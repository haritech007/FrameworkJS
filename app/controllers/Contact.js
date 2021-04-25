(function(FJS) {

  // Set page meta data
  var metaData = {
    title: "Contact us",
    keywords: "SPA, Single page application, Fastest app",
    description: "This is the worlds fastest app"
  };
  FJS.setMetaData(metaData);

  // Capture form information
  var form = document.getElementById('contactForm');

  form.onsubmit = function(e) {
    e.preventDefault();
    var name = e.target.fullname.value;
    var email = e.target.email.value;
    var message = e.target.message.value;

    var contact = { 
        contact: {
          name: name,
          email: email,
          message: message 
      }
    }

    // Get contact deatils from context
    if(name && email && message) {
      FJS.setContext(contact);
      e.target.fullname.value = e.target.email.value = e.target.message.value = "";
    }
  };
})(FrameworkJS);