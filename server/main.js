import '../imports/api/databasedriver.js';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Meteor.methods({
	  updateScore: function (id,playerId,score) {

      Academy.update(
          { _id: id, 'users.nb': playerId },
          {$push: {'users.$.score': score}}
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
      Academy.update(
          { _id: id},
          {$push: {'users': user}}
      );
    },

    addAcademy : function(data) {
      Academy.insert(data);
    }

});
