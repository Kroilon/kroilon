import { Rules } from '/imports/api/databasedriver.js';

Template.deleteRuleModal.events({

  'click #delete': function(e) {
    
    e.preventDefault();
    let rule = this;
    //console.log("rule: " + rule.name);

    Meteor.call('deleteRule', rule.name, function(error, result) {
      if (error) {
        alert(error);
      }
    });

    Modal.hide('deleteRuleModal');

  }
});