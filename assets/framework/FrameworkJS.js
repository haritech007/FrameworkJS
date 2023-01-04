var NS = 'FrameworkJS';
window[NS] = (function (window) {

	var defaults = {
		appRoutes: [],
		appRoot: 'appRoot',
		version: '0.0.1',
		routeData: {},
		context: {}
	};

	function getInformation() {
		return {
			version: defaults.version
		};
	}

	function getRouteAndData(path) {
		var route = defaults.appRoutes.filter(function (item) {
			return item.path.includes(path);
		});
		if (route.length) {
			return route[0];
		} else {
			return null;
		}
	}

	function prepareUrl(routeData) {
		var url = routeData.path;
		return url;
	}

	function loadTemplate(template) {
		var appRoot = document.getElementById(defaults.appRoot);
		appRoot.innerHTML = template;
	}

	function loadController(controller) {
		var script = document.createElement("script");
		script.type = "text/javascript";
		script.async = 1;
		script.src = controller;
		var appRoot = document.getElementById(defaults.appRoot);
		appRoot.appendChild(script);
	}

	function publishRouteData(data) {
		defaults.routeData = data;
	}

	function getRouteData() {
		return defaults.routeData;
	}

	function bootStrap(path) {
		var routeData = getRouteAndData(path);
		if (routeData !== null) {
			if (routeData.template) {
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function () {
					if (this.readyState == 4 && this.status == 200) {
						loadTemplate(xhttp.responseText);
						publishRouteData(routeData);
						loadController(routeData.controller);
					}
				};
				xhttp.open("GET", routeData.template, true);
				xhttp.send();
			}
		}
	}

	function bindEvents() {
		document.addEventListener("DOMContentLoaded", function () {
			var path = location.pathname;
			var routeData = getRouteAndData(path);
			var url = prepareUrl(routeData);
			window.history.pushState(routeData.data, '', url);
			bootStrap(path);
		});

		document.addEventListener('click', function (e) {
			if (e.target.matches(".app-link")) {
				e.preventDefault();
				var path = e.target.getAttribute('href');
				var routeData = getRouteAndData(path);
				var url = prepareUrl(routeData);
				window.history.pushState(routeData.data, '', url);
				bootStrap(path);
			}
		});

		window.addEventListener('popstate', function (e) {
			var path = location.pathname;
			bootStrap(path);
		});
	}

	function init(appRoot, appRoutes) {
		defaults.appRoutes = appRoutes;
		defaults.appRoot = appRoot;
		bindEvents();
	}

	function setMetaData(metaData) {
		if (Object.keys(metaData).length) {
			for (keys in metaData) {
				if (keys === "title") {
					document.title = metaData.title;
				}
				var meta = document.querySelector("meta[name='" + keys + "']");
				if (meta) {
					meta.setAttribute("content", metaData[keys]);
				}
			}
		}
	}

	function setContext(contextObj) {
		if (Object.keys(contextObj).length) {
			for (keys in contextObj) {
				defaults.context[keys] = contextObj[keys];
			}
		}
	}

	function getContext() {
		return defaults.context;
	}

	return {
		init: init,
		getInformation: getInformation,
		getRouteData: getRouteData,
		setMetaData: setMetaData,
		setContext: setContext,
		getContext: getContext
	}
})(window);