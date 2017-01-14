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
    Meteor.call("updateDailyMessage", latestAcademy, message, function(error, result) {
      if (error) {
        alert(error);
      } 
    });

  },
  'click #updateHomeMessage' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var messageHome = $('#messageHome').val();
    event.preventDefault();
    Meteor.call("updateHomeMessage", latestAcademy, messageHome, function(error, result) {
      if (error) {
        alert(error);
      } 
    });

    document.getElementById("messageHome").value = "";
    Modal.show('messageUpdateModal', messageHome);

  },
  'click #unlockBadge' (event){

    event.preventDefault();
    var badgeName = this.name;
    console.log("UnlockBadge: " + badgeName);
    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var currentRoom = latestAcademy.currentRoom; 

    var mapRoom = Rooms.findOne({'name': currentRoom });
    //console.log("RoomId: " + mapRoom._id);
    Meteor.call("updateBadgeStatus", mapRoom, badgeName, false, function(error, result) {
      if (error) {
        alert(error);
      } 
    });  

    Modal.show('badgeUnlockModal', badgeName);
  },

  'click #lockBadge' (event){

    event.preventDefault();
    var badgeName = this.name;
    console.log("LockBadge: " + badgeName);
    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var currentRoom = latestAcademy.currentRoom; 
    
    var mapRoom = Rooms.findOne({'name': currentRoom });
    Meteor.call("updateBadgeStatus", mapRoom, badgeName, true, function(error, result) {
      if (error) {
        alert(error);
      } 
    });   

    Modal.show('badgeLockModal', badgeName);

  },
  'click #nextDay' (event){

    event.preventDefault();

    var nextRoom = $('#nextRoom').val(); 

    // MOVED LOGIC INSIDE END DAY MODAL
    /*
    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    //change currentRoom to value of nextDay
    var nextRoom = $('#nextRoom').val(); 
    Meteor.call("changeRoom", latestAcademy, nextRoom, function(error, result) {
      if (error) {
        alert(error);
      } 
    });

    //increase var countDays by one
    Meteor.call("incrementCounDays", latestAcademy, 1, function(error, result) {
      if (error) {
        alert(error);
      } 
    }); 

    //reduce one energy bar
    Meteor.call("incrementEnergyLevel", latestAcademy, -1, function(error, result) {
      if (error) {
        alert(error);
      } 
    }); 
        

    //if new room has badge FOOD, add two energy bars
    var currentRoom = latestAcademy.currentRoom; 
    var mapRoom = Rooms.find({'name': currentRoom }).fetch();
    mapRoom[0].badges.forEach( function(badges){
      if (badges.name === "FOOD") { 
          Meteor.call("incrementEnergyLevel", latestAcademy, 2, function(error, result) {
            if (error) {
              alert(error);
            } 
          }); 
      }
    }); 

    //change field voted of every user to false
    var users = latestAcademy.users;
    users.splice(0, 3);
    users.forEach( function(player){
      //console.log("Player name: " + player.name);
      //console.log("Player NB: " + player.nb);
      Meteor.call("setVotedStatus", latestAcademy, player.nb, "Nobody", function(error, result) {
        if (error) {
          alert(error);
        } 
      });
    }); 

    //run rules and attribute points 
    // STILL TO BE IMPLEMENTED!!!

    */

    Modal.show('endDayModal', nextRoom);
  },
  
});