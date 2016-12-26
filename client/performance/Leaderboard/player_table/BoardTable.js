import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

import { DYNAMIC_ACTIVE_ELEMENT_KEY,
         CURRENT_PLAYER_NB    
     } from '/client/performance/Leaderboard/Leaderboard.js';


Template.BoardTable.helpers({
    users() {

        var latestAcademy = Academy.findOne({}, {
            sort: {
                date: -1,
                limit: 1
            }
        });
        var users = latestAcademy.users;
        users.splice(0, 3);

        var result = [];
        var sum = 0;

        $.each(users, function (index, user) {
            $.each(user.score, function (index, score) {
                sum += score.points;
            });
            result.push({
                user: {
                    nb: user.nb,
                    name: user.name,
                    counter: user.counter,
                    voted: user.voted
                },
                totalScore: sum
            });
            sum = 0;
        });
        return result;
    },
    isLoggedInAsAdmin() {
        return Session.get("loggedUser")!='' && Session.get("loggedUser")!=null && Session.get("loggedUser") != undefined && Session.get("loggedUser")[0].profile == "Admin";
    },
    hasVoted: function () {        
        let nb = Session.get("loggedUser")[0].nb;
        let user = getUserByNB(nb);

        return user.voted !== "Nobody"
    },
    hasVotedFor: function (player) {        
        let nb = Session.get("loggedUser")[0].nb;
        let user = getUserByNB(nb);
        
        return user.voted !== player;
    }
});

const PLAYER_DASHBOARD_ACTIVE_TEMPLATE_NAME = "PlayerDashboard";
const PLAYER_PERFORMANCE_ACTIVE_TEMPLATE_NAME = "PlayerPerformance";
const PLAYERS_TABLE_ACTIVE_TEMPLATE_NAME = "BoardTable";


Template.Leaderboard.events({

    //Act when the personal performance board icon is clicked
    "click .profile_dashboard": (event) => {
        event.preventDefault();

        Session.set(DYNAMIC_ACTIVE_ELEMENT_KEY, PLAYER_DASHBOARD_ACTIVE_TEMPLATE_NAME);

        let img = $(event.target);
        let anchor = img.parent();
        Session.set(CURRENT_PLAYER_NB, _getUserNbFromLink(anchor));
    },

    //Act when the personal performance graph icon is clicked
    "click .personal_performance": (event) => {
        event.preventDefault();

        Session.set(DYNAMIC_ACTIVE_ELEMENT_KEY, PLAYER_PERFORMANCE_ACTIVE_TEMPLATE_NAME);
        Session.set(CURRENT_PLAYER_NB, _getUserNbFromLink($(event.target).parent()));
    },

    //go back to the start - the main board
    "click .lead_into_leaderboard": (event) => {
        event.preventDefault();

        Session.set(DYNAMIC_ACTIVE_ELEMENT_KEY, PLAYERS_TABLE_ACTIVE_TEMPLATE_NAME);
        Session.set(CURRENT_PLAYER_NB, Session.get("loggedUser")[0].nb);
    },

    'click #tapMyBack' (event){
        event.preventDefault();

        let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
        let nb = Session.get("loggedUser")[0].nb;
        let user = getUserByNB(nb);
        console.log("Logged NB: " + user.nb);
        let votedForNb = this.user.nb;
        console.log("Voted for NB: " + votedForNb);
        
        Meteor.call("updateUserThatVoted", latestAcademy, user, votedForNb, function(error, result) {
          if (error) {
            alert(error);
          } 
        }); 
        
        
        Meteor.call("updateVotedCounter", latestAcademy, votedForNb, function(error, result) {
          if (error) {
            alert(error);
          } 
        });
        
    }

});

function _getUserNbFromLink(target){
    return target.attr('href').slice(1);
}

function getUserByNB(nb) {
  let latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
  let users = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });
  return users[0];
}

