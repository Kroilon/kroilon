import { Academy } from '/imports/api/databasedriver.js';

Template.deletePlayerModal.events({

  'click #delete': function(e) {
    e.preventDefault();
    var user = this;
    console.log("userName: " + user.name);
    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    console.log("latestAcademyName: " + latestAcademy.name);
    Meteor.call('removePlayer', latestAcademy, user, function(error, result) {
      if (error) {
        alert(error);
      }
    });

    Modal.hide('deletePlayerModal');
  }
});