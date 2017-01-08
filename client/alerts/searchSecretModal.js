import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

Template.searchSecretModal.helpers({
	playerWithSecret(){
    	let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    	let onlyPlayers = latestAcademy.users;
    	onlyPlayers.splice(0, 3);
    	return onlyPlayers;
    },

    allWithSecret(){
    	let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    	return latestAcademy.users;
    },

    undiscoveredSecrets() {
    	let secrets = Secrets.find({discovered: false}).fetch();
    	return secrets;
  	}

});

Template.searchSecretModal.events({  
  'click #checkSecret' (event){

    event.preventDefault();

    let player1 = $("#playerPointing").val();
    //console.log("player1: " + player1);
    let player2 = $("#playerPointed").val();
    //console.log("player2: " + player2);
    let secret1 = $("#secretPointed").val();
    //console.log("secret1: " + secret1);

    if (player2 === secret1) {
      //console.log("SECRET MATCH!!!");

      let user2 = getUserByNB(player2);

      if (user2.profile === "Player") { 
      	//console.log("Profile is PLAYER!");
      	// DEDUCT CONST HP points from player2
      }

      // ADD CONST HP points to player1

  	  // Discover secret
  	  let secretId = getSecretByNB(secret1);
  	  //console.log("secret1: " + secretId._id);
  	  Meteor.call('discoverSecret', secretId._id, function(error, result) {
	    if (error) {
	      alert(error);
	    } 
	  });

    } else {
      //console.log("NOP!!!");

      if (user2.profile === "Player") { 
      	//console.log("Profile is PLAYER!");
      	// ADD CONST HP points to player2
      }

      // DEDUCT CONST HP points from player1

    }

    // Hide modal
    Modal.hide('searchSecretModal');

    /*

    var data = {
      date: new Date(),
      nb: secretPlayerNB,
      name: secretPlayerName,
      description: secretValue,
      challenge: "Submit secret",
      discovered: 0
    }
	
	// CALL METEOR
	Meteor.call('activateAcademy', this._id, function(error, result) {
      if (error) {
        alert(error);
      }
    });
	
    */
  }

});

function getUserByNB(nb) {
  let latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
  let users = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });
  return users[0];
}

function getSecretByNB(nb) {
  let secrets = Secrets.find({}).fetch();
  let userSecret = $.grep(secrets, function (e) { return e.nb == nb; });
  return userSecret[0];
}

