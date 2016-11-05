import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Session } from 'meteor/session';

Template.HomeLogin.events({
	'submit form'(event) {

		event.preventDefault();

		var playerNb = $("#playerNb").val();
		var playerPass = $("#playerPass").val();

		var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });

		//console.log(latestAcademy.name);

		var user = $.grep(latestAcademy.users, function (e) {
			return e.nb == playerNb;
		});

		var supposedlyLoggedUser = user[0];
		if (supposedlyLoggedUser
			&& supposedlyLoggedUser.nb == playerNb
			&& playerPass == supposedlyLoggedUser.password) {
			debugger;

			Session.set("loggedUser", user);
			console.log(Session.get("loggedUser"));
			//$('#loginPage').html('<h3>LOGIN DONE</h3>');
			FlowRouter.go('/map');
		} else {
			debugger;
			$('#loginPageMessage').text('Username ou password inválidos.');
		}
	}
});