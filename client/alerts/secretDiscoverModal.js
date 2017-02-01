import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

Template.secretDiscoverModal.events({
  'click #discover': function(e) {

    e.preventDefault();

    let secretNB = this.nb;
    //let player = getUserByNB(secretNB);
    let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    let dataSecretInsert = {};

    Meteor.call('discoverSecret', this._id, function(error, result) {
      if (error) {
        alert(error);
      } 
    });    

    let playerSecret = getUserByNB(secretNB);

    if (playerSecret.profile === "Player") {  

        let newDate = new Date();
        //console.log("newDate: " + newDate);
        let newDateFormat = newDate.toString().substring(0,15);
        //console.log("newDateFormat: " + newDateFormat);

        dataSecretInsert = 
        {
          date: newDateFormat,
          countType: "ACTIVITY",
          name: "Inserir segredo",
          points: 200,
          pointsType: "HP"
        };

        Meteor.call('updateScore', latestAcademy._id, secretNB, dataSecretInsert, function(error, result) {
          if (error) {
            alert(error);
          } 
        });
    }

    Modal.hide('secretDiscoverModal');
  }
});

function getUserByNB(nb) {
  let latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
  let users = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });
  return users[0];
}