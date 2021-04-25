(function(FJS) {
	
	// Set page meta data
  var metaData = {
    title: "Welcome to FrameworkJS",
    keywords: "SPA, Single page application, Fastest app",
    description: "This is the worlds fastest app"
  };
  FJS.setMetaData(metaData);
	
	var btn = document.getElementById('homeBtn');
	
	btn.onclick = function() {
		alert('Home');
	};
	
})(FrameworkJS);