import { Template } from 'meteor/templating';
import { Secrets } from '/imports/api/databasedriver.js';


Template.Secrets.helpers({	
	secrets(){
		var allSecrets = Secrets.find();
		console.log(allSecrets.description);
		return allSecrets;
	}
});