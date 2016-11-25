import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

//HELPERS
Template.PlayerPerformance.helpers({
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
  PlayerPerformanceChart() {
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
  }
});