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
  'submit form' (event){

    event.preventDefault();

    var secretValue = $('#secretValue').val();
    var secretPlayerNB = $('#secretPlayerNB').val();
    var secretPlayerName = $('#secretPlayerNB').find(":selected").text();

    var data = {
      date: new Date(),
      nb: secretPlayerNB,
      name: secretPlayerName,
      description: secretValue,
      challenge: "Submit secret",
      discovered: false
    }

    Modal.show('secretInsertModal', this);
    Meteor.call("insertSecret", data);
    $("#addSecret")[0].reset(); 
  },

  'click #emptySecrets' (event){
    event.preventDefault();
    Modal.show('secretDeleteAllModal', this);    
  }

});