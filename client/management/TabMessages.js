import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

Template.TabMessages.helpers({
    dailyMessage() {
      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
      return latestAcademy.dailyMessage;
    },
    homeMessage() {
      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
      return latestAcademy.homeMessage;
    }

});

Template.TabMessages.events({  
  'click #updateDailyMessage' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var message = $("#message").val();
    event.preventDefault();
    Meteor.call("updateDailyMessage", latestAcademy, message);

  },
  'click #resetDailyMessage' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    event.preventDefault();
    Meteor.call("resetDailyMessage", latestAcademy);

  },
  'click #updateHomeMessage' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var messageHome = $('#messageHome').val();
    event.preventDefault();
    Meteor.call("updateHomeMessage", latestAcademy, messageHome);
  },
  'click #resetHomeMessage' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    event.preventDefault();
    Meteor.call("resetHomeMessage", latestAcademy);
  },
  'click #terminateDay' (event){

    //var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    Modal.show('endDayModal', this); 
    //alert("Day terminated!");
    //event.preventDefault();
    //Meteor.call("terminateDay", latestAcademy);
  },
  'click #addCheese' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    var burgerCount = $('#burgerCount').val();

    Modal.show('addCheeseModal', this);
    event.preventDefault();
    Meteor.call("addCheese", latestAcademy, burgerCount);
  }
  
});