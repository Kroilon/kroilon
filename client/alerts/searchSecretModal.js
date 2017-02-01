import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

Template.searchSecretModal.helpers({
	 
    basePoints: function () {
        return [
            { name: '75', value: '75' },
            { name: '100', value: '100' },
            { name: '125', value: '125' },
            { name: '150', value: '150' },
            { name: '175', value: '175' },
            { name: '200', value: '200' }
          ];
    },

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

    let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    let dataSecretDiscovered = {};
    let dataSecretInsert = {};
    let dataPlayerThatDiscovered = {};
    let dataSecretNotDiscovered = {};
    let dataPlayerThatNotDiscovered = {};

    let player1 = $("#playerPointing").val();
    //console.log("player1: " + player1);
    let player2 = $("#playerPointed").val();
    //console.log("player2: " + player2);
    let baseValue = $("#secretBasePoints").val();
    //console.log("secretBasePoints: " + baseValue);
    let basePoints = parseInt(baseValue);
    //console.log("basePoints: " + basePoints);

    let insertSecretPoints = basePoints * 4;

    if(document.getElementById('happyHour').checked) {
        //console.log("IT'S HAPPY HOUR!!!");
        basePoints = basePoints * 2;
        //console.log("basePoints: " + basePoints);
    } 
    /*
    else {
        console.log("NO HAPPY HOUR!!!");
    }
    */
    let secretDescription = $("#secretPointed").val();
    let playerSecret = Secrets.find({'description': secretDescription }).fetch();
    let secretNB = playerSecret[0].nb;
    //console.log("secretNB: " + secretNB);
    let user2 = getUserByNB(player2);

    if (player2 === secretNB) {
      //console.log("SECRET MATCH!!!");

      // DEDUCT HP points from player2
      if (user2.profile === "Player") {  
      	//console.log("Profile is PLAYER!");
        let minusBasePoints = (-basePoints) * 4;        
        //console.log("DEDUCT: minusBasePoints: " + minusBasePoints);

        let newDate = new Date();
        console.log("newDate: " + newDate);
        let newDateFormat = newDate.toString().substring(0,15);
        console.log("newDateFormat: " + newDateFormat);

        dataSecretInsert = 
        {
          date: newDateFormat,
          countType: "ACTIVITY",
          name: "Inserir segredo",
          points: 200,
          pointsType: "HP"
        };

        Meteor.call('updateScore', latestAcademy._id, user2.nb, dataSecretInsert, function(error, result) {
          if (error) {
            alert(error);
          } 
        });

        dataSecretDiscovered = 
        {
          date: newDateFormat,
          countType: "ACTIVITY",
          name: "Adivinhar segredo",
          points: minusBasePoints,
          pointsType: "HP"
        };
        
        Meteor.call('updateScore', latestAcademy._id, user2.nb, dataSecretDiscovered, function(error, result) {
          if (error) {
            alert(error);
          } 
        });

      }

      let user1 = getUserByNB(player1);
      let plusBasePoints = (basePoints) * 4; 
      // ADD HP points to player1

      let newDate = new Date();
      //console.log("newDate: " + newDate);
      let newDateFormat = newDate.toString().substring(0,15);
      //console.log("newDateFormat: " + newDateFormat);

      dataPlayerThatDiscovered = 
      {
        date: newDateFormat,
        countType: "ACTIVITY",
        name: "Adivinhar segredo",
        points: plusBasePoints,
        pointsType: "HP"
      };

      Meteor.call('updateScore', latestAcademy._id, user1.nb, dataPlayerThatDiscovered, function(error, result) {
        if (error) {
          alert(error);
        } 
      });

      //DISCOVER SECRET
      Meteor.call('discoverSecret', playerSecret[0]._id, function(error, result) {
        if (error) {
          alert(error);
        } 
      });


    } else {
      //console.log("NOP!!!");

      if (user2.profile === "Player") { 
      	//console.log("Profile is PLAYER!");
      	let plusBasePoints = basePoints;        
        //console.log("ADD: plusBasePoints: " + plusBasePoints);

        let newDate = new Date();
        //console.log("newDate: " + newDate);
        let newDateFormat = newDate.toString().substring(0,15);
        //console.log("newDateFormat: " + newDateFormat);

        dataSecretNotDiscovered = 
        {
          date: newDateFormat,
          countType: "ACTIVITY",
          name: "Adivinhar segredo",
          points: plusBasePoints,
          pointsType: "HP"
        };
        
        Meteor.call('updateScore', latestAcademy._id, user2.nb, dataSecretNotDiscovered, function(error, result) {
          if (error) {
            alert(error);
          } 
        });
      }

      // DEDUCT CONST HP points from player1
      let user1 = getUserByNB(player1);
      let minusBasePoints = -basePoints; 
      //console.log("DEDUCT: minusBasePoints: " + minusBasePoints);

      let newDate = new Date();
      //console.log("newDate: " + newDate);
      let newDateFormat = newDate.toString().substring(0,15);
      //console.log("newDateFormat: " + newDateFormat);

      dataPlayerThatNotDiscovered = 
      {
        date: newDateFormat,
        countType: "ACTIVITY",
        name: "Adivinhar segredo",
        points: minusBasePoints,
        pointsType: "HP"
      };

      Meteor.call('updateScore', latestAcademy._id, user1.nb, dataPlayerThatNotDiscovered, function(error, result) {
        if (error) {
          alert(error);
        } 
      });

    } 

    Modal.hide('searchSecretModal');

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

