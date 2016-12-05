import { Academy } from '/imports/api/databasedriver.js';

Template.registerHelper('getBusinessUnit', function(unit) {
  
  var businessUnit = ""; 

  switch (unit) {
    case "CF":
        businessUnit = "Celfocus";
        break;
    case "GTE":
        businessUnit = "Government, Transport and Energy";
        break;
    case "FSI":
        businessUnit = "Financial Services";
        break;
    case "VC":
        businessUnit = "Venture Capital";
        break;
    case "NT":
        businessUnit = "NeoTalent";
        break;
    case "IMS":
        businessUnit = "IMS";
        break;
    default:
        businessUnit = "";
  }

  return businessUnit;

});

Template.editPlayerModal.helpers({
    mbtiTypes: function () {
    return [
        { name: 'ISTJ', value: 'ISTJ' },
        { name: 'ISFJ', value: 'ISFJ' },
        { name: 'INFJ', value: 'INFJ' },
        { name: 'INTJ', value: 'INTJ' },
        { name: 'ISTP', value: 'ISTP' },
        { name: 'ISFP', value: 'ISFP' },
        { name: 'INFP', value: 'INFP' },
        { name: 'INTP', value: 'INTP' },
        { name: 'ESTP', value: 'ESTP' },
        { name: 'ESFP', value: 'ESFP' },
        { name: 'ENFP', value: 'ENFP' },
        { name: 'ENTP', value: 'ENTP' },
        { name: 'ESTJ', value: 'ESTJ' },
        { name: 'ESFJ', value: 'ESFJ' },
        { name: 'ENFJ', value: 'ENFJ' },
        { name: 'ENTJ', value: 'ENTJ' }
      ];
    },
    businessUnitTypes: function () {
    return [
        { name: 'CF', value: 'Celfocus' },
        { name: 'GTE', value: 'Government, Transport and Energy' },
        { name: 'FSI', value: 'Financial Services' },
        { name: 'VC', value: 'Venture Capital' },
        { name: 'NT', value: 'NeoTalent' },
        { name: 'IMS', value: 'IMS' }        
      ];
    },
    possiblePoints: function () {
    return [
        { name: '1', value: '1' },
        { name: '2', value: '2' },
        { name: '3', value: '3' },
        { name: '4', value: '4' },
        { name: '5', value: '5' },
        { name: '6', value: '6' },
        { name: '7', value: '7' },
        { name: '8', value: '8' },
        { name: '9', value: '9' },
        { name: '10', value: '10' } 
      ];
    }

});

Template.editPlayerModal.events({   
  'submit form' (event){

    event.preventDefault();
    var user = {};

    //var characterAvatar = $('#characterAvatar').val();
    var characterNB = $('#characterNB').val();
    console.log("characterNB: " + characterNB);
    var characterEmail = $('#characterEmail').val();
    console.log("characterEmail: " + characterEmail);
    var characterMBTI = $('#characterMBTI').val();
    console.log("characterMBTI: " + characterMBTI);
    var characterName = $('#characterName').val();
    console.log("characterName: " + characterName);      
    var characterPassword = $('#characterPassword').val();
    console.log("characterPassword: " + characterPassword);
    var characterMobile = $('#characterMobile').val();
    console.log("characterMobile: " + characterMobile);
    var characterDateOfBirth = $('#characterDateOfBirth').val();
    console.log("characterDateOfBirth: " + characterDateOfBirth);
    var characterBusinessUnit = $('#characterBusinessUnit').val(); 
    console.log("characterBusinessUnit: " + characterBusinessUnit);
    var characterPeopleSkills = $('#characterPeopleSkills').val();
    console.log("characterPeopleSkills: " + characterPeopleSkills);
    var characterCommunicationSkills = $('#characterCommunicationSkills').val();
    console.log("characterCommunicationSkills: " + characterCommunicationSkills);
    var characterProblemSolvingSkills = $('#characterProblemSolvingSkills').val();
    console.log("characterProblemSolvingSkills: " + characterProblemSolvingSkills);
    var characterManagementSkills = $('#characterManagementSkills').val();
    console.log("characterManagementSkills: " + characterManagementSkills);
    var characterAndroidSkills = $('#characterAndroidSkills').val();
    console.log("characterAndroidSkills: " + characterAndroidSkills);

    user =    {
        nb: characterNB,
        name:characterName,
        //avatar: characterAvatar,
        email: characterEmail,
        password: characterPassword,
        profile: "Player",
        dateOfBirth: characterDateOfBirth,
        contact: characterMobile,          
        businessUnit: characterBusinessUnit,
        mbti: characterMBTI,
        counter: 0,
        voted: "Nobody",
        tardiness: 0,
        skills:[{
                people: characterPeopleSkills,
                communication: characterCommunicationSkills,
                problemSolving: characterProblemSolvingSkills,
                management: characterManagementSkills,
                android: characterAndroidSkills
            }]
    };

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    Meteor.call("updateAcademyPlayer", latestAcademy, user);   

    Modal.hide('editPlayerModal');
  }

});