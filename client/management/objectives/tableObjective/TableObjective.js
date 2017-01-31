import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';
import { KroilonHistory } from '/imports/api/databasedriver.js';

import { OBJECTIVE_ACTIVE_ELEMENT_KEY, ID_OBJECTIVE_ACTIVE_ELEMENT_KEY } from '/client/management/objectives/TabObjective.js';

Template.TableObjective.helpers({

  missionObjective() {
    var objectives = KroilonHistory.find({}).fetch();
    sortArrOfObjectsByParam(objectives, "day", true);
    return objectives;
  }

});

const TABLE_OBJECTIVE_ACTIVE_TEMPLATE_NAME = "TableObjective";
const EDIT_OBJECTIVE_ACTIVE_TEMPLATE_NAME = "EditObjective";

Template.TableObjective.events({   

  "click #editObjective" (event){
      event.preventDefault();
      Session.set(ID_OBJECTIVE_ACTIVE_ELEMENT_KEY, _getUserNbFromLink($(event.target).parent()));
      Session.set(OBJECTIVE_ACTIVE_ELEMENT_KEY, EDIT_OBJECTIVE_ACTIVE_TEMPLATE_NAME);

  },

  'click #viewObjective' (event){
    event.preventDefault();

    Modal.show('viewObjectiveModal', this);
   
  }

});

function _getUserNbFromLink(target){
    return target.attr('href').slice(1);
}

function sortArrOfObjectsByParam(arrToSort, strObjParamToSortBy /* string */, sortAscending /* bool(optional, defaults to true) */) {
    if(sortAscending == undefined) sortAscending = true;  // default to true

    if(sortAscending) {
        arrToSort.sort(function (a, b) {
            return a[strObjParamToSortBy] > b[strObjParamToSortBy];
        });
    }
    else {
        arrToSort.sort(function (a, b) {
            return a[strObjParamToSortBy] < b[strObjParamToSortBy];
        });
    }
}