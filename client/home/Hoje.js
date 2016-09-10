import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.Home.events({
   'click #myLoginBtn' (event)  {

    var playerNb = $("#playerNb").val();
	var playerPass = $("#playerPass").val();
		
    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var user = $.grep(latestAcademy.users, function(e){ return e.nb == playerNb; });
	
	Session.set("playerNb", user);
	
	console.log(Session.get("playerNb"));
  }
});
