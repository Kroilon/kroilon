import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.TabChallenges.helpers({
    rooms(){
      return Rooms.find({}).fetch();
    },
    badges(){
      var badges = Badges.find({}).fetch();

      return badges;
    }
});

Template.TabChallenges.events({
  'click #insertChallenge' (event) {

    var challengeName = $("#challengeName").val();
    var challengeRoom = $("#challengeRoom").val();
    var challengePoints = $("#challengePoints").val();
    var challengeBadge = $("#challengeRoom").val();

    var data =
    {
      name: challengeName,
    	points: challengePoints,
    	room: challengeRoom,
    	date: new Date(),
    	badges: challengeBadge
    };

    alert("Challenge inserted!");
    event.preventDefault();
    Meteor.call("insertChallenge", data);
  },
  'click #deleteChallenge' (event) {

    var challengeName = $("#challengeName").val();

    alert("Challenge deleted!");
    event.preventDefault();
    Meteor.call("deleteChallenge", challengeName);
  }

});
