import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { KroilonHistory } from '/imports/api/databasedriver.js';

/**
 * Use this key to save or retrieve the dynamic
 * template active at a certain time.
 */
export const OBJECTIVE_ACTIVE_ELEMENT_KEY = "ObjectivesActiveElement";

export const ID_OBJECTIVE_ACTIVE_ELEMENT_KEY = "EditObjectiveElement";

/**
 * Executed before the DOM elements are rendered.
 * Helpful when we want to set a default value 
 * to a variable.
 */
Template.TabObjective.created = function(){
    //default template - Table
    Session.setDefault(OBJECTIVE_ACTIVE_ELEMENT_KEY, "TableObjective");
    Session.setDefault(ID_OBJECTIVE_ACTIVE_ELEMENT_KEY, "EditObjectiveElement");
}


Template.TabObjective.helpers({
    objectiveTemplateName(){
        return "TableObjective";
    },
    editObjectiveName(){
        return "EditObjective";
    },
    isObjectivesElementActive(elementName){
        return Session.get(OBJECTIVE_ACTIVE_ELEMENT_KEY) === elementName;
    }
});
