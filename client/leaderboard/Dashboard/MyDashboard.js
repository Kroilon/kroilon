import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.MyDashboard.helpers({

	characters() {
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		return latestAcademy.users;
	},

  	score(nb)
  	{
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

		var user_points = 0;

		$.each(user[0].score, function(index, value){
			user_points += value.points;
		});

		return user_points;
  	},

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

		var average_points = (total_points/total_users - 1); //-1 por causa do formador

		var userScores = {users: users, avg: parseInt(average_points)};

		return userScores;
	}
});

Template.MyDashboard.events({

    'click #tapMyBack' (event){
	    event.preventDefault();
		
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
        var user = $.grep(latestAcademy.users, function(e){ return e.nb == 21000; });
        var voted = user[0].voted;
		// Switch like image if the player hasn't voted yet
	  	if (!voted)
	  	{
			console.log("Nao votei");	
			Meteor.call("updateVoted", latestAcademy, 21000);
	  	}
	  	else console.log("Votei");	 
  	}

});

function sortArrOfObjectsByParam(arrToSort, strObjParamToSortBy /* string */, sortAscending /* bool(optional, defaults to true) */) {
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
