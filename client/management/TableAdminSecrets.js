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