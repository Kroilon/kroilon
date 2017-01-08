import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

/**
 * Use this key to save or retrieve the dynamic
 * template active at a certain time.
 */
export const ACADEMIES_ACTIVE_ELEMENT_KEY = "AcademiesActiveElement";

/**
 * Executed before the DOM elements are rendered.
 * Helpful when we want to set a default value 
 * to a variable.
 */
Template.TabAcademy.created = function(){
    //default template - Table
    Session.setDefault(ACADEMIES_ACTIVE_ELEMENT_KEY, "TableAcademies");
}


Template.TabAcademy.helpers({
    academiesTable(){
        return "TableAcademies";
    },
    newAcademy(){
        return "NewAcademy";
    },
    isAcademiesElementActive(elementName){
        return Session.get(ACADEMIES_ACTIVE_ELEMENT_KEY) === elementName;
    }
});
