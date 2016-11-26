import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

Template.Map.helpers({
	total_day() {

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var scores = latestAcademy.teamScore;
		var energy_level = latestAcademy.energyLevel;
		var total_score = 0;

		$.each(scores, function(index, value){

			total_score += value.teamPoints;
		});

		var img_energyLevel = "/energyLevels/energyLevels_5.png";

		switch(energy_level) {			
			case 0:
				img_energyLevel = "/energyLevels/energyLevels_0.png";
				break;
			case 1:
				img_energyLevel = "/energyLevels/energyLevels_1.png";
				break;
			case 2:
				img_energyLevel = "/energyLevels/energyLevels_2.png";
				break;
			case 3:
				img_energyLevel = "/energyLevels/energyLevels_3.png";
				break;
			case 4:
				img_energyLevel = "/energyLevels/energyLevels_4.png";
				break;
			case 5:
				img_energyLevel = "/energyLevels/energyLevels_5.png";
				break;
			default:
				img_energyLevel = "/energyLevels/energyLevels_0.png";
				break;
		}

		//return total score without leading zeros
		var total = {score:total_score.replace(/^0+/, ''), img_energyLevel:img_energyLevel};

		return total;
	},
	currentRoomBadges() {

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var currentRoom = latestAcademy.currentRoom; 
		//console.log("CurrentRoom: " + currentRoom);		

		var mapRoom = Rooms.find({'name': currentRoom }).fetch();

		var roomBadges = new Array();

		mapRoom[0].badges.forEach( function(badges){

			var badgeName = badges.name; 
			//console.log("BadgeName: " + badgeName);

			var badge = Badges.find({'name': badgeName }, {"name" : 1, "locked" : 1}).fetch();
			var badgeImage = badge[0].image; 
			//console.log("BadgeImage: " + badgeImage);		
			var badgeStatus = "";
			//console.log("badgelocked: " + badges.locked);

			if (badges.locked === true) { 
				badgeStatus = "Locked";
				console.log("badgeStatus: " + badgeStatus);
			} else {
				badgeStatus = "Unlocked";
				console.log("badgeStatus: " + badgeStatus);
			}

			var newBadge = {'name': badgeName, 'image': badgeImage, 'status': badgeStatus };
			roomBadges.push(newBadge);
		});		

		return roomBadges;
	},	
	badgeGandalfLocked() {
	    
		var secrets = Secrets.find({'discovered': true}).count() < 3;
		//console.log("Secrets discovered: " + secrets);
	    return secrets; 
	},
	message() {
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		return latestAcademy.dailyMessage;

	},	
	decisionExists() {
	    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var currentRoom = latestAcademy.currentRoom; 
		//console.log("CurrentRoom: " + currentRoom);
	    var mapRoom = Rooms.find({'name': currentRoom }).fetch();
		var decision = mapRoom[0].dailyDecision;
	    //console.log("DecisionExists: " + decision);

	    return decision; 
	},
	dailyDecision() {
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var currentRoom = latestAcademy.currentRoom; 
		//console.log("CurrentRoom: " + currentRoom);

		var mapRoom = Rooms.find({'name': currentRoom }).fetch();
		var decision = mapRoom[0].dailyDecision;
		//console.log("Decision: " + decision);

		return decision;
	}

});

Template.Map.events({  
  'click #adolphRoom' (event){   
  	event.preventDefault();
    Modal.show('showRoomInfoModal', "Adolph Room");	
  }
  
});
