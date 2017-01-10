import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

import { ROOMS_ACTIVE_ELEMENT_KEY } from '/client/management/rooms/TabRooms.js';

Template.EditRoomInfo.helpers({
    badges(){
      var badges = Badges.find({}).fetch();
      return badges;
    }
});

const TABLE_ROOMS_ACTIVE_TEMPLATE_NAME = "TableRoomInfo";
const NEW_ROOM_ACTIVE_TEMPLATE_NAME = "NewRoomInfo";
const EDIT_ROOM_ACTIVE_TEMPLATE_NAME = "EditRoomInfo";

Template.EditRoomInfo.events({
  'submit form' (event) {

    event.preventDefault();

    var roomName = $("#roomName").val();    
    var roomDecision = $("#roomDecision").val();
    var roomBadge = $("#roomBadge").val();

    var data =
    {
      name: roomName,
      dailyDecision: roomDecision,
      badges: [{ badge: roomBadge }]      
    };

    Modal.show('roomsInsertModal', this);
    Meteor.call("insertRoom", data);
    $("#addRoom")[0].reset(); 
  },
  
  'click #nopRoom' (event){
    event.preventDefault();
    Session.set(ROOMS_ACTIVE_ELEMENT_KEY, TABLE_ROOMS_ACTIVE_TEMPLATE_NAME);
  }
  
});
