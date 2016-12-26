import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

Template.Characters.helpers({
    user(nb) {

      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

      var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

      return user[0];
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
          }
        ]
      };
    },

});

