import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.viewRoomModal.helpers({
  
  roomBadges() {

        let roomId = Session.get(ID_ROOM_ACTIVE_ELEMENT_KEY).trim();
        console.log("ROOM ID: " + roomId);
        let room = Rooms.find({ "name": roomId }).fetch();  
        var listBadges = new Array();

        room[0].badges.forEach(function (badge) {
          let badgeName = badge.name;
          console.log("badgeName: " + badgeName);
          let newBadge = Badges.find({ "name": badgeName }).fetch();

          if (newBadge !== undefined && newBadge[0].name !== "") { 
              console.log("newBadgeName: " + newBadge[0].name);
              var newRoomBadge = { 'name': newBadge[0].name, 'image': newBadge[0].image};
              listBadges.push(newRoomBadge);
          }

        });

        return listBadges;
    }

});