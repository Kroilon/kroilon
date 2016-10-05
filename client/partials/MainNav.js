Template.MainNav.helpers({
	isLoggedIn() {
		return Session.get("loggedUser")!='' && Session.get("loggedUser")!=null && Session.get("loggedUser") != undefined;
	},
	firstName() {
		var selectedPlayer = Session.get("loggedUser")[0].name;
		console.log(selectedPlayer);
		return selectedPlayer;
	},
});

Template.MainNav.events({
	'click #logout': () => {		
		Session.set("loggedUser",'');
	}
})