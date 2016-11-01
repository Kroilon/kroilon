import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.TabRules.helpers({
	ruleTypes: function () {
	    return [
	        { name: 'activity', value: 'Activity' },
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
    }    
});

Template.TabRules.events({
  


  
});
