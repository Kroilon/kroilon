import '../imports/api/databasedriver.js';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

Meteor.methods({
	  updateScore: function (id,playerId,score) {
      var currentUserId = Meteor.userId();
      Academy.update(
          { _id: id, 'users.nb': playerId },
          {$push: {'users.$.score': score}},
          {updatedBy: currentUserId}
      );

    },

    updateVoted: function(id, playerId) {
      var currentUserId = Meteor.userId();
      Academy.update(
          { _id: id, 'users.nb': playerId },
          {$push: {'users.$.voted': true}},
          {updatedBy: currentUserId}
      );

    },

    insertChallenge: function(data) {

      console.log(data);

      Challenges.insert(data);

    },

    insertRoom: function(data) {

      console.log(data);

      Rooms.insert(data);

    },

    insertBadge: function(data) {

      console.log(data);

      Badges.insert(data);

    },

    addAcademy : function(data) {

      console.log(data);

      Academy.insert(data);
      
    },

    removeAcademy : function(id) {

      Academy.remove(
          { _id: id }
      );
            
    },

	  deleteCharacter: function (id,playerId) {

      Academy.update(
          { _id: id },
          {$pull: {'users': {nb:playerId}}}
      );
	  },

	  deleteBadge: function (badgename) {

      Badges.remove(
          { name: badgename }
      );
	  },

	  deleteRoom: function (roomname) {

      Rooms.remove(
          { name: roomname }
      );
	  },

	  deleteChallenge: function (challengename) {

      Challenges.remove(
          { name: challengename }
      );
	  },

		updateDailyMessage : function(latestAcademy, message)	{
			Academy.update({_id: latestAcademy._id}, {$set :{'dailyMessage' : message }});
		},
		
    terminateDay : function(latestAcademy) {
			var energyLevel = parseInt(latestAcademy.energyLevel) - 1;

			Academy.update({_id: latestAcademy._id}, {$set :{'energyLevel' : energyLevel }});
		},

		addCheese : function(latestAcademy, burgerCount) {
			//var newValue = parseInt(latestAcademy.energyLevel) + parseInt(burgerCount);
			Academy.update({_id: latestAcademy._id}, {$set :{'energyLevel' : burgerCount }});
		},

		updateHomeMessage : function(latestAcademy, messageHome) {
			Academy.update({_id: latestAcademy._id}, {$set :{'homeMessage' : messageHome }});
		},

		insertSecret : function(data) {
			Secrets.insert(data);
		},

    discoverSecret : function(id) {
      Secrets.update({_id: id}, {$set :{'discovered' : true }});
    },

    deleteSecret : function(id) {
      Secrets.remove(
          { _id: id }
      );
    },

    activateAcademy : function(id) {
      Academy.update({_id: id}, {$set :{'date' : new Date() }});
    },

    updateBadgeStatus : function( roomName, badgeName, newStatus) {      
      Rooms.update({_id: roomName._id, 'badges.name': badgeName}, { $set:{'badges.$.locked': newStatus }} );
    },

    insertAcademyPlayer: function( academy, user) {
      //console.log("academyID: " + academy._id);
      Academy.update( { _id: academy._id }, { $push: { 'users': user } });
    },

    removePlayer: function( academy, user) {
      //console.log("academyID: " + academy._id);
      Academy.update( { _id: academy._id}, { $pull: { 'users': user } });
    },

    updateAcademyPlayer: function( academy, nb, player) {
      //console.log("academyID: " + academy._id);
      Academy.update( { _id: academy._id, 'users.nb': nb }, { $set: {'users.$': player }} );
    },

    changeRoom: function( academy, room) {
      //console.log("academyID: " + academy._id);
      Academy.update( { _id: academy._id }, { $set: {'currentRoom': room }} );
    },

    incrementEnergyLevel: function( academy, energyLevel) {
      //console.log("academyID: " + academy._id);
      Academy.update( { _id: academy._id }, { $inc: {'energyLevel': energyLevel }} );
    },

    incrementCounDays: function( academy, level) {
      //console.log("academyID: " + academy._id);
      Academy.update( { _id: academy._id }, { $inc: {'countDays': level }} );
    },

    setVotedStatus: function( academy, nb, status) {
      //console.log("academyID: " + academy._id);
      Academy.update( { _id: academy._id, 'users.nb': nb}, { $set: {'users.$.voted': status}} );
    },

    updateUserThatVoted : function( academy, user, votedFor) {      
      Academy.update( { _id: academy._id, 'users.nb': user.nb}, { $set: {'users.$.voted': votedFor } });
    },   

    updateVotedCounter : function( academy, votedFor) {      
      Academy.update( { _id: academy._id, 'users.nb': votedFor}, { $inc:{"users.$.counter": 1 } });
    },

    updateAcademyBadge: function( badge, data) {
      Badges.update({_id: badge._id}, { $set: {'name': data.name, 'points': data.points, 'pointsType': data.pointsType, 'type': data.type, 'description': data.description }} );
    },

    updateAcademyRoom: function( room, data) {
      Badges.update({_id: room._id}, { $set: {'name': data.name, 'dailyDecision': data.dailyDecision, 'description': data.description, 'image': data.image }} );
    }

});
