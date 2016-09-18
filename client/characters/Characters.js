import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

var ItemsPerPage = 1;

Template.Characters.events({
	'click h1': () => {
		var page = FlowRouter.getParam("page");
		console.log(page);
	}
})

Template.Characters.helpers({
	characters() {
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		return latestAcademy.users;
	},
	score(nb) {

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });
		var user_points = 0;

		$.each(user[0].score, function(index, value){
			user_points += value.points;
		});

		return user_points;
	},
	isAdmin: function (name) {
	    return name !== "Admin"
	}
}); 

