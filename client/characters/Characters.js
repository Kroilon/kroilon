import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

var data = {
	name: "Kroilon Test",
	date:new Date(),
	users:[{
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
		}]
};

//Academy.insert(data);

//console.log(Academy.find().fetch());

Template.Characters.events({
	'click h1': () => {

	}
})

Template.Characters.helpers({
	characters() {
		var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
		
		console.log(latestAcademy.users);

		return latestAcademy.users;
	}
});
