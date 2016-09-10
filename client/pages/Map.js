import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

Template.Map.helpers({
	total_score() {

	debugger;
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var scores = latestAcademy.teamScore;
		var total_score = 0;

		$.each(scores, function(index, value){

			total_score += value.points;
		});

		return total_score;
	}

});