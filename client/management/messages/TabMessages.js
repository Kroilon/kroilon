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

        var badge = Badges.find({'name': badgeName }, {"name" : 1, "locked" : 1}).fetch();
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
  'click #nextDay' (event){

    event.preventDefault();
    //change currentRoom to value of nextDay
    //reduce one energy bar
    //if new room has badge food, add two energy bars
    //change field voted of every user to false

    Modal.show('endDayModal', this); 
    //alert("Day terminated!");
    //event.preventDefault();
    //Meteor.call("terminateDay", latestAcademy);
  },
  
});