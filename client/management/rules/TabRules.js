import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.TabRules.onCreated(function(){
  // Here, this equals the current template instance. We can assign
  // our ReactiveVar to it, making it accessible throughout the
  // current template instance.
  this.showExtraFields = new ReactiveVar( false );
});

Template.TabRules.helpers({
	showExtraFields: function() {
	    // Here we get our template instance from Template.instance() and
	    // can access showExtraFields from it.
	    return Template.instance().showExtraFields.get();
  	},
	ruleTypes: function () {
	    return [
	        { name: 'challenge', value: 'Challenge' },
	        { name: 'badge', value: 'Badge' },
	        { name: 'card', value: 'Card' }
	      ];
    },
    thresholdValues: function () {
	    return [
	        { name: '1', value: '1' },
	        { name: '2', value: '2' },
	        { name: '3', value: '3' },
	        { name: '4', value: '4' },
	        { name: '5', value: '5' },
	        { name: '6', value: '6' }
	      ];
    },
	pointTypes: function () {
	    return [
	        { name: 'XP', value: 'Experience Points' },
	        { name: 'KP', value: 'Knowledge Points' },
	        { name: 'HP', value: 'Health Points' },
	        { name: 'TP', value: 'Team Points' },
	        { name: 'NP', value: 'No Points' }
	      ];
    },
    badges(){
    	var badges = Badges.find({}).fetch();
    	return badges;
    },
    challenges(){
    	var challenges = Challenges.find({}).fetch();
    	return challenges;
    }
});

Template.TabRules.events({  
	'change select': function( event, template ) {
	    if ( $( event.target ).val() === "challenge" ) {
	      // Here we get our template instance from the template
	      // argument in our event handler.
	      template.showExtraFields.set( true );
	    } else {
	      template.showExtraFields.set( false );
	    }
	}  
});
