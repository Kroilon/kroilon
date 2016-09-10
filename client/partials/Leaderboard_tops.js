import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';	

Template.Leaderboard_tops.helpers({
	userHealthScores() {
		
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}}); 
		var users = latestAcademy.users;
		
		var total_points = 0;
		
		$.each(users, function(index_users, value_users){
			
			var user_points = 0;
			
			$.each(value_users.score, function(index_score, value_score){
				
				if(value_score.category=="HP"){
					user_points += value_score.points;
				}
				
			});
			
			value_users.totalHealthScore = user_points;
			total_points += user_points;
		});
		
		sortArrOfObjectsByParam(users, "totalHealthScore", false);
	
		return users;
	},
	userKnowledgeScores() {
		
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}}); 
		var users = latestAcademy.users;
		
		var total_points = 0;
		
		$.each(users, function(index_users, value_users){
			
			var user_points = 0;
			
			$.each(value_users.score, function(index_score, value_score){
				
				if(value_score.category=="KP"){
					user_points += value_score.points;
				}
				
			});
			
			value_users.totalKnowledgeScore = user_points;
			total_points += user_points;
		});
		
		sortArrOfObjectsByParam(users, "totalKnowledgeScore", false);
	
		return users;
	},
	userExperienceScores() {
		
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}}); 
		var users = latestAcademy.users;
		
		var total_points = 0;
		
		$.each(users, function(index_users, value_users){
			
			var user_points = 0;
			
			$.each(value_users.score, function(index_score, value_score){
				
				if(value_score.category=="XP"){
					user_points += value_score.points;
				}
				
			});
			
			value_users.totalExperienceScore = user_points;
			total_points += user_points;
		});
		
		sortArrOfObjectsByParam(users, "totalExperienceScore", false);
	
		return users;
	}

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