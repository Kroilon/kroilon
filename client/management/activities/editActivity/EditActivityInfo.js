import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';

Template.EditActivityInfo.helpers({
    pointTypes: function () {
      return [
          { name: 'XP', value: 'Experience Points' },
          { name: 'KP', value: 'Knowledge Points' },
          { name: 'HP', value: 'Health Points' },
          { name: 'TP', value: 'Team Points' },
          { name: 'NP', value: 'No Points' }
        ];
    },
    challs(){
      var latestChalls = Challenges.find();
      return latestChalls;
    },
    players(){
      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
      return latestAcademy.users;
    }

});

Template.EditActivityInfo.events({
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

    Modal.show('activityInsertModal', this);
    Meteor.call("updateScore",latestAcademy._id,playerId,score);
    $("#addActivity")[0].reset(); 

  } 

});
