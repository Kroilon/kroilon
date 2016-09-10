import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

Template.Map.helpers({
	total_day() {

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var scores = latestAcademy.teamScore;
		var energy_level = latestAcademy.energyLevel;
		var total_score = 0;

		$.each(scores, function(index, value){

			total_score += value.points;
		});

		var img_energyLevel = "/energyLevels/energyLevels_5.png";

		switch(energy_level) {
			case 0:
				img_energyLevel = "/energyLevels/energyLevels_0.png";
				break;
			case 1:
				img_energyLevel = "/energyLevels/energyLevels_1.png";
				break;
			case 2:
				img_energyLevel = "/energyLevels/energyLevels_2.png";
				break;
			case 3:
				img_energyLevel = "/energyLevels/energyLevels_3.png";
				break;
			case 4:
				img_energyLevel = "/energyLevels/energyLevels_4.png";
				break;
		}

		var total = {score:total_score,img_energyLevel:img_energyLevel};

		return total;
	},
	message() {
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		return latestAcademy.dailyMessage;

	}

});
