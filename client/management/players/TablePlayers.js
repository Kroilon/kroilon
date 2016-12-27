import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

/**
 * Use this key to save or retrieve the dynamic
 * template active at a certain time.
 */
export const PLAYERS_ACTIVE_ELEMENT_KEY = "TablePlayerInfo";

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
Template.TablePlayers.created = function(){
    //default template - Table
    Session.setDefault(PLAYERS_ACTIVE_ELEMENT_KEY, "TablePlayerInfo");
    //Default nb is from the logged in user
    Session.setDefault(CURRENT_PLAYER_NB, Session.get("loggedUser")[0].nb);
}


Template.TablePlayers.helpers({
    tableTemplateName(){
        return "TablePlayerInfo";
    },
    newTemplateName(){
        return "NewPlayerInfo";
    },
    editTemplateName(){
        return "EditPlayerInfo";
    },
    isElementActive(elementName){
        return Session.get(PLAYERS_ACTIVE_ELEMENT_KEY) === elementName;
    }
});
