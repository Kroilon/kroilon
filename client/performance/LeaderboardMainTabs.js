import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

ReactiveTabs.createInterface({
	template: 'basicTabs',
	onChange: function (slug, template) {
		// This callback runs every time a tab changes.
		// The `template` instance is unique per {{#basicTabs}} block.
	}
});

Template.LeaderboardMainTabs.helpers({

	playerPoints() {

		var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
		var players = latestAcademy.users;
		var points = [];
		$.each(players, function (idx_players, val_players) {
			var scores = players[idx_players].score;

			if (scores != undefined) {
				$.each(scores, function (idx_scores, val_scores) {
					points.push({ "name": val_players.name, "challenge": val_scores.challenge, "category": val_scores.category, "points": val_scores.points, "date": val_scores.date });

				});
			}
		});

		//var nb = players[0].score;
		sortArrOfObjectsByParam(points, "date", false);
		return points;
	},
	userScores() {

		var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
		var users = latestAcademy.users;
		var total_users = users.length;
		var total_points = 0;

		$.each(users, function (index_users, value_users) {

			var user_points = 0;

			$.each(value_users.score, function (index_score, value_score) {

				user_points += value_score.points;

			});

			value_users.totalScore = user_points;
			total_points += user_points;
		});

		sortArrOfObjectsByParam(users, "totalScore", false);

		var average_points = (total_points / total_users);

		var userScores = { users: users, avg: parseInt(average_points) };

		return userScores;
	},
	userHealthScores() {

		var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
		var users = latestAcademy.users;

		var total_points = 0;

		$.each(users, function (index_users, value_users) {

			var user_points = 0;

			$.each(value_users.score, function (index_score, value_score) {

				if (value_score.category == "HP") {
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

		var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
		var users = latestAcademy.users;

		var total_points = 0;

		$.each(users, function (index_users, value_users) {

			var user_points = 0;

			$.each(value_users.score, function (index_score, value_score) {

				if (value_score.category == "KP") {
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

		var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
		var users = latestAcademy.users;

		var total_points = 0;

		$.each(users, function (index_users, value_users) {

			var user_points = 0;

			$.each(value_users.score, function (index_score, value_score) {

				if (value_score.category == "XP") {
					user_points += value_score.points;
				}

			});

			value_users.totalExperienceScore = user_points;
			total_points += user_points;
		});

		sortArrOfObjectsByParam(users, "totalExperienceScore", false);

		return users;
	},
	isLoggedIn() {
		return Session.get("loggedUser") != '' && Session.get("loggedUser") != null && Session.get("loggedUser") != undefined
	},
	tabs: function () {
		// Every tab object MUST have a name and a slug!
		return [
			{ name: 'Leaderboard', slug: 'leaderboard' },
			{ name: 'Team Performance', slug: 'teamPerformance' },
			{ name: 'Top Scores', slug: 'topScores' },
			{ name: 'Points Log', slug: 'pointsLog' }
		];
	},
	activeTab: function () {
		// If you don't provide an active tab, the first one is selected by default.
		// See the `advanced use` section below to learn about dynamic tabs.
		return Session.get('activeTab'); // Returns "people", "places", or "things".
	},
	isShowing: function (tab) {
		return Session.equals('showingTab', tab);
	}
});


//default state when the template is created
Template.LeaderboardMainTabs.onCreated = function () {
	Session.setDefault('showingTab', 'search');
};


Template.LeaderboardMainTabs.events({
	'click .divCell-like': function (event, instance) {
		$(event.currentTarget).prop('src', 'Like-07.png');
	}

});


function sortArrOfObjectsByParam(arrToSort, strObjParamToSortBy /* string */, sortAscending /* bool(optional, defaults to true) */) {
	if (sortAscending == undefined) sortAscending = true;  // default to true

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


