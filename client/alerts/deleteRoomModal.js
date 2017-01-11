import { Rooms } from '/imports/api/databasedriver.js';

Template.deleteRoomModal.events({

  'click #delete': function(e) {
    
    e.preventDefault();
    let room = this;
    //console.log("badge: " + badge.name);

    Meteor.call('deleteRoom', room.name, function(error, result) {
      if (error) {
        alert(error);
      }
    });

    Modal.hide('deleteRoomModal');

  }
});