import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

console.log(Academy.find().fetch());

//TODO: Delete this test method later
Template.Characters.events({
	'click h1': () => {

	}
})

Template.Characters.helpers({
	characters() {
		return "";
	}
});
