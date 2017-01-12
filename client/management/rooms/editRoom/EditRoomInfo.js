import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

import { ROOMS_ACTIVE_ELEMENT_KEY, ID_ROOM_ACTIVE_ELEMENT_KEY } from '/client/management/rooms/TabRooms.js';

Template.EditRoomInfo.helpers({
    
    academyRoom() {
        let roomId = Session.get(ID_ROOM_ACTIVE_ELEMENT_KEY).trim();
        //console.log("ROOM ID: " + roomId);
        let room = Rooms.find({ "name": roomId }).fetch();  
        //console.log("ROOM NAME: " + room[0].name);
        return room;
    }
});

const TABLE_ROOMS_ACTIVE_TEMPLATE_NAME = "TableRoomInfo";
const NEW_ROOM_ACTIVE_TEMPLATE_NAME = "NewRoomInfo";
const EDIT_ROOM_ACTIVE_TEMPLATE_NAME = "EditRoomInfo";

Template.EditRoomInfo.events({
  'submit form' (event) {

    event.preventDefault();

    var roomName = $("#editRoomName").val();    
    var roomDecision = $("#editRoomDecision").val();
    var roomDescription = $("#editRoomDescription").val();
    var roomBadge = $("#editRoomBadge").val();

    var data =
    {
      name: roomName,
      dailyDecision: roomDecision,
      description: roomDescription,
      badges: [{ badge: roomBadge }]      
    };

    let roomId = Session.get(ID_ROOM_ACTIVE_ELEMENT_KEY).trim();
    let room = Rooms.find({ "name": roomId }).fetch();

    //Modal.show('roomsInsertModal', this);
    Meteor.call("updateAcademyRoom", room[0], data, function(error, result) {
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
