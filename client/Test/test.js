import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import '../pages/Test.html';

//console.log('aa');

Template.Test.helpers({
  users(){
	var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

	return latestAcademy.users;
  },

  rooms(){
	var chall = Challenges.find({}).fetch();
	var rooms = [];

	$.each(chall, function(index_chall,value_chall){
		$.each(value_chall.room,function(index_room,value_room){
			if ($.inArray(value_room.name, rooms) == -1)
			{
				rooms.push(value_room.name);
			}
		});
	});

	return rooms;
  },

  challs(){
	var latestChalls = Challenges.findOne({}, {sort: {date: -1, limit: 1}});

	return latestChalls.name;
  }


});


Template.Test.events({
  'click .kroilonTest'(event) {
    // Prevent default browser form submit
    event.preventDefault();

 	var myTextField = document.getElementById('MainContent_lblNomePoints');

    // Get value from form element
    //const target = event.target;
    //const text = target.text.value;

    // Insert a task into the collection
    //Tasks.insert({
      //text,
      //createdAt: new Date(), // current time
    //});

	console.log(myTextField);
 	//console.log('a');
    // Clear form
    //target.text.value = '';
  },
});
