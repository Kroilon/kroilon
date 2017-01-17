import { Academy } from '/imports/api/databasedriver.js';

Template.registerHelper('formatDate', function(date) {
  return date.toDateString();
});

Template.deleteActivityModal.events({

  'click #delete': function(e) {
    
    e.preventDefault();
    let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    let activity = this;
    //console.log("name: " + activity.name);
    //console.log("player: " + activity.player);
    //console.log("nb: " + activity.nb);
    //console.log("date: " + activity.date);
    
    Meteor.call('deleteScore', latestAcademy._id, activity.nb, activity.date, function(error, result) {
      if (error) {
        alert(error);
      }
    });

    Modal.hide('deleteChallengeModal');

  }
});