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
        users.splice(0, 1);

        var result = [];
        var sum = 0;

        $.each(users, function (index, user) {
            $.each(user.score, function (index, score) {
                sum += score.points;
            });
            result.push({
                user: {
                    nb: user.nb,
                    name: user.name
                },
                totalScore: sum
            });
            sum = 0;
        });
        return result;
    }
});



Template.Leaderboard.events({

    //Act when the personal performance board icon is clicked
    "click .profile_dashboard": (event) => {
        event.preventDefault();

        Session.set(DYNAMIC_ACTIVE_ELEMENT_KEY, "PlayerDashboard");

        let img = $(event.target);
        let anchor = img.parent();
        Session.set(CURRENT_PLAYER_NB, _getUserNbFromLink(anchor));
    },

    //Act when the personal performance graph icon is clicked
    "click .personal_performance": (event) => {
        event.preventDefault();

        Session.set(DYNAMIC_ACTIVE_ELEMENT_KEY, "PlayerPerformance");
        Session.set(CURRENT_PLAYER_NB, _getUserNbFromLink($(event.target).parent()));
    },

    //go back to the start - the main board
    "click .lead_into_leaderboard": (event) => {
        event.preventDefault();

        Session.set(DYNAMIC_ACTIVE_ELEMENT_KEY, "BoardTable");
        Session.set(CURRENT_PLAYER_NB, Session.get("loggedUser")[0].nb);
    }
});


function _getUserNbFromLink(target){
    return target.attr('href').slice(1);
}

