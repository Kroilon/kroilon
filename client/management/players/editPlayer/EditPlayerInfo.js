import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

import { PLAYERS_ACTIVE_ELEMENT_KEY,
         CURRENT_PLAYER_NB    
     } from '/client/management/players/TablePlayers.js';

const TABLE_PLAYERS_ACTIVE_TEMPLATE_NAME = "TablePlayerInfo";
const NEW_PLAYER_ACTIVE_TEMPLATE_NAME = "NewPlayerInfo";
const EDIT_PLAYER_ACTIVE_TEMPLATE_NAME = "EditPlayerInfo";

Template.registerHelper('getBusinessUnit', function(unit) {
  
  var businessUnit = ""; 

  switch (unit) {
    case "CF":
        businessUnit = "Celfocus";
        break;
    case "GTE":
        businessUnit = "Government, Transport and Energy";
        break;
    case "FSI":
        businessUnit = "Financial Services";
        break;
    case "VC":
        businessUnit = "Venture Capital";
        break;
    case "NT":
        businessUnit = "NeoTalent";
        break;
    case "IMS":
        businessUnit = "IMS";
        break;
    default:
        businessUnit = "";
  }

  return businessUnit;

});

Template.EditPlayerInfo.helpers({

  mbtiTypes: function () {
    return [
        { name: 'ISTJ', value: 'ISTJ' },
        { name: 'ISFJ', value: 'ISFJ' },
        { name: 'INFJ', value: 'INFJ' },
        { name: 'INTJ', value: 'INTJ' },
        { name: 'ISTP', value: 'ISTP' },
        { name: 'ISFP', value: 'ISFP' },
        { name: 'INFP', value: 'INFP' },
        { name: 'INTP', value: 'INTP' },
        { name: 'ESTP', value: 'ESTP' },
        { name: 'ESFP', value: 'ESFP' },
        { name: 'ENFP', value: 'ENFP' },
        { name: 'ENTP', value: 'ENTP' },
        { name: 'ESTJ', value: 'ESTJ' },
        { name: 'ESFJ', value: 'ESFJ' },
        { name: 'ENFJ', value: 'ENFJ' },
        { name: 'ENTJ', value: 'ENTJ' }
      ];
    },
    businessUnitTypes: function () {
    return [
        { name: 'CF', value: 'Celfocus' },
        { name: 'GTE', value: 'Government, Transport and Energy' },
        { name: 'FSI', value: 'Financial Services' },
        { name: 'VC', value: 'Venture Capital' },
        { name: 'NT', value: 'NeoTalent' },
        { name: 'IMS', value: 'IMS' }        
      ];
    },
    possiblePoints: function () {
    return [
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '4' },
        { name: '5', value: '5' },
        { name: '6', value: '6' },
        { name: '7', value: '7' },
        { name: '8', value: '8' },
        { name: '9', value: '9' },
        { name: '10', value: '10' } 
      ];
    }  

});

Template.EditPlayerInfo.events({   
  'click #insertCharacter' (event){
    event.preventDefault();
    Session.set(PLAYERS_ACTIVE_ELEMENT_KEY, TABLE_PLAYERS_ACTIVE_TEMPLATE_NAME);
    Session.set(CURRENT_PLAYER_NB, _getUserNbFromLink($(event.target).parent()));
  },

  'click #nopCharacter' (event){
    event.preventDefault();
    Session.set(PLAYERS_ACTIVE_ELEMENT_KEY, TABLE_PLAYERS_ACTIVE_TEMPLATE_NAME);
    Session.set(CURRENT_PLAYER_NB, _getUserNbFromLink($(event.target).parent()));
  }

});
