import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.Management.helpers({
rooms(){
  return Rooms.find({}).fetch();
},
challs(){
var latestChalls = Challenges.find();

return latestChalls;
},
players(){
var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

return latestAcademy.users;
},
user(nb) {

  var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

  var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

  return user[0];
},
isLoggedInAsAdmin() {
	return Session.get("loggedUser")!='' && Session.get("loggedUser")!=null && Session.get("loggedUser") != undefined && Session.get("loggedUser")[0].profile == "Admin";
},
badges(){
var badges = Badges.find({}).fetch();

return badges;
}
});

Template.Management.events({
  'click #insert' (event)  {

    var playerId = $("#player").val();

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var user = $.grep(latestAcademy.users, function(e){ return e.nb == playerId; });

    var activityId = $("#activity").val();
    var room = $("#room").val();
    var pointType = $("#pointType").val();
    var points = parseInt($("#points").val());

    var score = {
      challenge : activityId,
      category: pointType,
      points: points,
      date: new Date()
    };

    Meteor.call("updateScore",latestAcademy._id,playerId,score);

  },

  'click #insertChallenge' (event) {

    var challengeName = $("#challengeName").val();
    var challengeRoom = $("#challengeRoom").val();
    var challengePoints = $("#challengePoints").val();
    var challengeBadge = $("#challengeRoom").val();

    var data =
    {
      name: challengeName,
    	points: challengePoints,
    	room: challengeRoom,
    	date: new Date(),
    	badges: challengeBadge
    };

    Meteor.call("insertChallenge", data);
  },
  'click #insertRoom' (event) {

    var roomName = $("#roomName").val();
    var roomBadge = $("#roomBadge").val();

    var data =
    {
      name: roomName,
    	badges: [{ badge: roomBadge }]
    };

    Meteor.call("insertRoom", data);
  },
  'click #insertBadge' (event) {

    var badgeName = $("#badgeName").val();
    var badgePoints = $("#badgePoints").val();

    var data =
    {
      name: badgeName,
    	points: badgePoints
    };

    Meteor.call("insertBadge", data);
  },
  'click #insertCharacter' (event){

      var characterNB = $('#characterNB').val();
      var characterName = $('#characterName').val();
      var characterAvatar = $('#characterAvatar').val();
      var characterEmail = $('#characterEmail').val();
      var characterPassword = $('#characterPassword').val();
      var characterMBTI = $('#characterMBTI').val();
      var characterPPLSkills = $('#characterPPLSkills').val();
      var characterCommunicationSkills = $('#characterCommunicationSkills').val();
      var characterProblemSolvingSkills = $('#characterProblemSolvingSkills').val();
      var characterManagementSkills = $('#characterManagementSkills').val();
      var characterAndroidSkills = $('#characterAndroidSkills').val();

      var user = 	{
    			nb: characterNB,
    			name:characterName,
    			avatar: characterAvatar,
    			email: characterEmail,
          password: characterPassword,
    			profile: "Trainee",
    			mbti: characterMBTI,
    			skills:[{
    					people: characterCommunicationSkills,
    					communication: characterCommunicationSkills,
    					problemSolving: characterProblemSolvingSkills,
    					manegement:characterManagementSkills,
    					android:characterAndroidSkills
    				}],
          score:[
            {
              date: new Date(),
    					points: 0
            }
          ]
    		}

        var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

        Meteor.call("addAcademyUser",latestAcademy._id, user);

  },
  'click #insertAcademy' (event){
    var academyName = $('#academyName').val();

    var data =
    {
      name: academyName,
      date: new Date()
    };

    Meteor.call("addAcademy", data);

  },
  'click #updateDailyMessage' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var message = $("#message").val();

    Meteor.call("updateDailyMessage", latestAcademy, message);

  }
});
