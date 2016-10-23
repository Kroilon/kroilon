import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.TabBadges.helpers({
    pointTypes: function () {
    return [
        { name: 'XP', value: 'Experience Points' },
        { name: 'KP', value: 'Knowledge Points' },
        { name: 'HP', value: 'Health Points' },
        { name: 'TP', value: 'Team Points' },
        { name: 'NP', value: 'No Points' }
      ];
    }
});

Template.TabBadges.events({
  'submit form' (event) {

    event.preventDefault();

    var badgeData = {};

    var badgeType = $("#badgeType").val();
    var badgeName = $("#badgeName").val();
    var badgePoints = $("#badgePoints").val();
    var badgePointsType = $("#pointsType").val();
    var badgeDescription = $("#badgeDescription").val();

    var badgeData =
    {
      type: badgeType,
      name: badgeName,
      points: badgePoints,
      pointsType: badgePointsType,
      description: badgeDescription,
      date: new Date()
    };

    Modal.show('badgeInsertModal', this);
    Meteor.call("insertBadge", badgeData);
    $("#addBadge")[0].reset();     
  },
  'click #deleteBadge' (event) {

    var badgeName = $("#badgeName").val();

    alert("Badge deleted!");
    Meteor.call("deleteBadge", badgeName);
  }
  
});
