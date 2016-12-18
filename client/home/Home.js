import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Session } from 'meteor/session';

Template.Home.helpers({
  ficaadica() {
    var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
    return latestAcademy.homeMessage;
  },
  isLoggedIn() {
    var abc = Session.get("loggedUser");

    var cond = abc != '' && Session.get("loggedUser")[0].nb != undefined;
    return cond;
  }

});
