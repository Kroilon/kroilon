import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

Template.Secrets.helpers({
	playerSecrets() {

		var secrets = Secrets.find({}).fetch();

		return secrets;
	},
	isLoggedInAsAdmin() {
        return Session.get("loggedUser")!='' && Session.get("loggedUser")!=null && Session.get("loggedUser") != undefined && Session.get("loggedUser")[0].profile == "Admin";
    },
	isDiscovered: function (flag) {
	    return flag !== true
	}
});

Template.Secrets.events({  
  'click #searchSecret' (event){
  	event.preventDefault();

  	let secrets = Secrets.find({discovered: false}).fetch();
  	//console.log("Number of undiscovered secrets: " + secrets.length);
  	if (secrets.length === 0) {
      Modal.show('discoveredSecretsModal', this);
    } else {
      Modal.show('searchSecretModal', this);
    }

  }

});
