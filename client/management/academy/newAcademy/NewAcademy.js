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
    // IMAGE
    let formadorOneAvatar = "/february2017/" + $.trim(formadorOneNB) + ".jpg";
    //console.log("formadorOneAvatar: " + formadorOneAvatar);

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
    // IMAGE
    let formadorTwoAvatar = "/february2017/" + $.trim(formadorTwoNB) + ".jpg";
    //console.log("formadorTwoAvatar: " + formadorTwoAvatar);

    //GET LATEST ADMIN PASS
    let adminNB = "13471";
    let user = getUserByNB(adminNB);
    let adminPass = user.password;
    //console.log("adminPass: " + adminPass);


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
          avatar: "/february2017/13471.PNG",
          email: "pedro.crespo@novabase.pt",
          password: adminPass,
          profile: "Admin"
        },
        {
          nb: formadorOneNB,
          name: formadorOneName,
          avatar: formadorOneAvatar,
          email: formadorOneEmail,
          password: formadorOnePassword,
          profile: "Admin"
        },
        {
          nb: formadorTwoNB,
          name: formadorTwoName,
          avatar: formadorTwoAvatar,
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

function getUserByNB(nb) {
  let latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
  let users = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });
  return users[0];
}


