import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

import { BADGES_ACTIVE_ELEMENT_KEY } from '/client/management/badges/TabBadges.js';

Template.NewBadgeInfo.helpers({
    pointTypes: function () {
    return [
        { name: 'XP', value: 'Experience Points' },
        { name: 'KP', value: 'Knowledge Points' },
        { name: 'HP', value: 'Health Points' },
        { name: 'TP', value: 'Team Points' },
        { name: 'NP', value: 'No Points' }
      ];
    },

    badgeType: function () {
      return [
        { name: 'Player', value: 'Player' },
        { name: 'Team', value: 'Team' }      
      ];
    }
});

const TABLE_BADGES_ACTIVE_TEMPLATE_NAME = "TableBadgeInfo";
const NEW_BADGES_ACTIVE_TEMPLATE_NAME = "NewBadgeInfo";
const EDIT_BADGES_ACTIVE_TEMPLATE_NAME = "EditBadgeInfo";

Template.NewBadgeInfo.events({
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
      name: badgeName,
      points: badgePoints,
      pointsType: badgePointsType,
      type: badgeType,
      description: badgeDescription,
      date: new Date()
    };

    //Modal.show('badgeInsertModal', this);
    Meteor.call("insertBadge", badgeData, function(error, result) {
      if (error) {
        alert(error);
      } 
    });
    $("#addBadge")[0].reset();     
    Session.set(BADGES_ACTIVE_ELEMENT_KEY, TABLE_BADGES_ACTIVE_TEMPLATE_NAME);

  },
  
  'click #nopBadge' (event){
    event.preventDefault();
    Session.set(BADGES_ACTIVE_ELEMENT_KEY, TABLE_BADGES_ACTIVE_TEMPLATE_NAME);
  }
  
});
