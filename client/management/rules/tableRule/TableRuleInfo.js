import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';
import { Rules } from '/imports/api/databasedriver.js';

import { RULES_ACTIVE_ELEMENT_KEY, ID_RULES_ACTIVE_ELEMENT_KEY } from '/client/management/rules/TabRules.js';

Template.TableRuleInfo.helpers({

  academyRules() {  
    let rules = Rules.find({}).fetch();
    return rules;    
  }   

});

const TABLE_RULE_ACTIVE_TEMPLATE_NAME = "TableRuleInfo";
const NEW_RULE_ACTIVE_TEMPLATE_NAME = "NewRuleInfo";
const EDIT_RULE_ACTIVE_TEMPLATE_NAME = "EditRuleInfo";

Template.TableRuleInfo.events({   

  //Act when the personal performance board icon is clicked
  "click #addRule" (event){
      event.preventDefault();
      Session.set(RULES_ACTIVE_ELEMENT_KEY, NEW_RULE_ACTIVE_TEMPLATE_NAME);
  },

  //Act when the personal performance graph icon is clicked
  "click #editRule" (event){
      event.preventDefault();
      Session.set(ID_RULES_ACTIVE_ELEMENT_KEY, _getUserNbFromLink($(event.target).parent()));
      Session.set(RULES_ACTIVE_ELEMENT_KEY, EDIT_RULE_ACTIVE_TEMPLATE_NAME);

  },

  'click #viewRule' (event){
    event.preventDefault();
    Modal.show('viewRuleModal', this);
    
  },

  'click #deleteRule' (event){
    event.preventDefault();
    Modal.show('deleteRuleModal', this); 
  } 

});

function _getUserNbFromLink(target){
    return target.attr('href').slice(1);
}