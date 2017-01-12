import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

/**
 * Use this key to save or retrieve the dynamic
 * template active at a certain time.
 */
export const RULES_ACTIVE_ELEMENT_KEY = "RulesActiveElement";

export const ID_RULES_ACTIVE_ELEMENT_KEY = "EditRuleElement";

/**
 * Executed before the DOM elements are rendered.
 * Helpful when we want to set a default value 
 * to a variable.
 */
Template.TabRules.created = function(){
    //default template - Table
    Session.setDefault(RULES_ACTIVE_ELEMENT_KEY, "TableRuleInfo");
    Session.setDefault(ID_RULES_ACTIVE_ELEMENT_KEY, "EditRuleElement");
}


Template.TabRules.helpers({
    rulesTemplateName(){
        return "TableRuleInfo";
    },
    newRuleName(){
        return "NewRuleInfo";
    },
    editRuleName(){
        return "EditRuleInfo";
    },
    isRulesElementActive(elementName){
        return Session.get(RULES_ACTIVE_ELEMENT_KEY) === elementName;
    }
});
