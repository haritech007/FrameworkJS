(function(FJS, Config) {

	// Set page meta data
  var metaData = {
    title: "About us | " + Config.titlePostfix,
    keywords: "SPA, Single page application, Fastest app",
    description: "This is the worlds fastest app"
  };
  FJS.setMetaData(metaData);
	
	var btn = document.getElementById('abtBtn');
	btn.onclick = function() {
		alert('About');
	};

  var context = FJS.getContext();
  if (context.contact) {
    var contactTemplate = document.getElementById("contact").innerHTML;
    contactTemplate = contactTemplate.replace(/{{name}}/g, context.contact.name);
    contactTemplate = contactTemplate.replace(/{{email}}/g, context.contact.email);
    contactTemplate = contactTemplate.replace(/{{message}}/g, context.contact.message);
    document.getElementById('contactList').innerHTML = contactTemplate;
  }
	
})(FrameworkJS, AppConfig);