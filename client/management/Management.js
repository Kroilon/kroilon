import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

ReactiveTabs.createInterface({
  template: 'basicTabs',
  onChange: function (slug, template) {
    // This callback runs every time a tab changes.
    // The `template` instance is unique per {{#basicTabs}} block.
    console.log('[tabs] Tab has changed! Current tab:', slug);
    console.log('[tabs] Template instance calling onChange:', template);
  }
});

Template.Management.helpers({
    rooms(){
      return Rooms.find({}).fetch();
    },
    challs(){
      var latestChalls = Challenges.find();

      return latestChalls;
    },
    players(){
      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

      return latestAcademy.users;
    },
    user(nb) {

      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

      var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

      return user[0];
    },
    isLoggedInAsAdmin() {
    	return Session.get("loggedUser")!='' && Session.get("loggedUser")!=null && Session.get("loggedUser") != undefined && Session.get("loggedUser")[0].profile == "Admin";
    },
    badges(){
      var badges = Badges.find({}).fetch();

      return badges;
    },
    tabs: function () {
    // Every tab object MUST have a name and a slug!
    return [
        { name: 'Academy', slug: 'academy' },
        // { name: 'Add Character', slug: 'characterAdd' },
        { name: 'Players', slug: 'players' },
        { name: 'Skills', slug: 'skills' },
        { name: 'Objectives', slug: 'objectives' },
        { name: 'Badges', slug: 'badges' },
        { name: 'Rooms', slug: 'rooms' },
        { name: 'Challenges', slug: 'challenges' },
        { name: 'Activity', slug: 'activity' },  
        //{ name: 'Rules', slug: 'rules' },  
        { name: 'Message', slug: 'message' },
        { name: 'Segredos', slug: 'secrets' }
      ];
    },
    activeTab: function () {
        // If you don't provide an active tab, the first one is selected by default.
        // See the `advanced use` section below to learn about dynamic tabs.
        return Session.get('activeTab'); // Returns "people", "places", or "things".
    }
});

Template.Management.events({
  'click #insert' (event)  {

    var playerId = $("#player").val();

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var user = $.grep(latestAcademy.users, function(e){ return e.nb == playerId; });

    var activityId = $("#activity").val();
    var room = $("#room").val();
    var pointType = $("#pointType").val();
    var points = parseInt($("#points").val());

    var score = {
      challenge : activityId,
      category: pointType,
      points: points,
      date: new Date()
    };

    alert("Score updated!");
    event.preventDefault();
    Meteor.call("updateScore",latestAcademy._id,playerId,score);

  }

});
