import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

import { BADGES_ACTIVE_ELEMENT_KEY, ID_BADGE_ACTIVE_ELEMENT_KEY } from '/client/management/badges/TabBadges.js';

Template.EditBadgeInfo.helpers({
    pointTypes: function () {
      return [
          { name: 'XP', value: 'Experience Points' },
          { name: 'KP', value: 'Knowledge Points' },
          { name: 'HP', value: 'Health Points' },
          { name: 'TP', value: 'Team Points' },
          { name: 'NP', value: 'No Points' }
        ];
    },

    academyBadge() {
        let badgeId = Session.get(ID_BADGE_ACTIVE_ELEMENT_KEY).trim();
        //console.log("BADGE ID: " + badgeId);
        let badge = Badges.find({ "name": badgeId }).fetch();
        //console.log("BADGE NAME: " + badge[0].name);
        return badge;
    }

});

const TABLE_BADGES_ACTIVE_TEMPLATE_NAME = "TableBadgeInfo";
const NEW_BADGES_ACTIVE_TEMPLATE_NAME = "NewBadgeInfo";
const EDIT_BADGES_ACTIVE_TEMPLATE_NAME = "EditBadgeInfo";

Template.EditBadgeInfo.events({
  'submit form' (event) {

    event.preventDefault();

    var badgeData = {};

    //let badgeAvatar = $("editBadgeAvatar").val();
    var badgeType = $("#editBadgeType").val();
    var badgeName = $("#editBadgeName").val();
    var badgePoints = $("#editBadgePoints").val();
    var badgePointsType = $("#editPointsType").val();
    var badgeDescription = $("#editBadgeDescription").val();

    // Convert business unit value
    switch (badgePointsType) {
        case "Experience Points":
            badgePointsType = "XP";
            break;
        case "Knowledge Points":
            badgePointsType = "KP";
            break;
        case "Health Points":
            badgePointsType = "HP";
            break;
        case "Team Points":
            badgePointsType = "TP";
            break;
        case "No Points":
            badgePointsType = "NP";
            break;
    } 

    var badgeData =
    {      
      name: badgeName,
      points: badgePoints,
      pointsType: badgePointsType,
      type: badgeType,
      description: badgeDescription,
      date: new Date()
    };

    let badgeId = Session.get(ID_BADGE_ACTIVE_ELEMENT_KEY).trim();
    let badge = Badges.find({ "name": badgeId }).fetch();

    //Modal.show('badgeInsertModal', this);
    Meteor.call("updateAcademyBadge", badge[0], badgeData, function(error, result) {
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
