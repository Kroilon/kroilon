import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

import { CHALLENGE_ACTIVE_ELEMENT_KEY, ID_CHALLENGE_ACTIVE_ELEMENT_KEY } from '/client/management/challenges/TabChallenges.js';

Template.TableChallengeInfo.helpers({

  academyChallenges() {  
    let challenges = Challenges.find({}).fetch();
    return challenges;
    
  }   

});

const TABLE_CHALLENGE_ACTIVE_TEMPLATE_NAME = "TableChallengeInfo";
const NEW_CHALLENGE_ACTIVE_TEMPLATE_NAME = "NewChallengeInfo";
const EDIT_CHALLENGE_ACTIVE_TEMPLATE_NAME = "EditChallengeInfo";

Template.TableChallengeInfo.events({   

  //Act when the personal performance board icon is clicked
  "click #addChallenge" (event){
      event.preventDefault();
      Session.set(CHALLENGE_ACTIVE_ELEMENT_KEY, NEW_CHALLENGE_ACTIVE_TEMPLATE_NAME);
  },

  //Act when the personal performance graph icon is clicked
  "click #editChallenge" (event){
      event.preventDefault();
      Session.set(ID_CHALLENGE_ACTIVE_ELEMENT_KEY, _getUserNbFromLink($(event.target).parent()));
      Session.set(CHALLENGE_ACTIVE_ELEMENT_KEY, EDIT_CHALLENGE_ACTIVE_TEMPLATE_NAME);

  },

  'click #viewChallenge' (event){
    event.preventDefault();
    Modal.show('viewChallengeModal', this);
    
  },

  'click #deleteChallenge' (event){
    event.preventDefault();
    Modal.show('deleteChallengeModal', this); 
  } 

});

function _getUserNbFromLink(target){
    return target.attr('href').slice(1);
}