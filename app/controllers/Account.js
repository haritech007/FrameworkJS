(function(FJS) {

	// Set page meta data
  var metaData = {
    title: "My Account",
    keywords: "SPA, Single page application, Fastest app",
    description: "This is the worlds fastest app"
  };
  FJS.setMetaData(metaData);

	var btn = document.getElementById('accBtn');
	
	btn.onclick = function() {
		alert('Account');
	};
	
})(FrameworkJS);