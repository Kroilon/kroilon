import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

Template.TabAcademy.events({  
  'submit form' (event){
    event.preventDefault();

    var academyName = $('#academyName').val();

    var data =
    {
      name: academyName,
      date: new Date()
    };

    Modal.show('addAcademyModal', this);
    Meteor.call("addAcademy", data);
    $("#addAcademy")[0].reset(); 
  }

});