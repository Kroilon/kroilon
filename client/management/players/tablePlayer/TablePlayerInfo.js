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

Template.TablePlayerInfo.helpers({

  players() {
    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var users = latestAcademy.users;
    users.splice(0, 1);
    return users;
  }   

});

Template.TablePlayerInfo.events({   

  //Act when the personal performance board icon is clicked
  "click #addPlayer" (event){
      event.preventDefault();
      Session.set(PLAYERS_ACTIVE_ELEMENT_KEY, NEW_PLAYER_ACTIVE_TEMPLATE_NAME);
  },

  //Act when the personal performance graph icon is clicked
  "click #editPlayer" (event){
      event.preventDefault();
      Session.set(PLAYERS_ACTIVE_ELEMENT_KEY, EDIT_PLAYER_ACTIVE_TEMPLATE_NAME);
      Session.set(CURRENT_PLAYER_NB, _getUserNbFromLink($(event.target).parent()));
  },

  'click #viewPlayer' (event){
    event.preventDefault();
    Modal.show('viewPlayerModal', this);
  },

  'click #deletePlayer' (event){
    event.preventDefault();
    Modal.show('deletePlayerModal', this); 
  } 

});

function _getUserNbFromLink(target){
    return target.attr('href').slice(1);
}
