import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Rules } from '/imports/api/databasedriver.js';

import { RULES_ACTIVE_ELEMENT_KEY, ID_RULES_ACTIVE_ELEMENT_KEY } from '/client/management/rules/TabRules.js';

Template.NewRuleInfo.helpers({
    pointTypes: function () {
      return [
          { name: 'XP', value: 'Experience Points' },
          { name: 'KP', value: 'Knowledge Points' },
          { name: 'HP', value: 'Health Points' },
          { name: 'TP', value: 'Team Points' },
          { name: 'NP', value: 'No Points' }
        ];
    },

    ruleType: function () {
      return [
          { name: 'BADGE', value: 'BADGE' },
          { name: 'CHALLENGE', value: 'CHALLENGE' }
        ];
    },

    badges: function () {
      let myBadges = Badges.find({}).fetch();
      return myBadges;  
    },

    challenges: function () {
      let myChallenges = Challenges.find({}).fetch();
      return myChallenges;  
    },

    tresholdValues: function () {
      return [
          { name: '1', value: '1' },
          { name: '2', value: '2' },
          { name: '3', value: '3' },
          { name: '4', value: '4' },
          { name: '5', value: '5' },
          { name: '6', value: '6' }
        ];
    },  
    
});

const TABLE_RULE_ACTIVE_TEMPLATE_NAME = "TableRuleInfo";
const NEW_RULE_ACTIVE_TEMPLATE_NAME = "NewRuleInfo";
const EDIT_RULE_ACTIVE_TEMPLATE_NAME = "EditRuleInfo";

Template.NewRuleInfo.events({
  'submit form' (event) {

    event.preventDefault();

    let data = {};

    let ruleName = $("#ruleName").val();
    let ruleType = $("#ruleType").val();
    let idBase = $("#idBadge").val();
    //let idBase = $("#idChallenge").val();
    let ruleThreshold = $("#ruleThreshold").val();
    let rulePoints = $("#rulePoints").val();
    let pointsType = $("#pointsType").val();
    let ruleDescription = $("#ruleDescription").val();

    data =
    {
      name: ruleName,
      type: ruleType,
      typeName: idBase,
      threshold: ruleThreshold,
      points: rulePoints,
      pointsType: pointsType,
    	description: ruleDescription
    };

    //Modal.show('challengeInsertModal', this);
    Meteor.call("insertRule", data, function(error, result) {
      if (error) {
        alert(error);
      } 
    });
    $("#addRule")[0].reset(); 
    Session.set(RULES_ACTIVE_ELEMENT_KEY, TABLE_RULE_ACTIVE_TEMPLATE_NAME);

  },
  
  'click #nopRules' (event){
    event.preventDefault();
    Session.set(RULES_ACTIVE_ELEMENT_KEY, TABLE_RULE_ACTIVE_TEMPLATE_NAME);
  }

});
