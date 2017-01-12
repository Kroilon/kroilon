import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

import { ROOMS_ACTIVE_ELEMENT_KEY } from '/client/management/rooms/TabRooms.js';

Template.NewRoomInfo.helpers({
    
    badges(){
      
      var badges = Badges.find({}).fetch();
      return badges;
    },

    teamBadge() {

      let roomType = "Team";
      let roomBadges = Badges.find({'type': roomType }).fetch();
      return roomBadges;
    }

});

const TABLE_ROOMS_ACTIVE_TEMPLATE_NAME = "TableRoomInfo";
const NEW_ROOM_ACTIVE_TEMPLATE_NAME = "NewRoomInfo";
const EDIT_ROOM_ACTIVE_TEMPLATE_NAME = "EditRoomInfo";

Template.NewRoomInfo.events({
  'submit form' (event) {

    event.preventDefault();

    let data = {};

    let roomName = $("#roomName").val();    
    let roomDecision = $("#roomDecision").val();
    let roomDescription = $("#roomDescription").val();
    let roomBadge = $("#roomBadge").val();


    data =
    {
      name: roomName,
      dailyDecision: roomDecision,
      description: roomDescription,
      badges: [{ badge: roomBadge }]      
    };

    //Modal.show('roomsInsertModal', this);
    Meteor.call("insertRoom", data, function(error, result) {
      if (error) {
        alert(error);
      } 
    });

    $("#addRoom")[0].reset(); 
    Session.set(ROOMS_ACTIVE_ELEMENT_KEY, TABLE_ROOMS_ACTIVE_TEMPLATE_NAME);
  },
  
  'click #nopRoom' (event){
    event.preventDefault();
    Session.set(ROOMS_ACTIVE_ELEMENT_KEY, TABLE_ROOMS_ACTIVE_TEMPLATE_NAME);
  }
  
});
