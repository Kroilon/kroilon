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
  'submit form' (event) {

    event.preventDefault();

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

    Modal.show('challengeInsertModal', this);
    Meteor.call("insertChallenge", data);
    $("#addChallenge")[0].reset(); 
  },
  'click #deleteChallenge' (event) {

    var challengeName = $("#challengeName").val();

    alert("Challenge deleted!");
    Meteor.call("deleteChallenge", challengeName);
    $("#addChallenge")[0].reset(); 
  }

});
