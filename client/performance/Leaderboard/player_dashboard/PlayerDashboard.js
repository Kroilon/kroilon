import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

import { DYNAMIC_ACTIVE_ELEMENT_KEY,
         CURRENT_PLAYER_NB    
     } from '/client/performance/Leaderboard/Leaderboard.js';


Template.PlayerDashboard.helpers({
    playerSkillsChart() {
        return {
            colors: ['#de4f4f', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
                '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
            chart: {
                polar: true,
                type: 'line',

                //Edit chart margin
                margin: [0, 0, 0, 0],
                //Edit chart spacing
                spacingTop: 0,
                spacingBottom: 0,
                spacingLeft: 0,
                spacingRight: 0


            },

            title: {
                text: null,
                x: -80
            },

            pane: {
                size: '60%'
            },

            xAxis: {
                categories: ['People', 'Communication', 'Problem Solving', 'Management',
                    'Android'],
                tickmarkPlacement: 'on',
                lineWidth: 0
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                align: 'center',
                verticalAlign: 'top',
                y: 40,
                layout: 'vertical'
            },

            credits: {
                enabled: false
            },

            series: [{
                showInLegend: false,
                name: 'Skills',
                data: [
                    tapSkillsPeople(),
                    tapSkillsCommunication(),
                    tapSkillsProblemSolving(),
                    tapSkillsManagement(),
                    tapSkillsAndroid()
                ],
                pointPlacement: 'on',
                padding: 0
            }]
        };
    },
    tapSkillsPeople,

    tapSkillsCommunication,

    tapSkillsProblemSolving,

    tapSkillsManagement,

    tapSkillsAndroid,

    TeamScore() {
        let latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
        let users = latestAcademy.users;
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
        return parseInt(average_points);
    },

    name(){
      let user = _getUserByNb();
      return user.name;
    },
    score(){
      let user = _getUserByNb();
      console.dir(user)
      return user.score
        .map((elem) => elem.points)
        .reduce((a, b) =>  a + b, 0);

    }
});


/*
Helpers came outside in order to be used inside other configurations
like "playerSkillsChart".
 */

function _getUserByNb(){
    let nb = Session.get(CURRENT_PLAYER_NB);
    let latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
    return $.grep(latestAcademy.users, function (e) { return e.nb == nb; })[0];
}

function tapSkillsPeople() {
    let user = _getUserByNb();
    return user.skills[0].people;
}

function tapSkillsAndroid() {
    let user = _getUserByNb();
    return user.skills[0].android;
}

function tapSkillsManagement() {
    let user = _getUserByNb();
    return user.skills[0].management;
}

function tapSkillsProblemSolving() {
    let user = _getUserByNb();
    return user.skills[0].problemSolving;
}

function tapSkillsCommunication() {
    let user = _getUserByNb();
    return user.skills[0].communication;
}