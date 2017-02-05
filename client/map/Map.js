import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

Template.Map.helpers({
	energyLevel() {

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var energy_level = latestAcademy.energyLevel;

		var img_energyLevel = "/energyLevels/energyLevels_5.png";

		switch(energy_level) {	
			case -2:
				img_energyLevel = "/energyLevels/energyLevels_0.png";
				break;
			case -1:
				img_energyLevel = "/energyLevels/energyLevels_0.png";
				break;		
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
				img_energyLevel = "/energyLevels/energyLevels_5.png";
				break;
		}

		return img_energyLevel;
	},
	teamScore() {
        let latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
        let users = latestAcademy.users;
        users.splice(0, 3);
        let total_users = users.length;
        let total_points = 0;

        $.each(users, function (index_users, value_users) {

            let user_points = 0;

            if (value_users.score != undefined) {
                $.each(value_users.score, function (index_score, value_score) {
                    user_points += value_score.points;
                });
            }

            value_users.totalScore = user_points;
            total_points += user_points;

        });

        let average_points = (total_points / total_users - 1);
        //console.log("average_points: " + average_points);

        let teamScore = latestAcademy.teamScore;
        let total_team_score = teamScore.length;
        let total_team_points = 0;

        $.each(teamScore, function(index_scores, value_scores) {

            if (value_scores.points != undefined) {
                total_team_points += value_scores.points;
        }

        });

        let average_team_points = (total_team_points / total_team_score);
        //console.log("average_team_points: " + average_team_points);

        return parseInt(average_points + average_team_points);

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
	},
	roomDescription() {
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var currentRoom = latestAcademy.currentRoom; 
		//console.log("CurrentRoom: " + currentRoom);

		var mapRoom = Rooms.find({'name': currentRoom }).fetch();
		var description = mapRoom[0].description;
		//console.log("description: " + description);

		return description;
	},
	currentDay() {

		var d = new Date();
    	var weekday = new Array(7);
    	weekday[0]=  "Sunday";
    	weekday[1] = "Monday";
    	weekday[2] = "Tuesday";
    	weekday[3] = "Wednesday";
    	weekday[4] = "Thursday";
    	weekday[5] = "Friday";
    	weekday[6] = "Saturday";

    	var currentDayOfWeek = weekday[d.getDay()];

    	return currentDayOfWeek;
	}


});

 /*
Template.Map.events({  

  'click .roomPolygon' (event){   
  	event.preventDefault();
  	//console.log("Room: " + event.currentTarget.id); 

  	var rooms = new Array();
    var roomName = event.currentTarget.id;
    var room = Rooms.find({ "name": roomName }).fetch();

    //console.log("RoomName: " + room[0].name);
    //console.log("RoomImage: " + room[0].image);
    //console.log("RoomDescription: " + room[0].description);

    var newRoom = { 'name': room[0].name, 'image': room[0].image, 'description': room[0].description };
    rooms.push(newRoom);

    Modal.show('showRoomInfoModal', rooms);	
  },
   
  'click .badgePolygon' (event){   
  	event.preventDefault();
  	//console.log("Badge: " + event.currentTarget.id);

  	var badges = new Array();
    var badgeName = event.currentTarget.id;
    var badge = Badges.find({ "name": badgeName }).fetch();

    //console.log("BadgeName: " + badge[0].name);
    //console.log("BadgeImage: " + badge[0].image);
    //console.log("BadgeDescription: " + badge[0].description);

    var newBadge = { 'name': badge[0].name, 'image': badge[0].image, 'description': badge[0].description };
    badges.push(newBadge);

    Modal.show('showBadgeInfoModal', badges);	
  }
  
  
});
*/