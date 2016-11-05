import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

Template.TablePlayerPoints.helpers({

	playerPoints() {

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var players = latestAcademy.users;
		var points = [];
		$.each(players, function(idx_players, val_players)
		{
			var scores = players[idx_players].score;
			console.log(players);
			console.log(scores);
			if (scores != undefined)
			{
				$.each(scores, function(idx_scores, val_scores)
				{
					points.push({"name":val_players.name, "challenge":val_scores.challenge, "category":val_scores.category, "points":val_scores.points, "date":val_scores.date});
				//	console.log(points_a);
				//	console.log(points[0]);
				});
			}			
		});

		//var nb = players[0].score;
		sortArrOfObjectsByParam(points, "date", false);
		return points;
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