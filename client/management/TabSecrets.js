import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

Template.TabSecrets.helpers({
    players(){
      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

      return latestAcademy.users;
    }

});

Template.TabSecrets.events({  
  'click #addSecret' (event){

    var secretValue = $('#secretValue').val();
    var secretPlayerNB = $('#secretPlayerNB').val();
    var secretPlayerName = $('#secretPlayerNB').find(":selected").text();

    var data = {
      description: secretValue,
      nb: secretPlayerNB,
      name: secretPlayerName,
      challenge: "Submeter Segredo",
      discovered: 0
    }

    Modal.show('secretInsertModal', this);
    event.preventDefault();
    Meteor.call("insertSecret", data);
  }

});