import { Secrets } from '/imports/api/databasedriver.js';

Template.TableSecrets.helpers({
	playerSecrets() {

		var secrets = Secrets.find({}).fetch();

		return secrets;
	},
	isDiscovered: function (flag) {
	    return flag !== true
	}
});
