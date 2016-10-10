import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';

Template.TabActivity.helpers({
    challs(){
      var latestChalls = Challenges.find();
      return latestChalls;
    },
    players(){
      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
      return latestAcademy.users;
    }

});

Template.TabActivity.events({
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
