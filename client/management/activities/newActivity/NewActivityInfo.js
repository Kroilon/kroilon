import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

import { ACTIVITIES_ACTIVE_ELEMENT_KEY, ID_ACTIVITY_ACTIVE_ELEMENT_KEY } from '/client/management/activities/TabActivity.js';

Template.NewActivityInfo.onCreated(function(){
  this.showActivityFields = new ReactiveVar( false );
});

Template.NewActivityInfo.helpers({

    showActivityFields: function() {
      return Template.instance().showActivityFields.get();
    },    

    pointTypes: function () {
      return [
          { name: 'XP', value: 'Experience Points' },
          { name: 'KP', value: 'Knowledge Points' },
          { name: 'HP', value: 'Health Points' },
          { name: 'TP', value: 'Team Points' },
          { name: 'NP', value: 'No Points' }
        ];
    },

    activityType: function () {
      return [
          { name: 'BADGE', value: 'BADGE' },
          { name: 'CHALLENGE', value: 'CHALLENGE' }
        ];
    },

    challs(){
      let latestChalls = Challenges.find();
      return latestChalls;
    },

    players(){
      let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
      let users = latestAcademy.users;
      users.splice(0, 3);
      return users;
    },

    badges(){
      var badges = Badges.find({}).fetch();
      return badges;
    },
    
    challenges(){
      var challenges = Challenges.find({}).fetch();
      return challenges;
    }


});

const TABLE_ACTIVITY_ACTIVE_TEMPLATE_NAME = "TableActivityInfo";
const NEW_ACTIVITY_ACTIVE_TEMPLATE_NAME = "NewActivityInfo";
const EDIT_ACTIVITY_ACTIVE_TEMPLATE_NAME = "EditActivityInfo";

Template.NewActivityInfo.events({
  'change #activityType': function( event, template ) {
    if ( $( event.target ).val() === "CHALLENGE" ) {
      template.showActivityFields.set( true );

    } else {
      template.showActivityFields.set( false );
    }
  },

  'change #activityChallenge': function( event, template ) {
    let challengeName = $("#activityChallenge").val();
    console.log("challengeName: " + challengeName);
    let challenge = Challenges.find({ "name": challengeName }).fetch();  
    console.log("Challenge NAME: " + challenge[0].name);
    console.log("Challenge POINTS: " + challenge[0].points);
    console.log("Challenge POINTS TYPE: " + challenge[0].pointsType);
    
    document.getElementById('activityChallengePoints').value = challenge[0].points;
    document.getElementById('challengePointsType').value = challenge[0].pointsType;
  },

  'change #activityBadge': function( event, template ) {
    let badgeName = $("#activityBadge").val();
    console.log("badgeName: " + badgeName);
    let badge = Badges.find({ "name": badgeName }).fetch();
    console.log("Badge NAME: " + badge[0].name);
    console.log("Badge POINTS: " + badge[0].points);
    console.log("Badge POINTS TYPE: " + badge[0].pointsType);
    
    document.getElementById('activityBadgePoints').value = badge[0].points;
    document.getElementById('badgePointsType').value = badge[0].pointsType;
  },

  'submit form' (event)  {

    event.preventDefault();

    let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    let score = {};   

    let activityPlayer = $("#activityPlayer").val();
    //console.log("activityPlayer: " + activityPlayer);
    let activityType = $("#activityType").val();
    //console.log("activityType: " + activityType);

    if (activityType === "CHALLENGE") {  
      //console.log("ACTIVITY!");
      
      let activityName = $("#activityChallenge").val();
      console.log("activityName: " + activityName);
      let activityPoints = parseInt($("#activityChallengePoints").val());
      console.log("activityPoints: " + activityPoints);
      let activityPointsType = $("#challengePointsType").val();
      console.log("activityPointsType: " + activityPointsType);

      let newDate = new Date();
      console.log("newDate: " + newDate);
      let newDateFormat = newDate.toString().substring(0,15);
      console.log("newDateFormat: " + newDateFormat);

      score = {
        date : newDateFormat,
        countType: "ACTIVITY",
        name: activityName,
        points: activityPoints,
        pointsType: activityPointsType
      };

    } else if (activityType === "BADGE") {
      //console.log("BADGE!");

      let badgeName = $("#activityBadge").val();
      //console.log("badgeName: " + badgeName);
      let badgePoints = parseInt($("#activityBadgePoints").val());
      //console.log("badgePoints: " + badgePoints);
      let badgePointsType = $("#badgePointsType").val();
      //console.log("badgePointsType: " + badgePointsType);

      let newDate = new Date();
      console.log("newDate: " + newDate);
      let newDateFormat = newDate.toString().substring(0,15);
      console.log("newDateFormat: " + newDateFormat);

      score = {
        date : newDateFormat,
        countType: "BADGE",
        name: badgeName,
        points: badgePoints,
        pointsType: badgePointsType
      };

    }

    if (activityPlayer === "Team") {  
      //console.log("TEAM!");

      Meteor.call("updateTeamScore", latestAcademy._id, score, function(error, result) {
        if (error) {
          alert(error);
        } 
      });

    } else {
      //console.log("PLAYER!");
      
      Meteor.call("updateScore", latestAcademy._id, activityPlayer, score, function(error, result) {
        if (error) {
          alert(error);
        } 
      });
      

    }
    
    $("#addActivity")[0].reset(); 
    Session.set(ACTIVITIES_ACTIVE_ELEMENT_KEY, TABLE_ACTIVITY_ACTIVE_TEMPLATE_NAME);

  },
  
  'click #nopActivity' (event){
    event.preventDefault();
    Session.set(ACTIVITIES_ACTIVE_ELEMENT_KEY, TABLE_ACTIVITY_ACTIVE_TEMPLATE_NAME);
  }

});
