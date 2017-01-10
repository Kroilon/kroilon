import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

/**
 * Use this key to save or retrieve the dynamic
 * template active at a certain time.
 */
export const BADGES_ACTIVE_ELEMENT_KEY = "BadgesActiveElement";

export const ID_BADGE_ACTIVE_ELEMENT_KEY = "EditBadgeElement";

/**
 * Executed before the DOM elements are rendered.
 * Helpful when we want to set a default value 
 * to a variable.
 */
Template.TabBadges.created = function(){
    //default template - Table
    Session.setDefault(BADGES_ACTIVE_ELEMENT_KEY, "TableBadgeInfo");
    Session.setDefault(ID_BADGE_ACTIVE_ELEMENT_KEY, "EditBadgeElement");
}


Template.TabBadges.helpers({
    badgesTemplateName(){
        return "TableBadgeInfo";
    },
    newBadgeName(){
        return "NewBadgeInfo";
    },
    editBadgeName(){
        return "EditBadgeInfo";
    },
    isBadgesElementActive(elementName){
        return Session.get(BADGES_ACTIVE_ELEMENT_KEY) === elementName;
    }
});
