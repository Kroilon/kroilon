import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

import { PLAYERS_ACTIVE_ELEMENT_KEY, NB_ACTIVE_ELEMENT_KEY } from '/client/management/players/TablePlayers.js';

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

const TABLE_PLAYERS_ACTIVE_TEMPLATE_NAME = "TablePlayerInfo";
const NEW_PLAYER_ACTIVE_TEMPLATE_NAME = "NewPlayerInfo";
const EDIT_PLAYER_ACTIVE_TEMPLATE_NAME = "EditPlayerInfo";

Template.EditPlayerInfo.helpers({

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
    },

    academyPlayer() {
        let nb = Session.get(NB_ACTIVE_ELEMENT_KEY);
        let user = getUserByNB(nb);
        return user;
    }

});

Template.EditPlayerInfo.events({   
  'click #insertCharacter' (event){
    event.preventDefault();

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var academyPlayer = {};

    //var academyPlayerAvatar = $('#academyPlayerAvatar').val();
    let academyPlayerNB = $('#academyPlayerNB').val();
    console.log("academyPlayerNB: " + academyPlayerNB);
    let academyPlayerEmail = $('#academyPlayerEmail').val();
    console.log("academyPlayerEmail: " + academyPlayerEmail);
    let academyPlayerMBTI = $('#academyPlayerMBTI').val();
    console.log("academyPlayerMBTI: " + academyPlayerMBTI);
    let academyPlayerName = $('#academyPlayerName').val();
    console.log("academyPlayerName: " + academyPlayerName);      
    let academyPlayerPassword = $('#academyPlayerPassword').val();
    console.log("academyPlayerPassword: " + academyPlayerPassword);
    let academyPlayerMobile = $('#academyPlayerMobile').val();
    console.log("academyPlayerMobile: " + academyPlayerMobile);
    let academyPlayerDateOfBirth = $('#academyPlayerDateOfBirth').val();
    console.log("academyPlayerDateOfBirth: " + academyPlayerDateOfBirth);
    let academyPlayerBusinessUnit = $('#academyPlayerBusinessUnit').val(); 
    console.log("academyPlayerBusinessUnit: " + academyPlayerBusinessUnit);
    let academyPlayerPeopleSkills = $('#academyPlayerPeopleSkills').val();
    console.log("academyPlayerPeopleSkills: " + academyPlayerPeopleSkills);
    let academyPlayerCommunicationSkills = $('#academyPlayerCommunicationSkills').val();
    console.log("academyPlayerCommunicationSkills: " + academyPlayerCommunicationSkills);
    let academyPlayerProblemSolvingSkills = $('#academyPlayerProblemSolvingSkills').val();
    console.log("academyPlayerProblemSolvingSkills: " + academyPlayerProblemSolvingSkills);
    let academyPlayerManagementSkills = $('#academyPlayerManagementSkills').val();
    console.log("academyPlayerManagementSkills: " + academyPlayerManagementSkills);
    let academyPlayerAndroidSkills = $('#academyPlayerAndroidSkills').val();
    console.log("academyPlayerAndroidSkills: " + academyPlayerAndroidSkills);

    // Convert business unit value
    switch (academyPlayerBusinessUnit) {
        case "Celfocus":
            academyPlayerBusinessUnit = "CF";
            break;
        case "Government, Transport and Energy":
            academyPlayerBusinessUnit = "GTE";
            break;
        case "Financial Services":
            academyPlayerBusinessUnit = "FSI";
            break;
        case "Venture Capital":
            academyPlayerBusinessUnit = "VC";
            break;
        case "NeoTalent":
            academyPlayerBusinessUnit = "NT";
            break;
        case "IMS":
            academyPlayerBusinessUnit = "IMS";
            break;
    } 

    academyPlayer =  {
      nb: academyPlayerNB,
      name: academyPlayerName,      
      email: academyPlayerEmail,
      password: academyPlayerPassword,
      profile: "Player",
      dateOfBirth: academyPlayerDateOfBirth,
      contact: academyPlayerMobile,          
      businessUnit: academyPlayerBusinessUnit,
      mbti: academyPlayerMBTI,
      counter: 0,
      voted: "Nobody",
      tardiness: 0,
      skills:[{
          people: academyPlayerPeopleSkills,
          communication: academyPlayerCommunicationSkills,
          problemSolving: academyPlayerProblemSolvingSkills,
          management: academyPlayerManagementSkills,
          android: academyPlayerAndroidSkills
        }]
    };

    //var characterNB = event.target.characterNB.value;
    Meteor.call("updateAcademyPlayer", latestAcademy, academyPlayerNB, academyPlayer, function(error, result) {
      if (error) {
        alert(error);
      } 
    });

    Session.set(PLAYERS_ACTIVE_ELEMENT_KEY, TABLE_PLAYERS_ACTIVE_TEMPLATE_NAME);
    Session.set(NB_ACTIVE_ELEMENT_KEY, "EditActiveElement");

  },

  'click #nopCharacter' (event){
    event.preventDefault();    
    Session.set(PLAYERS_ACTIVE_ELEMENT_KEY, TABLE_PLAYERS_ACTIVE_TEMPLATE_NAME);
  }

});

function _getUserNbFromLink(target){
    return target.attr('href').slice(1);
}

function getUserByNB(nb) {
  let latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
  let users = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });
  return users[0];
}
