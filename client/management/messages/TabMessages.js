import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.TabMessages.helpers({
    dailyMessage() {
      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
      return latestAcademy.dailyMessage;
    },
    homeMessage() {
      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
      return latestAcademy.homeMessage;
    },
    currentRoom() {
      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
      var myCurrentRoom = latestAcademy.currentRoom;
      return myCurrentRoom;
    },
    rooms(){
      return Rooms.find({}).fetch();
    },
    roomHasBadges(){
      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
      var currentRoom = latestAcademy.currentRoom; 
      var mapRoom = Rooms.find({'name': currentRoom }).fetch();
      var cntr = 0;

      mapRoom[0].badges.forEach( function(badges){

        if (badges.name !== undefined) { 
          cntr++;
        }
         
      });
      //console.log("cntr: " + cntr); 
      return (cntr > 0);
      
    },    
    currentRoomBadges() {

      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
      var currentRoom = latestAcademy.currentRoom; 
      //console.log("CurrentRoom: " + currentRoom);   

      var mapRoom = Rooms.find({'name': currentRoom }).fetch();

      var roomBadges = new Array();

      mapRoom[0].badges.forEach( function(badges){

        var badgeName = badges.name; 
        //console.log("BadgeName: " + badgeName);

        var badge = Badges.find({'name': badgeName }).fetch();
        var badgeImage = badge[0].image; 
        //console.log("BadgeImage: " + badgeImage);   
        var badgeStatus = "";
        //console.log("badgelocked: " + badges.locked);

        if (badges.locked === true) { 
          badgeStatus = "Locked";
          var newBadge = {'name': badgeName, 'image': badgeImage, 'status': badgeStatus, 'locked': true};
        } else {
          badgeStatus = "Unlocked";
          var newBadge = {'name': badgeName, 'image': badgeImage, 'status': badgeStatus, 'unlocked': true};
        }

        //var newBadge = {'name': badgeName, 'image': badgeImage, 'status': badgeStatus };
        roomBadges.push(newBadge);
      });   

      return roomBadges;
    }
});

Template.TabMessages.events({  
  'click #updateDailyMessage' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var message = $("#message").val();
    event.preventDefault();
    Meteor.call("updateDailyMessage", latestAcademy, message);

  },
  'click #updateHomeMessage' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var messageHome = $('#messageHome').val();
    event.preventDefault();
    Meteor.call("updateHomeMessage", latestAcademy, messageHome);
  },
  'click #unlockBadge' (event){

    event.preventDefault();
    var badgeName = this.name;
    console.log("UnlockBadge: " + badgeName);
    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var currentRoom = latestAcademy.currentRoom; 

    var mapRoom = Rooms.findOne({'name': currentRoom });
    //console.log("RoomId: " + mapRoom._id);
    Meteor.call("updateBadgeStatus", mapRoom, badgeName, false);   

  },
  'click #lockBadge' (event){

    event.preventDefault();
    var badgeName = this.name;
    console.log("LockBadge: " + badgeName);
    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var currentRoom = latestAcademy.currentRoom; 
    
    var mapRoom = Rooms.findOne({'name': currentRoom });
    Meteor.call("updateBadgeStatus", mapRoom, badgeName, true);   

  },
  'click #nextDay' (event){

    event.preventDefault();

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    //change currentRoom to value of nextDay
    var nextRoom = $('#nextRoom').val(); 
    Meteor.call("changeRoom", latestAcademy, nextRoom);   

    //reduce one energy bar
    var energyLevel = latestAcademy.energyLevel;
    energyLevel = energyLevel - 1;
    Meteor.call("setEnergyLevel", latestAcademy, energyLevel);

    //if new room has badge FOOD, add two energy bars
    var currentRoom = latestAcademy.currentRoom; 
    var mapRoom = Rooms.find({'name': currentRoom }).fetch();
    mapRoom[0].badges.forEach( function(badges){
      if (badges.name === "FOOD") { 
        var newEnergyLevel = latestAcademy.energyLevel;
        newEnergyLevel = energyLevel + 2; 
        Meteor.call("setEnergyLevel", latestAcademy, newEnergyLevel);
      }
    }); 

    //change field voted of every user to false
    Meteor.call("setVotedStatus", latestAcademy, "Nobody");

    //run rules and attribute points 
  },
  
});