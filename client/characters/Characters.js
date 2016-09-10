import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/Characters.js';

//TODO: Delete this test method later
Template.Characters.events({
	'click h1': () => {

	}
})

users = [{
		nb: "nb00001",
		name:"kroilon",
		avatar: "foto",
		score:[{
				date: new Date(),
				challenge: "kahoot",
				category: "HP",
				points: 20
			}],
		profile: "instructor",
		skills:[{
				people: 8,
				communication: 6,
				manegemment:7,
				problemSolving: 7,
				android:2,
				arduino:0
			}]
	},
	{
			nb: "nb00001",
			name:"kroilonee",
			avatar: "foto",
			score:[{
					date: new Date(),
					challenge: "kahoot",
					category: "HP",
					points: 20
				}],
			profile: "instructor",
			skills:[{
					people: 8,
					communication: 6,
					manegemment:7,
					problemSolving: 7,
					android:2,
					arduino:0
				}]
		}];

Template.Characters.helpers({
	characters() {
		debugger;
		console.log(Meteor.call("logToConsole"));
		return users;
	}
});
