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
   	Modal.show('secretDiscoverModal', this);
    /*
    event.preventDefault();
    Meteor.call('discoverSecret', this._id, function(error, result) {
      if (error) {
        alert(error);
      } 
    });
    */    
	
  },
  'click #deleteSecret' (event){
    Modal.show('secretDeleteModal', this);    
    /*
    event.preventDefault();    
    Meteor.call('deleteSecret', this._id, function(error, result) {
      if (error) {
        alert(error);
      } 
    }); 
    */ 	
  }
  
});