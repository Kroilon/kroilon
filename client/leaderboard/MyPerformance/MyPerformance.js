import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';


Template.MyPerformance.playerChart = function() {
    return {
    	colors: ['#de4f4f', '#f7a35c', '#90ee7e', '#7798BF', '#aaeeee', '#ff0066', '#eeaaee',
      		'#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
        title: {
            text: null
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
            name: 'Player',
            data: [
                50, 400, 0, 50, 150, 0, 0, 600, 672, 0, 150, 1250
            ],
            zIndex: 1,
            marker: {
                fillColor: 'white',
                lineWidth: 3,
                lineColor: '#de4f4f'
            }
        }]
    };
};

Template.MyPerformance.helpers({


});

Template.MyPerformance.events({

  
});

/*
Template.MyPerformance.playerChart = function() {
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