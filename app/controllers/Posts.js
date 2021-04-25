(function (FJS) {

	// Set page meta data
	var metaData = {
		title: "Posts",
		keywords: "SPA, Single page application, Fastest app",
		description: "This is the worlds fastest app"
	};
	FJS.setMetaData(metaData);

	// Display users
	var usersList = document.getElementById('usersList');
	var usersTemplate = document.getElementById('usersList-template').innerHTML;
	var usersTemplateWithData = "";
	var usersToRender = "";

	// Fetch users list
	fetch("https://reqres.in/api/users")
		.then(function (res) {
			return res.json()
		})
		.then(function (res) {
			if (res.data && res.data.length) {
				res.data.forEach(function (item) {
					usersTemplateWithData = usersTemplate.replace(/{{imagePath}}/g, item.avatar);
					var title = item.first_name + " " + item.last_name;
					usersTemplateWithData = usersTemplateWithData.replace(/{{imageAlt}}/g, title);
					usersTemplateWithData = usersTemplateWithData.replace(/{{title}}/g, title);
					usersTemplateWithData = usersTemplateWithData.replace(/{{email}}/g, item.email);
					usersToRender += usersTemplateWithData;
				});
				usersList.innerHTML = usersToRender;
			}
		});

})(FrameworkJS);