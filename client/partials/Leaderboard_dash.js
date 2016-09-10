var users = [{
	nb: "nb22477",
	name:"Nuno Silva",
	avatar: "nb22477.jpg",
	score:[{
			date: new Date(),
			challenge: "kahoot",
			category: "HP",
			points: 20
		}],
	profile: "trainee",
	skills:[{
			people: 8,
			communication: 6,
			manegemment:7,
			problemSolving: 7,
			android:2,
			arduino:0
		}]
}];
			

Template.Leaderboard_dash.onRendered(
	function() {

		//debugger;
		
		var total_points = 0;
		
		var users [] =//db.academy.find();
		var total_users = users.length;
		
		$.each(users, function(index_users, value_users){
			
			var user_points = 0;
			
			$.each(value_users.score, function(index_score, value_score){
				
				user_points += value_score.points;
				
			});
			
			var tr_ ="<tr><td><img src='" + value.avatar + "' style='width:226px;height:226px;'></td><td>" + value.name + "</td><td>" + user_points + "</td></tr>";
			console.log( tr_);

			$("#table_leaderboard_dash").append(tr_);
		});
		
		$("#div_pontos_equipa").html(total_points);
});