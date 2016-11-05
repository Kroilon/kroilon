import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

function getUniqueValuesOfKey(array, key) {
    return array.reduce(function (carry, item) {
        if (item[key] && !~carry.indexOf(item[key])) carry.push(item[key]);
        return carry;
    }, []);
}


Template.Leaderboard.playerChart = function () {

    var userSession = Session.get('loggedUser');
    var currentUser = userSession[0];

    var scores = currentUser.score;

    var weekPoints = getUniqueValuesOfKey(scores, 'points');


    return {
        colors: ['#de4f4f', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
            '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        title: {
            text: "Player Points"
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
            name: currentUser.name,
            data: weekPoints,
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 3,
                lineColor: '#de4f4f'
            }
        }]
    };
};

Template.Leaderboard.helpers({
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
            })
            sum = 0;
        });
        return result;
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
    setTab(value) {
        Session.set('activeTab', value);
    }

});

Template.Leaderboard.events({


});

/*
Template.Leaderboard.playerChart = function() {
    return {
        colors: ['#de4f4f', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
            '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        chart: {
            type: 'area',
            spacingBottom: 30
        },
        title: {
            text: null
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: ['Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira',
                'Sábado', 'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 
                'Sexta-feira']
        },
        yAxis: {
            title: {
                text: 'Points'
            },
            labels: {
                formatter: function () {
                    return this.value;
                }
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.series.name + '</b><br/>' +
                    this.x + ': ' + this.y;
            }
        },
        plotOptions: {
            area: {
                fillOpacity: 0.5
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            showInLegend: false,
            name: 'Player',
            data: [50, 400, 0, 50, 150, 0, 0, 600, 672, 0, 150, 1250]
        }]
    };
};
*/