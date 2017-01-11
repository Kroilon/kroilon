import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

import { BADGES_ACTIVE_ELEMENT_KEY, ID_BADGE_ACTIVE_ELEMENT_KEY } from '/client/management/badges/TabBadges.js';

Template.TableBadgeInfo.helpers({

  academyBadges() {  
    var badges = Badges.find({}).fetch();
    return badges;
    
  }

});

const TABLE_BADGES_ACTIVE_TEMPLATE_NAME = "TableBadgeInfo";
const NEW_BADGES_ACTIVE_TEMPLATE_NAME = "NewBadgeInfo";
const EDIT_BADGES_ACTIVE_TEMPLATE_NAME = "EditBadgeInfo";

Template.TableBadgeInfo.events({   

  //Act when the personal performance board icon is clicked
  "click #addBadge" (event){
      event.preventDefault();
      Session.set(BADGES_ACTIVE_ELEMENT_KEY, NEW_BADGES_ACTIVE_TEMPLATE_NAME);
  },

  //Act when the personal performance graph icon is clicked
  "click #editBadge" (event){
      event.preventDefault();
      Session.set(ID_BADGE_ACTIVE_ELEMENT_KEY, _getUserNbFromLink($(event.target).parent()));
      Session.set(BADGES_ACTIVE_ELEMENT_KEY, EDIT_BADGES_ACTIVE_TEMPLATE_NAME);

  },

  'click #viewBadge' (event){
    event.preventDefault();
    Modal.show('viewBadgeModal', this);
    
  },

  'click #deleteBadge' (event){
    event.preventDefault();
    Modal.show('deleteBadgeModal', this); 
  } 

});

function _getUserNbFromLink(target){
    return target.attr('href').slice(1);
}