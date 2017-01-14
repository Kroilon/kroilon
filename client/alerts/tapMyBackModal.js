import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';

Template.tapMyBackModal.events({
  'click #tapBack': function(e) {

    e.preventDefault();

    let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    let nb = Session.get("loggedUser")[0].nb;
    let user = getUserByNB(nb);
    console.log("Logged NB: " + user.nb);
    let votedForNb = "" + this; 
    console.log("Voted for NB: " + votedForNb);
    
    Meteor.call("updateUserThatVoted", latestAcademy, user, votedForNb, function(error, result) {
      if (error) {
        alert(error);
      } 
    }); 
    
    
    Meteor.call("updateVotedCounter", latestAcademy, votedForNb, function(error, result) {
      if (error) {
        alert(error);
      } 
    });

    Modal.hide('tapMyBackModal');
  }
});


function getUserByNB(nb) {
  let latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
  let users = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });
  return users[0];
}
