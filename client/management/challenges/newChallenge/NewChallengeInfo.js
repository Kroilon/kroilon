import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.NewChallengeInfo.helpers({
    pointTypes: function () {
    return [
        { name: 'XP', value: 'Experience Points' },
        { name: 'KP', value: 'Knowledge Points' },
        { name: 'HP', value: 'Health Points' },
        { name: 'TP', value: 'Team Points' },
        { name: 'NP', value: 'No Points' }
      ];
    },
    rooms(){
      return Rooms.find({}).fetch();
    },
    badges(){
      var badges = Badges.find({}).fetch();

      return badges;
    }
});

Template.NewChallengeInfo.events({
  'submit form' (event) {

    event.preventDefault();

    var activityName = $("#activityName").val();
    var activityPoints = $("#activityPoints").val();
    var activityPointsType = $("#pointsType").val();
    var activityRoom = $("#activityRoom").val();
    var activityDescription = $("#activityDescription").val();

    var data =
    {
      name: activityName,
    	points: activityPoints,
      pointsType: activityPointsType,
    	room: activityRoom,
    	description: activityDescription
    };

    Modal.show('challengeInsertModal', this);
    Meteor.call("insertChallenge", data);
    $("#addChallenge")[0].reset(); 
  },
  
  'click #deleteChallenge' (event) {

    var activityName = $("#activityName").val();

    alert("Challenge deleted!");
    Meteor.call("deleteChallenge", activityName);
    $("#addChallenge")[0].reset(); 
  }

});
