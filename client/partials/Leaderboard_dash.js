import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
			

Template.Leaderboard_dash.helpers({
	users() {

		debugger;
		
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}}); 
		var users = latestAcademy.users;
		
		/*var total_points = 0;	
		var total_users = users.length;
		
		$.each(users, function(index_users, value_users){
			
			var user_points = 0;
			
			$.each(value_users.score, function(index_score, value_score){
				
				user_points += value_score.points;
				
			});
			
			value_users.totalScore = total_points;
			
			//var tr_ ="<tr><td><img src='" + value.avatar + "' style='width:226px;height:226px;'></td><td>" + value.name + "</td><td>" + user_points + "</td></tr>";
			//console.log( tr_);

			//$("#table_leaderboard_dash").append(tr_);
		});
		
		//$("#div_pontos_equipa").html(total_points);
		*/
		return users;
	}
});