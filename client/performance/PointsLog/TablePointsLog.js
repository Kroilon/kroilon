import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

Template.registerHelper('formatDate', function(date) {
  return date.toDateString();
});

Template.TablePointsLog.helpers({

	playerPoints() {

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var players = latestAcademy.users;
		players.splice(0, 3);
		var points = [];
		$.each(players, function(idx_players, val_players)
		{
			var scores = players[idx_players].score;
			// console.log(players);
			// console.log(scores);
			if (scores != undefined)
			{
				$.each(scores, function(idx_scores, val_scores)
				{
					points.push({"player":val_players.name, "category":val_scores.countType, "name":val_scores.name, "points":val_scores.points, "type":val_scores.pointsType,  "date":val_scores.date});
				//	console.log(points_a);
				//	console.log(points[0]);
				});
			}			
		});

		//var nb = players[0].score;
		sortArrOfObjectsByParam(points, "date", false);
		return points;
	},

	teamPoints() {

	    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
	    var teamScore = latestAcademy.teamScore;
	    var teamPoints = [];

	    $.each(teamScore, function(idx_scores, val_scores) 
	    {
	        teamPoints.push({"player":"Team", "nb": "Team", "name":val_scores.name, "points":val_scores.points, "date":val_scores.date});
	      //  console.log(points_a);
	      //  console.log(points[0]);
	    });

	    sortArrOfObjectsByParam(teamPoints, "date", false);
	    return teamPoints;
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