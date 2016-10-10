import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.TabRooms.helpers({
    badges(){
      var badges = Badges.find({}).fetch();
      return badges;
    }
});

Template.TabRooms.events({
  'submit form' (event) {

    event.preventDefault();

    var roomName = $("#roomName").val();
    var roomBadge = $("#roomBadge").val();

    var data =
    {
      name: roomName,
      badges: [{ badge: roomBadge }]
    };

    Modal.show('roomsInsertModal', this);
    Meteor.call("insertRoom", data);
    $("#addRoom")[0].reset(); 
  },
  'click #deleteRoom' (event) {
    var roomName = $("#roomName").val();

    alert("Room deleted!");
    
    Meteor.call("deleteRoom", roomName);
  }
  
});
