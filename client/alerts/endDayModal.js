import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.endDayModal.events({
  'click #endDay': function(e) {

    e.preventDefault();

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    //change currentRoom to value of nextDay
    var nextRoom = "" + this; 
    //console.log("NEXT ROOM: " + nextRoom);
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

    Modal.hide('endDayModal');
  }
});