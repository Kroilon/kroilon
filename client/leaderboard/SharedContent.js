import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.SharedContent.helpers({
	userScores() {

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var users = latestAcademy.users;
		var total_users = users.length;
		var total_points = 0;

		$.each(users, function(index_users, value_users){

			var user_points = 0;
			console.log(value_users.score);
			$.each(value_users.score, function(index_score, value_score){

				user_points += value_score.points;

			});

			value_users.totalScore = user_points;
			total_points += user_points;
		});

		sortArrOfObjectsByParam(users, "totalScore", false);

		var average_points = (total_points/total_users);

		var userScores = {users:users, avg: parseInt(average_points)};

		return userScores;
	}
});

Template.SharedContent.events({

  
});
