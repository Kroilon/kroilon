import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.MyProfile.playerSkillsChart = function() {
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
            size: '80%'
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
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        credits: {
		    enabled: false
		},

        series: [{
        	showInLegend: false,
            name: 'Skills',
            data: [5, 9, 6, 9, 2],
            pointPlacement: 'on'
        }]
    };
};



Template.MyProfile.helpers({

    tapMyBackScore()
    {
        var nb = Session.get("loggedUser")[0].nb;
        var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
        var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

        return user[0].counter;
    },

    tapSkillsPeople(){
        var nb = Session.get("loggedUser")[0].nb;
        console.log("MEULOG " + nb)
         var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
        var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

        return user[0].skills[0].people;
    },

    tapSkillsCommunication(){
         var nb = Session.get("loggedUser")[0].nb;
         var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
        var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

        return user[0].skills[0].communication;
    },
    
    tapSkillsProblemSolving(){
         var nb = Session.get("loggedUser")[0].nb;
         var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
        var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

        return user[0].skills[0].problemSolving;
    },
    
    tapSkillsManagement(){
         var nb = Session.get("loggedUser")[0].nb;
         var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
        var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

        return user[0].skills[0].management;
    },
    
    tapSkillsAndroid(){
         var nb = Session.get("loggedUser")[0].nb;
         var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
        var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

        return user[0].skills[0].android;
    }

});

Template.MyProfile.events({

  
});
