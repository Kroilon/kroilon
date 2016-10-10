import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Session } from 'meteor/session';

Template.HomeLogin.events({
   'submit form' (event)  {

   	event.preventDefault();

    var playerNb = $("#playerNb").val();
	var playerPass = $("#playerPass").val();

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

	console.log(latestAcademy.name);

    var user = $.grep(latestAcademy.users, function(e){
		return e.nb == playerNb;
	});

	if(user[0].nb == playerNb && playerPass == user[0].password){

		Session.set("loggedUser", user);
		console.log(Session.get("loggedUser"));
		//$('#loginPage').html('<h3>LOGIN DONE</h3>');
		FlowRouter.go('/dashboard');
		}
  	}
});