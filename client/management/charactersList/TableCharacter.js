import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';

Template.TableCharacter.helpers({
    user(nb) {

      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

      var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

      return user[0];
    },
    /*
    score(nb) {

      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
      var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });
      var user_points = 0;

      $.each(user[0].score, function(index, value){
        user_points += value.points;
      });

      return user_points;
    },
    */
    isAdmin: function (name) {
        return name !== "Admin"
    },
    academyPlayers: function () {

        var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
        var users = latestAcademy.users;
        users.splice(0, 3);
        return users;
    },
    tableSettings : function () {
      return {
        showFilter: false,
        rowsPerPage: 10,
        showNavigation: 'auto',
        showRowCount: true,
        rowsPerPage: 10,
        showNavigationRowsPerPage: true,
        showColumnToggles: true,
        fields: [
          {
            key: 'name',
            label: 'Name',
            headerClass: 'col-md-2',
            sortDirection: 'ascending',
            hidden: false
          },
          {
            key: 'skills.0.people',
            label: 'People',
            headerClass: 'col-md-2',
            sortDirection: 'descending',
            hidden: false
          },
          {
            key: 'skills.0.communication',
            label: 'Communication',
            headerClass: 'col-md-2',
            sortDirection: 'descending',
            hidden: false
          },
          {
            key: 'skills.0.problemSolving',
            label: 'Problem solving',
            headerClass: 'col-md-2',
            sortDirection: 'descending',
            hidden: false
          },
          {
            key: 'skills.0.management',
            label: 'Management',
            headerClass: 'col-md-2',
            sortDirection: 'descending',
            hidden: false
          },
          {
            key: 'skills.0.android',
            label: 'Android',
            headerClass: 'col-md-2',
            sortDirection: 'descending',
            hidden: false
          },          
          /*
          {
            key: 'score',
            label: 'Score',
            headerClass: 'col-md-2',
            fn: function (value, object, key) {

              var user_points = 0;
              $.each(value, function(index, value){
                user_points += value.points;
              }); 
              return user_points;
            },
            sortByValue : true,
            sortable: true,
            hidden: true
          },
          */
          {
            key: 'counter',
            label: 'Tap my Back',
            headerClass: 'col-md-2',
            sortDirection: 'descending',
            hidden: true
          },          
          {
            key: 'mbti',
            label: 'MBTI',
            headerClass: 'col-md-2',
            hidden: true
          },
          {
            key: 'businessUnit',
            label: 'Unit',
            headerClass: 'col-md-2',
            hidden: true
          },
          {
            key: 'dateOfBirth',
            label: 'Date of Birth',
            headerClass: 'col-md-2',
            hidden: true
          }
        ]
      };
    },

});




