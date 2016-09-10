import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Session } from 'meteor/session';

Template.Home.events({
   'click #myLoginBtn' (event)  {

    var playerNb = $("#playerNb").val();
	var playerPass = $("#playerPass").val();
		
    var latestAcademy = Academy.find({}, {sort: {date: -1, limit: 1}});

	var user;
	
	debugger;
	
	for(var i = 0; i<latestAcademy.users.length; i++){
		if(latestAcademy.users[i].nb == playerNb){
			user = latestAcademy.users[i];
			return;
		}
	}
		
	Session.set("playerNb", user);
	
	console.log(Session.get("playerNb"));
  }
});
