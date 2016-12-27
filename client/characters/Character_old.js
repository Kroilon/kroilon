import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';


Template.Character.helpers({
	avatar() {

    let nb = FlowRouter.getParam("nb");

		let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		let user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

		return user[0].avatar;
	},
  name() {
    let nb = FlowRouter.getParam("nb");

		let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		let user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

		return user[0].name;
  },
  nb() {
    let nb = FlowRouter.getParam("nb");

		let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		let user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

		return user[0].nb;
  },
  profile() {
    let nb = FlowRouter.getParam("nb");

		let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		let user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

		return user[0].profile;
  },
  mbti() {
    let nb = FlowRouter.getParam("nb");

		let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		let user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

		return user[0].mbti;
  },
  skills() {
    let nb = FlowRouter.getParam("nb");

		let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		let user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

		return user[0].skills;
  },
  score()
  {
    let nb = FlowRouter.getParam("nb");

		let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

		let user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

    let user_points = 0;

			$.each(user[0].score, function(index, value){

				user_points += value.points;

			});

			return user_points;
  }
});
