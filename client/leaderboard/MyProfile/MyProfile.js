import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.MyProfile.playerSkillsChart = function () {
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
};

Template.MyProfile.helpers({

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
        return parseInt(average_points);
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



Template.MyProfile.events({


});
