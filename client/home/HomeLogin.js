import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Session } from 'meteor/session';


const WRONG_USERNAME_PASSWORD_MESSAGE = 'Username ou password inválidos.';

Template.HomeLogin.events({
	'submit form'(event) {

		event.preventDefault();

		var playerNb = $("#playerNb").val();
		var playerPass = $("#playerPass").val();

		var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });

		var user = $.grep(latestAcademy.users, function (e) {
			return e.nb == playerNb;
		});

		var supposedlyLoggedUser = user[0];
		if (supposedlyLoggedUser
			&& supposedlyLoggedUser.nb == playerNb
			&& playerPass == supposedlyLoggedUser.password) {

			Session.set("loggedUser", user);

			FlowRouter.go('/map');
		} else {
			$('#loginPageMessage').show();
			$('#loginPageMessage').text(WRONG_USERNAME_PASSWORD_MESSAGE);
			$('#loginPageMessage').fadeOut(10000);
		}
	}
});