import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

import { getUserByNB, getUniqueValuesOfKey } from '../../PerformanceGlobalHelpers.js';


import {
    DYNAMIC_ACTIVE_ELEMENT_KEY,
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

        let teamScore = latestAcademy.teamScore;
        let total_team_score = teamScore.length;
        let total_team_points = 0;

        $.each(teamScore, function(index_scores, value_scores) {

            if (value_scores.points != undefined) {
                total_team_points += value_scores.points;
        }

        });

        let average_team_points = (total_team_points / total_team_score);
        //console.log("average_team_points: " + average_team_points);

        return parseInt(average_points + total_team_points);

    },

    avatar() {
        let nb = Session.get(CURRENT_PLAYER_NB);
        let user = getUserByNB(nb);
        return user.avatar;
    },

    name() {
        let nb = Session.get(CURRENT_PLAYER_NB);
        let user = getUserByNB(nb);
        return user.name;
    },
    score() {
        let nb = Session.get(CURRENT_PLAYER_NB);
        let user = getUserByNB(nb);
        return user.score
            .map((elem) => elem.points)
            .reduce((a, b) => a + b, 0);

    },
    tapMyBackScore() {
        let nb = Session.get(CURRENT_PLAYER_NB);
        let user = getUserByNB(nb);
        return user.counter;

    },
    myBadges() {
        let nb = Session.get(CURRENT_PLAYER_NB);
        let user = getUserByNB(nb);
        var badges = new Array();

        user.score.forEach(function (score) {
            if (score.countType === "BADGE") {
                var badgeName = score.name;
                var badge = Badges.find({ "name": badgeName }).fetch();

                if (badge !== undefined && badge.name !== "") {
                    if (badges.length > 0) {
                        var check = false;
                        badges.forEach(function (n) {
                            if (n.name === badge[0].name) {
                                var count = parseInt(n.count);
                                count++;
                                n.count = count;
                                check = true;
                            }
                        });

                        if (!check) {
                            var newBadge = { 'name': badge[0].name, 'image': badge[0].image, 'count': 1 };
                            badges.push(newBadge);
                        }

                    } else {
                        var newBadge = { 'name': badge[0].name, 'image': badge[0].image, 'count': 1 };
                        badges.push(newBadge);
                    }
                }
            }
        });
        return badges;
    }
});


/*
Helpers came outside in order to be used inside other configurations
like "playerSkillsChart".
 */
function tapSkillsPeople() {
    let nb = Session.get(CURRENT_PLAYER_NB);
    let user = getUserByNB(nb);

    return user.skills[0].people;
}

function tapSkillsAndroid() {
    let nb = Session.get(CURRENT_PLAYER_NB);
    let user = getUserByNB(nb);

    return user.skills[0].android;
}

function tapSkillsManagement() {
    let nb = Session.get(CURRENT_PLAYER_NB);
    let user = getUserByNB(nb);

    return user.skills[0].management;
}

function tapSkillsProblemSolving() {
    let nb = Session.get(CURRENT_PLAYER_NB);
    let user = getUserByNB(nb);

    return user.skills[0].problemSolving;
}

function tapSkillsCommunication() {
    let nb = Session.get(CURRENT_PLAYER_NB);
    let user = getUserByNB(nb);

    return user.skills[0].communication;
}