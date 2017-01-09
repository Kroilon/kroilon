import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

/**
 * Use this key to save or retrieve the dynamic
 * template active at a certain time.
 */
export const PLAYERS_ACTIVE_ELEMENT_KEY = "PlayersActiveElement";

export const NB_ACTIVE_ELEMENT_KEY = "EditActiveElement";

/**
 * Executed before the DOM elements are rendered.
 * Helpful when we want to set a default value 
 * to a variable.
 */
Template.TablePlayers.created = function(){
    //default template - Table
    Session.setDefault(PLAYERS_ACTIVE_ELEMENT_KEY, "TablePlayerInfo");
    Session.setDefault(NB_ACTIVE_ELEMENT_KEY, "EditActiveElement");
}


Template.TablePlayers.helpers({
    playersTemplateName(){
        return "TablePlayerInfo";
    },
    newTemplateName(){
        return "NewPlayerInfo";
    },
    editTemplateName(){
        return "EditPlayerInfo";
    },
    isPlayersElementActive(elementName){
        return Session.get(PLAYERS_ACTIVE_ELEMENT_KEY) === elementName;
    }
});
