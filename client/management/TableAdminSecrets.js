import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

Template.TableAdminSecrets.helpers({
  playerSecrets() {

    var secrets = Secrets.find({}).fetch();

    return secrets;
  },
  isDiscovered: function (flag) {
      return flag !== true
  }
});

Template.TableAdminSecrets.events({  
  'click #discoverSecret' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var message = $("#message").val();

   	alert("Secret Discovered!");
   	/*
    event.preventDefault();
    Meteor.call('discoverSecret', this, function(error, result) {
      if (error) {
        alert(error);
      } 
    });    
	*/
  },
  'click #deleteSecret' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var message = $("#message").val();

    Modal.show('alertModal', this);
    //alert("Secret Deleted!");
    /*
    event.preventDefault();    
    Meteor.call('deleteSecret', this, function(error, result) {
      if (error) {
        alert(error);
      } 
    });
	*/
  }
  
});