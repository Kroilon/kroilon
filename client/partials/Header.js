Template.Header.helpers({
	isLoggedIn() {
		return Session.get("loggedUser")!='' && Session.get("loggedUser")!=null && Session.get("loggedUser") != undefined;
	},
	firstName() {
		var selectedPlayer = Session.get("loggedUser")[0].name;
		return selectedPlayer;
	},
});

Template.Header.events({
	'click #logout': () => {		
		Session.set("loggedUser",'');
	}
})