import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

Template.TabAcademy.events({  
  'click #insertAcademy' (event){
    var academyName = $('#academyName').val();

    var data =
    {
      name: academyName,
      date: new Date()
    };

    alert("Academy inserted!");
    event.preventDefault();
    Meteor.call("addAcademy", data);
  }

});