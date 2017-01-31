import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

import { getUniqueValuesOfKey } from '../PerformanceGlobalHelpers.js';
import { getUserByNB } from '../PerformanceGlobalHelpers.js';

import { DYNAMIC_ACTIVE_ELEMENT_KEY,
         CURRENT_PLAYER_NB    
     } from '/client/performance/Leaderboard/Leaderboard.js';


Template.TeamPerformance.helpers({
    TeamPerformanceChart() {
       
    let academy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });

    let academyScore = academy.teamScore; 

    let totalScore = [];

    var groupedDates = _.groupBy(academyScore, 'date');

    //console.log(groupedDates);

    _.each(_.values(groupedDates), function(dates) {
        //console.log({Date: dates[0], Total: dates.length});
        //console.log(dates);
        let dayScore = 0;

        var arrayLength = dates.length;

        for (var i = 0; i < arrayLength; i++) {
            //console.log({Date: dates[i], Points: dates[i].points});
            dayScore = dayScore + dates[i].points
            //console.log("dayScore: " + dayScore);
        }

        totalScore.push(dayScore);

    });

    return {
      colors: ['#de4f4f', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
        '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
      title: {
        text: "Team Points"
      },
      xAxis: {
        crosshair: {
          color: '#ffcccc'
        },
        categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
          'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
          'Friday']
      },
      yAxis: {
        title: {
          text: 'Points'
        },
        labels: {
          formatter: function () {
            return this.value;
          }
        },
        min: 0
      },
      tooltip: {
        crosshair: {
          color: '#de4f4f'
        },
        shared: true,
        valueSuffix: ' Points'
      },
      plotOptions: {
        area: {
          fillOpacity: 0.5
        }
      },
      credits: {
        enabled: false
      },
      legend: {
      },
      series: [{
        showInLegend: false,
        name: "Team Score",
        data: totalScore,
        zIndex: 1,
        marker: {
          fillColor: 'white',
          lineWidth: 3,
          lineColor: '#de4f4f'
        }
      }]
    };
  },
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
                lineWidth: 0
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
    tapMyBackScore() {
        var nb = Session.get("loggedUser")[0].nb;
        var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
        var user = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });

        return user[0].counter;
    },
    TeamScore() {

        var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
        var users = latestAcademy.users;
        var total_users = users.length;
        var total_points = 0;

        $.each(users, function (index_users, value_users) {

            var user_points = 0;

            if (value_users.score != undefined) {
                $.each(value_users.score, function (index_score, value_score) {
                    user_points += value_score.points;
                });
            }

            value_users.totalScore = user_points;
            total_points += user_points;

        });

        var average_points = (total_points / total_users - 1);
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
    },


    tapSkillsPeople,

    tapSkillsCommunication,

    tapSkillsProblemSolving,

    tapSkillsManagement,

    tapSkillsAndroid,

    score() {
        var nb = Session.get("loggedUser")[0].nb
        var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
        var user = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });

        var user_points = 0;

        $.each(user[0].score, function (index, value) {
            user_points += value.points;
        });

        return user_points;
    },

    name() {
        var nb = Session.get("loggedUser")[0].nb
        var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
        var user = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });

        var name = user[0].name;

        return name;
    },
    myBadges() {
        var nb = Session.get("loggedUser")[0].nb
        var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
        var user = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });
        var badges = new Array();

        user[0].score.forEach(function (score) {
            if (score.type === "badge") {
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
    var nb = Session.get("loggedUser")[0].nb;
    var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
    var user = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });

    return user[0].skills[0].people;
}

function tapSkillsAndroid() {
    var nb = Session.get("loggedUser")[0].nb;
    var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
    var user = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });

    return user[0].skills[0].android;
}

function tapSkillsManagement() {
    var nb = Session.get("loggedUser")[0].nb;
    var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
    var user = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });

    return user[0].skills[0].management;
}

function tapSkillsProblemSolving() {
    var nb = Session.get("loggedUser")[0].nb;
    var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
    var user = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });

    return user[0].skills[0].problemSolving;
}

function tapSkillsCommunication() {
    var nb = Session.get("loggedUser")[0].nb;
    var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
    var user = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });

    return user[0].skills[0].communication;
}
