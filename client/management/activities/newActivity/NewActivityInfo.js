import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

import { ACTIVITIES_ACTIVE_ELEMENT_KEY, ID_ACTIVITY_ACTIVE_ELEMENT_KEY } from '/client/management/activities/TabActivity.js';

Template.NewActivityInfo.helpers({
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
          { name: 'ACTIVITY', value: 'ACTIVITY' }
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
    }

});

const TABLE_ACTIVITY_ACTIVE_TEMPLATE_NAME = "TableActivityInfo";
const NEW_ACTIVITY_ACTIVE_TEMPLATE_NAME = "NewActivityInfo";
const EDIT_ACTIVITY_ACTIVE_TEMPLATE_NAME = "EditActivityInfo";

Template.NewActivityInfo.events({
  'submit form' (event)  {

    event.preventDefault();

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

    Meteor.call("updateScore", latestAcademy._id, playerId, score, function(error, result) {
      if (error) {
        alert(error);
      } 
    });
    $("#addActivity")[0].reset(); 
    Session.set(ACTIVITIES_ACTIVE_ELEMENT_KEY, TABLE_ACTIVITY_ACTIVE_TEMPLATE_NAME);

  },
  
  'click #nopActivity' (event){
    event.preventDefault();
    Session.set(ACTIVITIES_ACTIVE_ELEMENT_KEY, TABLE_ACTIVITY_ACTIVE_TEMPLATE_NAME);
  }

});
