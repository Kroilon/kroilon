Template.CharactersLayout.helpers({
	isLoggedIn() {
		return Session.get("loggedUser")[0].profile == "Admin" || Session.get("loggedUser")[0].profile == "Player";
	}
});