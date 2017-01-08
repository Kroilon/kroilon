import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

import { ACADEMIES_ACTIVE_ELEMENT_KEY } from '/client/management/academy/TabAcademy.js';

const TABLE_ACADEMIES_ACTIVE_ELEMENT_KEY = "TableAcademies";
const NEW_ACADEMIES_ACTIVE_ELEMENT_KEY = "NewAcademy";

Template.NewAcademy.events({  
  'submit form' (event){

    event.preventDefault();

    var newAcademy = {};

    // Academy Name
    let academyName = $('#academyName').val();

    // Formador 1
    //let formadorOneAvatar = $('#formadorOneAvatar').val();
    let formadorOneNB = $('#formadorOneNB').val();
    //console.log("formadorOneNB: " + formadorOneNB);
    let formadorOneName = $('#formadorOneName').val();
    //console.log("formadorOneName: " + formadorOneName);
    let formadorOneEmail = $('#formadorOneEmail').val();
    //console.log("formadorOneEmail: " + formadorOneEmail);
    let formadorOnePassword = $('#formadorOnePassword').val();
    //console.log("formadorOnePassword: " + formadorOnePassword);

    // Formador 2
    //let formadorTwoAvatar = $('#formadorTwoAvatar').val();
    let formadorTwoNB = $('#formadorTwoNB').val();
    //console.log("formadorTwoNB: " + formadorTwoNB);
    let formadorTwoName = $('#formadorTwoName').val();
    //console.log("formadorTwoName: " + formadorTwoName);
    let formadorTwoEmail = $('#formadorTwoEmail').val();
    //console.log("formadorTwoEmail: " + formadorTwoEmail);
    let formadorTwoPassword = $('#formadorTwoPassword').val();
    //console.log("formadorTwoPassword: " + formadorTwoPassword);

    newAcademy = {
      name: academyName,
      date: new Date(),
      energyLevel: 5,
      dailyMessage: "Bem Vindos a Kroilon",
      homeMessage: "#ficaadica",
      currentRoom: "Cockroach Entry",
      countDays: 1,
      teamScore: [],
      users: [
        {
          nb: "13471",
          name:"Pedro Crespo",
          avatar: "",
          email: "pedro.crespo@novabase.pt",
          password: "321",
          profile: "Admin"
        },
        {
          nb: formadorOneNB,
          name: formadorOneName,
          avatar: "",
          email: formadorOneEmail,
          password: formadorOnePassword,
          profile: "Admin"
        },
        {
          nb: formadorTwoNB,
          name: formadorTwoName,
          avatar: "",
          email: formadorTwoEmail,
          password: formadorTwoPassword,
          profile: "Admin"
        }
      ]
    };

    //var characterNB = event.target.characterNB.value;
    Meteor.call("addAcademy", newAcademy, function(error, result) {
      if (error) {
        alert(error);
      } 
    });

    $("#addAcademy")[0].reset();  
    Session.set(ACADEMIES_ACTIVE_ELEMENT_KEY, TABLE_ACADEMIES_ACTIVE_ELEMENT_KEY);

  },

  'click #nopAcademy' (event){
    event.preventDefault();
    Session.set(ACADEMIES_ACTIVE_ELEMENT_KEY, TABLE_ACADEMIES_ACTIVE_ELEMENT_KEY);
  }

});



