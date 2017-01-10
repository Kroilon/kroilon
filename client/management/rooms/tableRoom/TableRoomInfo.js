import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

import { ROOMS_ACTIVE_ELEMENT_KEY, ID_ROOM_ACTIVE_ELEMENT_KEY } from '/client/management/rooms/TabRooms.js';

Template.TableRoomInfo.helpers({

  academyRooms() {  
    var rooms = Rooms.find({}).fetch();
    return rooms;
    
  }   

});

const TABLE_ROOMS_ACTIVE_TEMPLATE_NAME = "TableRoomInfo";
const NEW_ROOM_ACTIVE_TEMPLATE_NAME = "NewRoomInfo";
const EDIT_ROOM_ACTIVE_TEMPLATE_NAME = "EditRoomInfo";

Template.TableRoomInfo.events({   

  //Act when the personal performance board icon is clicked
  "click #addBadge" (event){
      event.preventDefault();
      Session.set(ROOMS_ACTIVE_ELEMENT_KEY, NEW_ROOM_ACTIVE_TEMPLATE_NAME);
  },

  //Act when the personal performance graph icon is clicked
  "click #editBadge" (event){
      event.preventDefault();
      Session.set(ID_ROOM_ACTIVE_ELEMENT_KEY, _getUserNbFromLink($(event.target).parent()));
      Session.set(ROOMS_ACTIVE_ELEMENT_KEY, EDIT_ROOM_ACTIVE_TEMPLATE_NAME);

  },

  'click #viewBadge' (event){
    event.preventDefault();
    //Modal.show('viewRoomModal', this);
    
  },

  'click #deleteBadge' (event){
    event.preventDefault();
    //Modal.show('deleteRoomModal', this); 
  } 

});

function _getUserNbFromLink(target){
    return target.attr('href').slice(1);
}