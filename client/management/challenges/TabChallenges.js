import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

/**
 * Use this key to save or retrieve the dynamic
 * template active at a certain time.
 */
export const ROOMS_ACTIVE_ELEMENT_KEY = "RoomsActiveElement";

export const ID_ROOM_ACTIVE_ELEMENT_KEY = "EditRoomElement";

/**
 * Executed before the DOM elements are rendered.
 * Helpful when we want to set a default value 
 * to a variable.
 */
Template.TabChallenges.created = function(){
    //default template - Table
    Session.setDefault(ROOMS_ACTIVE_ELEMENT_KEY, "TableRoomInfo");
    Session.setDefault(ID_ROOM_ACTIVE_ELEMENT_KEY, "EditRoomElement");
}


Template.TabChallenges.helpers({
    roomsTemplateName(){
        return "TableBadgeInfo";
    },
    newRoomName(){
        return "NewBadgeInfo";
    },
    editRoomName(){
        return "EditBadgeInfo";
    },
    isChallengeElementActive(elementName){
        return Session.get(ROOMS_ACTIVE_ELEMENT_KEY) === elementName;
    }
});
