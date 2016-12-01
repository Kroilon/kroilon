import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

/**
 * Use this key to save or retrieve the dynamic
 * template active at a certain time.
 */
export const DYNAMIC_ACTIVE_ELEMENT_KEY = "DynamicActiveElement";

/**
 * This key retrieves the nb of the player chosen
 * by some click in the dashboard icon or in the 
 * performance icon.
 */
export const CURRENT_PLAYER_NB = "CurrentPlayerNB";


/**
 * Executed before the DOM elements are rendered.
 * Helpful when we want to set a default value 
 * to a variable.
 */
Template.Leaderboard.created = function(){
    //default template - Table
    Session.setDefault(DYNAMIC_ACTIVE_ELEMENT_KEY, "BoardTable");
    //Default nb is from the logged in user
    Session.setDefault(CURRENT_PLAYER_NB, Session.get("loggedUser")[0].nb);
}


Template.Leaderboard.helpers({
    tableTemplateName(){
        return "BoardTable";
    },
    dashboardTemplateName(){
        return "PlayerDashboard";
    },
    performanceTemplateName(){
        return "PlayerPerformance";
    },
    isElementActive(elementName){
        return Session.get(DYNAMIC_ACTIVE_ELEMENT_KEY) === elementName;
    }
});

