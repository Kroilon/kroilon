import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

var average_points = 0;			

Template.Leaderboard_dash.helpers({
	userScores() {
		
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}}); 
		var users = latestAcademy.users;
		
		var total_users = users.length;
		var total_points = 0;
		
		$.each(users, function(index_users, value_users){
			
			var user_points = 0;
			
			$.each(value_users.score, function(index_score, value_score){
				
				user_points += value_score.points;
				
			});
			
			value_users.totalScore = user_points;
			total_points += user_points;
		});
		
		sortArrOfObjectsByParam(users, "totalScore", false);
		
		average_points = total_points/total_users;
		
		var userScores = {users:users,avg:average_points};
	
		return userScores;
	},

});


function sortArrOfObjectsByParam(arrToSort /* array */, strObjParamToSortBy /* string */, sortAscending /* bool(optional, defaults to true) */) {
    if(sortAscending == undefined) sortAscending = true;  // default to true
    
    if(sortAscending) {
        arrToSort.sort(function (a, b) {
            return a[strObjParamToSortBy] > b[strObjParamToSortBy];
        });
    }
    else {
        arrToSort.sort(function (a, b) {
            return a[strObjParamToSortBy] < b[strObjParamToSortBy];
        });
    }
}