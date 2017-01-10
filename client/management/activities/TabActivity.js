import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

/**
 * Use this key to save or retrieve the dynamic
 * template active at a certain time.
 */
export const ACTIVITIES_ACTIVE_ELEMENT_KEY = "ActivitiesActiveElement";

export const ID_ACTIVITY_ACTIVE_ELEMENT_KEY = "EditActivityElement";


/**
 * Executed before the DOM elements are rendered.
 * Helpful when we want to set a default value 
 * to a variable.
 */
Template.TabActivity.created = function(){
    //default template - Table
    Session.setDefault(ACTIVITIES_ACTIVE_ELEMENT_KEY, "TableActivityInfo");
    Session.setDefault(ID_ACTIVITY_ACTIVE_ELEMENT_KEY, "EditActivityElement");
}


Template.TabActivity.helpers({
    activitiesTemplateName(){
        return "TableActivityInfo";
    },
    newActivityName(){
        return "NewActivityInfo";
    },
    editActivityName(){
        return "EditActivityInfo";
    },
    isActivityElementActive(elementName){
        return Session.get(ACTIVITIES_ACTIVE_ELEMENT_KEY) === elementName;
    }
});
