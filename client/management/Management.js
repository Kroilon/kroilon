import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';

Template.Management.helpers({
  add(){

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
var latestChalls = Challenges.find();

return latestChalls;
},
players(){
var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

return latestAcademy.users;
},
user(nb) {

  var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

  var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

  return user[0];
}
});

Template.Management.events({
  'click #insert' (event)  {



    var playerId = $("#player").val();

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var user = $.grep(latestAcademy.users, function(e){ return e.nb == playerId; });

    var t = Academy.update(playerId, {$set: {name: "teste"}});
    console.log(t);
    return;

    var activityId = $("#activity").val();
    var room = $("#room").val();
    var pointType = $("#pointType").val();
    var points = $("#points").val();


    var request = {
      playerId : playerId,
      activityId : activityId,
      room: room,
      pointType: pointType,
      points: points
    };

    var test = Academy.insert(request);

    console.log(test);

  }
});
