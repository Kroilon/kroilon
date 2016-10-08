import { Secrets } from '/imports/api/databasedriver.js';

Template.Secrets.helpers({
	playerSecrets() {

		var secrets = Secrets.find({}).fetch();

		return secrets;
	},
	isDiscovered: function (flag) {
	    return flag !== true
	}
});
