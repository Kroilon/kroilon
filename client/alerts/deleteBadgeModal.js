import { Badges } from '/imports/api/databasedriver.js';

Template.deleteBadgeModal.events({

  'click #delete': function(e) {
    
    e.preventDefault();
    let badge = this;
    //console.log("badge: " + badge.name);

    Meteor.call('deleteBadge', badge.name, function(error, result) {
      if (error) {
        alert(error);
      }
    });

    Modal.hide('deleteBadgeModal');

  }
});