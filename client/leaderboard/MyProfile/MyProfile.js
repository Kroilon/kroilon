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

    tapMyBackScore(nb)
    {
        var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
        var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

        return user[0].counter;
    },

    myBadges() {
        var nb = Session.get("loggedUser")[0].nb;
        var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
        var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });
        var badges = new Array();

        user[0].score.forEach( function(score){
            if(score.type==="badge"){
                var badgeName = score.name;
                var badge = Badges.find({"name":badgeName}).fetch();
          
                if(badge !== undefined &&  badge.name !== "" ){
                    if(badges.length > 0){
                        var check = false;
                        badges.forEach(function(n) {
                            if(n.name === badge[0].name){
                                var count = parseInt(n.count);
                                count++;
                                n.count = count;
                                check = true;
                            }
                        });
                      
                      if(!check){
                        var newBadge = {'name':badge[0].name, 'image':badge[0].image, 'count':1};
                        badges.push(newBadge);
                      }
                    } else {
                      var newBadge = {'name':badge[0].name, 'image':badge[0].image, 'count':1};
                        badges.push(newBadge);
                    }
                }
            }        
        });
        return badges;
    }

});

Template.MyProfile.events({

  
});
