import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

import { ACADEMIES_ACTIVE_ELEMENT_KEY } from '/client/management/academy/TabAcademy.js';

Template.registerHelper('getScore', function(academy) {
  
  let users = academy.users;
  users.splice(0, 3);
  let total_users = users.length;
  let total_points = 0;

  $.each(users, function (index_users, value_users) {

      let user_points = 0;

      if (value_users.score != undefined) {
          $.each(value_users.score, function (index_score, value_score) {
              user_points += value_score.points;
          });
      }

      value_users.totalScore = user_points;
      total_points += user_points;

  });

  let average_points = (total_points / total_users - 1);
  //console.log("average_points: " + average_points);

  let teamScore = academy.teamScore;
  let total_team_score = teamScore.length;
  let total_team_points = 0;

  $.each(teamScore, function(index_scores, value_scores) {

      if (value_scores.points != undefined) {
          total_team_points += value_scores.points;
  }

  });

  //let average_team_points = (total_team_points / total_team_score);
  //console.log("average_team_points: " + average_team_points);

  return parseInt(average_points + total_team_points);

});

Template.registerHelper('getPlayers', function(academy) {
  
    var users = academy.users;
    var total_users = 0;

    $.each(users, function(index_users, value_users) {

        if ((value_users.profile !== undefined) && (value_users.profile !== "Admin")) {
           total_users = total_users + 1;
        }
    });   

    console.log("total_users: " + total_users);
    return total_users;
});


Template.TableAcademy.helpers({
  
  academies() {
    var academies = Academy.find({}).fetch();
    return academies;
  },

  latestAcademy: function (academy) {

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    if (academy._id === latestAcademy._id) {
      return true;
    }
    else {
      return false;
    } 

  },

  totalPlayers: function (data) {
    if (data.length === 0) {
      return 0;
    } else {
      return data.length;
    }
  },

  isActive: function (flag) {
      return flag !== true
  }

});

const TABLE_ACADEMIES_ACTIVE_ELEMENT_KEY = "TableAcademies";
const NEW_ACADEMIES_ACTIVE_ELEMENT_KEY = "NewAcademy";

Template.TableAcademy.events({ 

  'click #addAcademy' (event){    
    event.preventDefault();  
    Session.set(ACADEMIES_ACTIVE_ELEMENT_KEY, NEW_ACADEMIES_ACTIVE_ELEMENT_KEY);
    //Modal.show('insertAcademyModal', this);
  },  

  'click #deleteAcademy' (event){    
    event.preventDefault();  

    if (Academy.find().count() === 1) {
      Modal.show('deleteOnlyAcademyModal', this);
    } else {
      Modal.show('deleteAcademyModal', this);
    }
  },

  'click #activateAcademy' (event){    
    event.preventDefault();  
    Modal.show('activateAcademyModal', this);
  }

});