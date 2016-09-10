import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
			

Template.Leaderboard_dash.helpers({
	users() {

		//debugger;
		
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}}); 
		var users = latestAcademy.users;
		
		var total_users = users.length;
		
		$.each(users, function(index_users, value_users){
			
			var user_points = 0;
			
			$.each(value_users.score, function(index_score, value_score){
				
				user_points += value_score.points;
				
			});
			
			value_users.totalScore = user_points;
			
		});
		
		debugger;
		myArray = myArray.sort(function(a, b) {
			return a[1].localeCompare(b[1]);
		});
		
		return users;
	}
});