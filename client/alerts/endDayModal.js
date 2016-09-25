import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

Template.endDayModal.events({
  'click #end': function(e) {

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    event.preventDefault();
    Meteor.call('terminateDay', latestAcademy, function(error, result) {
      if (error) {
        alert(error);
      }
    });

    Modal.hide('endDayModal');
  }
});