import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

import { CHALLENGE_ACTIVE_ELEMENT_KEY, ID_CHALLENGE_ACTIVE_ELEMENT_KEY } from '/client/management/challenges/TabChallenges.js';

Template.EditChallengeInfo.helpers({
    pointTypes: function () {
    return [
        { name: 'XP', value: 'Experience Points' },
        { name: 'KP', value: 'Knowledge Points' },
        { name: 'HP', value: 'Health Points' },
        { name: 'TP', value: 'Team Points' },
        { name: 'NP', value: 'No Points' }
      ];
    },
    challengeTypes: function () {
    return [
        { name: 'BADGE', value: 'BADGE' },
        { name: 'CHALLENGE', value: 'CHALLENGE' }
      ];
    },
    academyChallenge() {
        let challengeId = Session.get(ID_CHALLENGE_ACTIVE_ELEMENT_KEY).trim();
        //console.log("challengeId: " + challengeId);
        let challenge = Challenges.find({ "name": challengeId }).fetch();  
        //console.log("challenge NAME: " + challenge[0].name);
        return challenge;
    }
    
});

const TABLE_CHALLENGE_ACTIVE_TEMPLATE_NAME = "TableChallengeInfo";
const NEW_CHALLENGE_ACTIVE_TEMPLATE_NAME = "NewChallengeInfo";
const EDIT_CHALLENGE_ACTIVE_TEMPLATE_NAME = "EditChallengeInfo";

Template.EditChallengeInfo.events({
  'submit form' (event) {

    event.preventDefault();

    let data = {};

    let challengeName = $("#challengeName").val();
    let challengeType = $("#challengeType").val();
    let challengePoints = $("#challengePoints").val();
    let pointsType = $("#pointsType").val();
    let challengeDescription = $("#challengeDescription").val();

    data =
    {
      name: challengeName,
      type: challengeType,
      points: challengePoints,
      pointsType: pointsType,
      description: challengeDescription
    };

    let challengeId = Session.get(ID_CHALLENGE_ACTIVE_ELEMENT_KEY).trim();
    let challenge = Challenges.find({ "name": challengeId }).fetch();  

    //Modal.show('challengeInsertModal', this);
    Meteor.call("updateAcademyChallenge", challenge[0], data, function(error, result) {
      if (error) {
        alert(error);
      } 
    });
    $("#addChallenge")[0].reset(); 
    Session.set(CHALLENGE_ACTIVE_ELEMENT_KEY, TABLE_CHALLENGE_ACTIVE_TEMPLATE_NAME);

  },
  
  'click #nopChallenge' (event){
    event.preventDefault();
    Session.set(CHALLENGE_ACTIVE_ELEMENT_KEY, TABLE_CHALLENGE_ACTIVE_TEMPLATE_NAME);
  }

});
