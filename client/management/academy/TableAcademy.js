import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

Template.TableAcademy.helpers({
  
  academies() {
    var academies = Academy.find({}).fetch();
    return academies;
  },

  totalPlayers: function (data) {
    if (data.length === 0) {
      return 0;
    } else {
      return data.length;
    }
  },
  academyPlayers() {

    var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
    var users = latestAcademy.users;
    var total_users = 0;

    $.each(users, function(index_users, value_users) {

        if ((value_users.profile !== undefined) && (value_users.profile !== "Admin")) {
           total_users = total_users + 1;
        }
    });   

    console.log("total_users: " + total_users); 
    return total_users;
  },
  isActive: function (flag) {
      return flag !== true
  },
  teamScore() {
    var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
    var users = latestAcademy.users;
    var total_users = users.length;
    var total_points = 0;

    $.each(users, function(index_users, value_users) {

        var user_points = 0;

        if (value_users.score != undefined) {
            $.each(value_users.score, function(index_score, value_score) {
                user_points += value_score.points;
            });
        }

        value_users.totalScore = user_points;
        total_points += user_points;
    });

    var average_points = (total_points / total_users - 1);
    //console.log("team_points: " + average_points); 
    return parseInt(average_points);
  }

});


Template.TableAcademy.events({ 

  'click #addAcademy' (event){    
    event.preventDefault();  
    Modal.show('insertAcademyModal', this);
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

    alert('Academy activated');

  }

});