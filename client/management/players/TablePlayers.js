import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

Template.TablePlayers.helpers({

  players() {
    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var users = latestAcademy.users;
    users.splice(0, 1);
    return users;
  }   

});

Template.TablePlayers.events({   
  'click #addPlayer' (event){
    event.preventDefault();
    Modal.show('addPlayerModal', this);
  },

  'click #viewPlayer' (event){
    event.preventDefault();
    Modal.show('viewPlayerModal', this);
  },

  'click #editPlayer' (event){
    event.preventDefault();
    Modal.show('editPlayerModal', this);
  },

  'click #deletePlayer' (event){
    event.preventDefault();
    Modal.show('deletePlayerModal', this); 
  } 

});
