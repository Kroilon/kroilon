import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

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

    alert("Score updated!");
    event.preventDefault();
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

    alert("Challenge inserted!");
    event.preventDefault();
    Meteor.call("insertChallenge", data);
  },
  'click #deleteChallenge' (event) {

    var challengeName = $("#challengeName").val();

    alert("Challenge deleted!");
    event.preventDefault();
    Meteor.call("deleteChallenge", challengeName);
  },
  'click #insertRoom' (event) {

    var roomName = $("#roomName").val();
    var roomBadge = $("#roomBadge").val();

    var data =
    {
      name: roomName,
    	badges: [{ badge: roomBadge }]
    };

    alert("Room inserted!");
    event.preventDefault();
    Meteor.call("insertRoom", data);
  },
  'click #deleteRoom' (event) {
    var roomName = $("#roomName").val();

    alert("Room deleted!");
    event.preventDefault();
    Meteor.call("deleteRoom", roomName);
  },
  'click #insertBadge' (event) {

    var badgeName = $("#badgeName").val();
    var badgePoints = $("#badgePoints").val();

    var data =
    {
      name: badgeName,
    	points: badgePoints
    };

    alert("Badge inserted!");
    event.preventDefault();
    Meteor.call("insertBadge", data);
  },
  'click #deleteBadge' (event) {

    var badgeName = $("#badgeName").val();

    alert("Badge deleted!");
    event.preventDefault();
    Meteor.call("deleteBadge", badgeName);
  },
  'click #insertCharacter' (event){

      var user = {};

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
    		};

        var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

        alert("Added user!");
        event.preventDefault();
        //var characterNB = event.target.characterNB.value;
        Meteor.call("addAcademyUser",latestAcademy._id, user); 
        //event.target.characterNB.value = "";
        

  },
  'click #deleteCharacter' (event){

		debugger;

		var playerId = $("#characterNB").val();

        var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

        alert("Character deleted!");
        event.preventDefault();
        Meteor.call("deleteCharacter",latestAcademy._id, playerId);

  },
  'click #insertAcademy' (event){
    var academyName = $('#academyName').val();

    var data =
    {
      name: academyName,
      date: new Date()
    };

    alert("Academy inserted!");
    event.preventDefault();
    Meteor.call("addAcademy", data);

  },
  'click #updateDailyMessage' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var message = $("#message").val();

    alert("Daily message updated!");
    event.preventDefault();
    Meteor.call("updateDailyMessage", latestAcademy, message);

  },
  'click #terminateDay' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    alert("Day terminated!");
    event.preventDefault();
    Meteor.call("terminateDay", latestAcademy);
  },
  'click #addCheese' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var burgerCount = $('#burgerCount').val();

    alert("Cheese added!");
    event.preventDefault();
    Meteor.call("addCheese", latestAcademy, burgerCount);
  },
  'click #updateMessageHome' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var messageHome = $('#messageHome').val();

    alert("Home message updated!");
    event.preventDefault();
    Meteor.call("updateMessageHome", latestAcademy, messageHome);
  },
  'click #addSecret' (event){

    var secretValue = $('#secretValue').val();
    var secretPlayerNB = $('#secretPlayerNB').val();

    var data = {
      description: secretValue,
      nb: secretPlayerNB,
      challenge: "Submeter Segredo",
      discovered: 0
    }

    alert("Secret inserted!");
    event.preventDefault();
    Meteor.call("insertSecret", data);
  }


});
