import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

import { ACTIVITIES_ACTIVE_ELEMENT_KEY, ID_ACTIVITY_ACTIVE_ELEMENT_KEY } from '/client/management/activities/TabActivity.js';

Template.registerHelper('formatDate', function(date) {
  return date.toDateString();
});

Template.TableActivityInfo.helpers({

  academyBadges() {  
    let badges = Badges.find({}).fetch();
    return badges;
    
  },

  academyChallenges() {  
    let challenges = Challenges.find({}).fetch();
    return challenges;
    
  },

  teamPoints() {

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var teamScore = latestAcademy.teamScore;
    var teamPoints = [];

    $.each(teamScore, function(idx_scores, val_scores) 
    {
        teamPoints.push({"player":"Team", "nb": "Team", "name":val_scores.name, "points":val_scores.points + " ", "date":val_scores.date});
      //  console.log(points_a);
      //  console.log(points[0]);
    });

    sortArrOfObjectsByParam(teamPoints, "date", false);
    return teamPoints;
  },

  playerPoints() {

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var players = latestAcademy.users;
    players.splice(0, 3);
    var points = [];
    $.each(players, function(idx_players, val_players)
    {
      var scores = players[idx_players].score;
      // console.log(players);
      // console.log(scores);
      if (scores != undefined)
      {
        $.each(scores, function(idx_scores, val_scores)
        {
          points.push({"player":val_players.name, "nb":val_players.nb, "type":val_scores.countType, "name":val_scores.name, "points":val_scores.points + " " + val_scores.pointsType, "date":val_scores.date});
        //  console.log(points_a);
        //  console.log(points[0]);
        });
      }     
    });

    //var nb = players[0].score;
    sortArrOfObjectsByParam(points, "date", false);
    return points;
  }

});

const TABLE_ACTIVITY_ACTIVE_TEMPLATE_NAME = "TableActivityInfo";
const NEW_ACTIVITY_ACTIVE_TEMPLATE_NAME = "NewActivityInfo";
const EDIT_ACTIVITY_ACTIVE_TEMPLATE_NAME = "EditActivityInfo";

Template.TableActivityInfo.events({   

  //Act when the personal performance board icon is clicked
  "click #addActivity" (event){
      event.preventDefault();
      Session.set(ACTIVITIES_ACTIVE_ELEMENT_KEY, NEW_ACTIVITY_ACTIVE_TEMPLATE_NAME);
  },

  /*
  //Act when the personal performance graph icon is clicked
  "click #editActivity" (event){
      event.preventDefault();
      Session.set(ID_ACTIVITY_ACTIVE_ELEMENT_KEY, _getUserNbFromLink($(event.target).parent()));
      Session.set(ACTIVITIES_ACTIVE_ELEMENT_KEY, EDIT_ACTIVITY_ACTIVE_TEMPLATE_NAME);

  },

  'click #viewActivity' (event){
    event.preventDefault();
    Modal.show('viewChallengeModal', this);
    
  },
  */

  'click #deleteActivity' (event){
    event.preventDefault();
    Modal.show('deleteActivityModal', this); 
  } 

});

function _getUserNbFromLink(target){
    return target.attr('href').slice(1);
}

function sortArrOfObjectsByParam(arrToSort, strObjParamToSortBy /* string */, sortAscending /* bool(optional, defaults to true) */) {
    if(sortAscending == undefined) sortAscending = true;  // default to true

    if(sortAscending) {
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