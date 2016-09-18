import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';


Template.Character.helpers({
	avatar() {

    var nb = FlowRouter.getParam("nb");

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

		return user[0].avatar;
	},
  name() {
    var nb = FlowRouter.getParam("nb");

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

		return user[0].name;
  },
  nb() {
    var nb = FlowRouter.getParam("nb");

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

		return user[0].nb;
  },
  profile() {
    var nb = FlowRouter.getParam("nb");

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

		return user[0].profile;
  },
  mbti() {
    var nb = FlowRouter.getParam("nb");

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

		return user[0].mbti;
  },
  skills() {
    var nb = FlowRouter.getParam("nb");

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

		return user[0].skills;
  },
  score()
  {
    var nb = FlowRouter.getParam("nb");

		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

    var user_points = 0;

			$.each(user[0].score, function(index, value){

				user_points += value.points;

			});

			return user_points;
  }
});
