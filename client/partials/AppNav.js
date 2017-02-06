Template.AppNav.helpers({
	isLoggedInAsAdmin() {
		return Session.get("loggedUser") != '' && Session.get("loggedUser") != null && Session.get("loggedUser") != undefined && Session.get("loggedUser")[0].profile == "Admin";
	}
});

Template.MainNav.events({
	'click .logout': () => {
		Session.set("loggedUser", '');
	}
})