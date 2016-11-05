import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.TopScores.helpers({

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

	userHealthScores(nb) {

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });
		
		var user_points = 0;

		$.each(user[0].score, function(index, value){

			if(value.pointsType=="HP"){
					user_points += value.points;
				}

			});

		

		return user_points;
	},
	userKnowledgeScores(nb) {

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });
		
		var user_points = 0;

		$.each(user[0].score, function(index, value){

			if(value.pointsType=="KP"){
					user_points += value.points;
				}

			});

		sortArrOfObjectsByParam(user, "totalKnowledgeScore", false);

		return user_points;
	},
	userExperienceScores(nb) {

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });
		
		var user_points = 0;

		$.each(user[0].score, function(index, value){

			if(value.pointsType=="XP"){
					user_points += value.points;
				}

			});
		sortArrOfObjectsByParam(user, "totalExperienceScore", false);

		return user_points;
	},

	sorting_value: function(){
	return_.chain(latestAcademy.find().fetch())
	.sortBy('points')
	.value();

}
});



Template.TopScores.events({

  
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
