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
  'click #insertRoom' (event) {

    var roomName = $("#roomName").val();
    var roomBadge = $("#roomBadge").val();

    var data =
    {
      name: roomName,
      badges: [{ badge: roomBadge }]
    };

    alert("Room inserted!");
    event.preventDefault();
    Meteor.call("insertRoom", data);
  },
  'click #deleteRoom' (event) {
    var roomName = $("#roomName").val();

    alert("Room deleted!");
    event.preventDefault();
    Meteor.call("deleteRoom", roomName);
  }
  
});
