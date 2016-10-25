import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';



Template.MyProfile.helpers({

});

Template.MyProfile.events({

  
});


var Slices = new Meteor.Collection(null);
Session.setDefault('pieChartSort','none');
Session.setDefault('pieChartSortModifier',undefined);

if(Slices.find({}).count() === 0){
	for(i = 0; i < 5; i++)
		Slices.insert({
			value:Math.floor(Math.random() * 100)
		});
}

Template.MyProfile.rendered = function(){
	//Width and height
	var w = 300;
	var h = 300;

	var outerRadius = w / 2;
	var innerRadius = 0;
	var arc = d3.svg.arc()
					.innerRadius(innerRadius)
					.outerRadius(outerRadius);
	
	var pie = d3.layout.pie()
		.sort(null)
		.value(function(d) {
			return d.value;
		});
	
	//Easy colors accessible via a 10-step ordinal scale
	var color = d3.scale.category10();

	//Create SVG element
	var svg = d3.select("#playerSkillsChart")
				.attr("width", w)
				.attr("height", h);
	
	var key = function(d){ 
		return d.data._id;
	};

	Deps.autorun(function(){
		var modifier = {fields:{value:1}};
		var sortModifier = Session.get('pieChartSortModifier');
		if(sortModifier && sortModifier.sort)
			modifier.sort = sortModifier.sort;
		
		var dataset = Slices.find({},modifier).fetch();
		
		var arcs = svg.selectAll("g.arc")
					  .data(pie(dataset), key);

		var newGroups = 
			arcs
				.enter()
				.append("g")
				.attr("class", "arc")
				.attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");
		
		//Draw arc paths
		newGroups
			.append("path")
			.attr("fill", function(d, i) {
				return color(i);
			})
			.attr("d", arc);
		
		//Labels
		newGroups
			.append("text")
			.attr("transform", function(d) {
				return "translate(" + arc.centroid(d) + ")";
			})
			.attr("text-anchor", "middle")
			.text(function(d) {
				return d.value;
			});

		arcs
			.transition()
			.select('path')
			.attrTween("d", function(d) {
				this._current = this._current || d;
				var interpolate = d3.interpolate(this._current, d);
				this._current = interpolate(0);
				return function(t) {
					return arc(interpolate(t));
				};
			});
		
		arcs
			.transition()
			.select('text')
			.attr("transform", function(d) {
				return "translate(" + arc.centroid(d) + ")";
			})
			.text(function(d) {
				return d.value;
			});

		arcs
			.exit()
	 		.remove();
	});
};