import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

import { CHALLENGE_ACTIVE_ELEMENT_KEY, ID_CHALLENGE_ACTIVE_ELEMENT_KEY } from '/client/management/challenges/TabChallenges.js';

Template.NewChallengeInfo.helpers({
    pointTypes: function () {
    return [
        { name: 'XP', value: 'Experience Points' },
        { name: 'KP', value: 'Knowledge Points' },
        { name: 'HP', value: 'Health Points' },
        { name: 'TP', value: 'Team Points' },
        { name: 'NP', value: 'No Points' }
      ];
    }    
    
});

const TABLE_CHALLENGE_ACTIVE_TEMPLATE_NAME = "TableChallengeInfo";
const NEW_CHALLENGE_ACTIVE_TEMPLATE_NAME = "NewChallengeInfo";
const EDIT_CHALLENGE_ACTIVE_TEMPLATE_NAME = "EditChallengeInfo";

Template.NewChallengeInfo.events({
  'submit form' (event) {

    event.preventDefault();

    let data = {};

    let challengeName = $("#challengeName").val();
    let challengePoints = $("#challengePoints").val();
    let pointsType = $("#pointsType").val();
    let challengeDescription = $("#challengeDescription").val();

    data =
    {
      name: challengeName,
    	points: challengePoints,
      pointsType: pointsType,
    	description: challengeDescription
    };

    //Modal.show('challengeInsertModal', this);
    Meteor.call("insertChallenge", data, function(error, result) {
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
