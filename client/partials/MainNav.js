Template.MainNav.helpers({
	isLoggedIn() {
		return Session.get("loggedUser")!='' && Session.get("loggedUser")!=null && Session.get("loggedUser") != undefined;
	}
});

Template.MainNav.events({
	'click .logout': () => {		
		Session.set("loggedUser",'');
	}
})