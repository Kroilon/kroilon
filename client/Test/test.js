import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import '../pages/Test.html';

//console.log('aa');
 
Template.Test.helpers({
  tasks() {
  	console.log('oi');
    return console.log(Academy.find({}).fetch());
  },

  users(){
	var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

	console.log(latestAcademy.users);

	return latestAcademy.users;
  },

  rooms(){
	var chall = Challenges.find();
	var rooms = [];

	console.log("TESTE");

	console.log(chall);

	$.each(chall, function(index_chall,value_chall){
		$.each(value_chall.rooms,function(index_room,value_room){
			if ($.inArray(value_room.name, rooms) == -1)
			{
				rooms.push(value_room.name);
			}
		});
	});

	console.log(rooms);

	return rooms;
  },

  challs(){
	var latestChalls = Challenges.findOne({}, {sort: {date: -1, limit: 1}});

	console.log(latestChalls.name);

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