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

    addAcademyUser:function(id,user){
      var currentUserId = Meteor.userId();
      Academy.update(
          { _id: id},
          {$push: {'users': user}},
          {createdBy: currentUserId}
      );
    },

    addAcademy : function(data) {
      Academy.insert(data);
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
		updateDailyMessage : function(latestAcademy, message)
		{
			Academy.update({_id: latestAcademy._id}, {$set :{'dailyMessage' : message }});
		},

		terminateDay : function(latestAcademy)
		{
			var energyLevel = parseInt(latestAcademy.energyLevel - 1);

			Academy.update({_id: latestAcademy._id}, {$set :{'energyLevel' : energyLevel }});
		},
		addCheese : function(latestAcademy, burgerCount)
		{
			var newValue = parseInt(latestAcademy.energyLevel) + parseInt(burgerCount);
			Academy.update({_id: latestAcademy._id}, {$set :{'energyLevel' : newValue }});
		},
		updateMessageHome : function(latestAcademy, messageHome) {
			Academy.update({_id: latestAcademy._id}, {$set :{'homeMessage' : messageHome }});
		},
		insertSecret : function(data) {
			Secrets.insert(data);
		}

});
