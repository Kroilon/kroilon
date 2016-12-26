import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.TopScores.helpers({

	characters() {
		var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });

		var users = latestAcademy.users;
		users.splice(0, 3);
		return users;
	},
	/*var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
	var users = latestAcademy.users;
	var userHealthScores = [];
	var totalHealthPoints = 0;
	$.each(users, function(idx_players, val_players)
	{
		var scores = users[idx_players].score;
		var nb = users[idx_players].nb;
		if (scores != undefined) {
			totalHealthPoints = calc_HP_KP_XP(nb, "HP");
			userHealthScores.push({"name":val_players.name, "avatar":val_players.avatar, "points":totalHealthPoints});
			userHealthScores.sort(function(a,b){return b.points-a.points});
		}			
	});
	return userHealthScores;
},
*/
	userHealthScores() {

		var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
		var users = latestAcademy.users;
		users.splice(0, 3);
		var userHealthScores = [];
		var totalHealthPoints = 0;
		$.each(users, function (idx_players, val_players) {
			var scores = users[idx_players].score;
			var nb = users[idx_players].nb;
			if (scores != undefined) {
				totalHealthPoints = calc_HP_KP_XP(nb, "HP");
				userHealthScores.push({ "name": val_players.name, "avatar": val_players.avatar, "points": totalHealthPoints });
				userHealthScores.sort(function (a, b) { return b.points - a.points });
			}
		});
		return userHealthScores;
	},
	userKnowledgeScores() {

		var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
		var users = latestAcademy.users;
		users.splice(0, 3);
		var userKnowledgeScores = [];
		var totalKnowledgePoints = 0;
		$.each(users, function (idx_players, val_players) {
			var scores = users[idx_players].score;
			var nb = users[idx_players].nb;
			if (scores != undefined) {
				totalKnowledgePoints = calc_HP_KP_XP(nb, "KP");
				userKnowledgeScores.push({ "name": val_players.name, "avatar": val_players.avatar, "points": totalKnowledgePoints });
				userKnowledgeScores.sort(function (a, b) { return b.points - a.points });
			}
		});
		return userKnowledgeScores;
	},
	userExperienceScores() {

		var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
		var users = latestAcademy.users;
		users.splice(0, 3);
		var userExperienceScores = [];
		var totalExperiencePoints = 0;
		$.each(users, function (idx_players, val_players) {
			var scores = users[idx_players].score;
			var nb = users[idx_players].nb;
			if (scores != undefined) {
				totalExperiencePoints = calc_HP_KP_XP(nb, "XP");
				userExperienceScores.push({ "name": val_players.name, "avatar": val_players.avatar, "points": totalExperiencePoints });
				userExperienceScores.sort(function (a, b) { return b.points - a.points });
			}
		});
		return userExperienceScores;
	}
});



Template.TopScores.events({


});

function calc_HP_KP_XP(nb, pointsType) {

	var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
	var user = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });
	var user_points = 0;

	$.each(user[0].score, function (index, value) {
		if (value.pointsType == pointsType) {
			user_points += value.points;
		}
	});
	return user_points;
}

function sortArrOfObjectsByParam(arrToSort, strObjParamToSortBy /* string */, sortAscending = true) {

	if (sortAscending) {
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
