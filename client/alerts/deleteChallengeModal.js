import { Challenges } from '/imports/api/databasedriver.js';

Template.deleteChallengeModal.events({

  'click #delete': function(e) {
    
    e.preventDefault();
    let challenge = this;
    //console.log("challenge: " + challenge.name);

    Meteor.call('deleteChallenge', challenge.name, function(error, result) {
      if (error) {
        alert(error);
      }
    });

    Modal.hide('deleteChallengeModal');

  }
});