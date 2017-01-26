import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

Template.secretDeleteAllModal.events({
  'click #deleteAll': function(e) {

    e.preventDefault();

    Meteor.call('deleteAllSecrets', function(error, result) {
      if (error) {
        alert(error);
      }
    });

    Modal.hide('secretDeleteAllModal');
  }
});

