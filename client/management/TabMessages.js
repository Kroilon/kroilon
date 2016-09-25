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

    //alert("Daily message updated!");
    event.preventDefault();
    Meteor.call("updateDailyMessage", latestAcademy, message);

  },
  'click #deleteDailyMessage' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var message = $("#message").val();

    //alert("Daily message deleted!");
    event.preventDefault();
    Meteor.call("deleteDailyMessage", latestAcademy, message);

  },
  'click #updateMessageHome' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var messageHome = $('#messageHome').val();

    //alert("Home message updated!");
    event.preventDefault();
    Meteor.call("updateMessageHome", latestAcademy, messageHome);
  },
  'click #terminateDay' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    alert("Day terminated!");
    event.preventDefault();
    Meteor.call("terminateDay", latestAcademy);
  },
  'click #addCheese' (event){

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var burgerCount = $('#burgerCount').val();

    alert("Cheese added!");
    event.preventDefault();
    Meteor.call("addCheese", latestAcademy, burgerCount);
  }
  
});