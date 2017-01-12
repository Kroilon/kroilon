import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

/**
 * Use this key to save or retrieve the dynamic
 * template active at a certain time.
 */
export const CHALLENGE_ACTIVE_ELEMENT_KEY = "ChallengeActiveElement";

export const ID_CHALLENGE_ACTIVE_ELEMENT_KEY = "EditChallengeElement";

/**
 * Executed before the DOM elements are rendered.
 * Helpful when we want to set a default value 
 * to a variable.
 */
Template.TabChallenges.created = function(){
    //default template - Table
    Session.setDefault(CHALLENGE_ACTIVE_ELEMENT_KEY, "TableChallengeInfo");
    Session.setDefault(ID_CHALLENGE_ACTIVE_ELEMENT_KEY, "EditChallengeElement");
}


Template.TabChallenges.helpers({
    challengesTemplateName(){
        return "TableChallengeInfo";
    },
    newChallengeName(){
        return "NewChallengeInfo";
    },
    editChallengeName(){
        return "EditChallengeInfo";
    },
    isChallengeElementActive(elementName){
        return Session.get(CHALLENGE_ACTIVE_ELEMENT_KEY) === elementName;
    }
});
