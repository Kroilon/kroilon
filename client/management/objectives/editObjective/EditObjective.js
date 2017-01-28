import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { KroilonHistory } from '/imports/api/databasedriver.js';

import { OBJECTIVE_ACTIVE_ELEMENT_KEY, ID_OBJECTIVE_ACTIVE_ELEMENT_KEY} from '/client/management/objectives/TabObjective.js';

Template.EditObjective.helpers({
    
    missionObjective() {
        let objectiveDay = Session.get(ID_OBJECTIVE_ACTIVE_ELEMENT_KEY).trim();
        //console.log("OBJECTIVE ID: " + objectiveDay);
        let objectiveNumer = Number(objectiveDay);
        //console.log("OBJECTIVE NUMBER: " + objectiveNumer);
        let objective = KroilonHistory.find({ "day": objectiveNumer }).fetch();  
        //console.log("OBJECTIVE DAY: " + objective[0].day);
        return objective;
    }

});

const TABLE_OBJECTIVE_ACTIVE_TEMPLATE_NAME = "TableObjective";

Template.EditObjective.events({
  'submit form' (event) {

    event.preventDefault();

    var objectiveDescription = $("#objectiveDescription").val();

    let objectiveDay = Session.get(ID_OBJECTIVE_ACTIVE_ELEMENT_KEY).trim();
    let objectiveNumer = Number(objectiveDay);
    //console.log("OBJECTIVE NUMBER: " + objectiveNumer);
    let objective = KroilonHistory.find({ "day": objectiveNumer }).fetch();

    //Modal.show('roomsInsertModal', this);
    Meteor.call("updateObjectiveDescription", objective[0], objectiveDescription, function(error, result) {
      if (error) {
        alert(error);
      } 
    });
    //$("#addRoom")[0].reset(); 
    Session.set(OBJECTIVE_ACTIVE_ELEMENT_KEY, TABLE_OBJECTIVE_ACTIVE_TEMPLATE_NAME);
  },
  
  'click #nopObjective' (event){
    event.preventDefault();
    Session.set(OBJECTIVE_ACTIVE_ELEMENT_KEY, TABLE_OBJECTIVE_ACTIVE_TEMPLATE_NAME);
  }
  
});
