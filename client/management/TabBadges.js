import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.TabBadges.events({
  'click #insertBadge' (event) {

    var badgeName = $("#badgeName").val();
    var badgePoints = $("#badgePoints").val();

    var data =
    {
      name: badgeName,
      points: badgePoints
    };

    alert("Badge inserted!");
    event.preventDefault();
    Meteor.call("insertBadge", data);
  },
  'click #deleteBadge' (event) {

    var badgeName = $("#badgeName").val();

    alert("Badge deleted!");
    event.preventDefault();
    Meteor.call("deleteBadge", badgeName);
  }
  
});
