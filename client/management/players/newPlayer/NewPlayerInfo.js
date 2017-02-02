import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';

import { PLAYERS_ACTIVE_ELEMENT_KEY } from '/client/management/players/TablePlayers.js';

Template.NewPlayerInfo.helpers({

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

const TABLE_PLAYERS_ACTIVE_TEMPLATE_NAME = "TablePlayerInfo";
const NEW_PLAYER_ACTIVE_TEMPLATE_NAME = "NewPlayerInfo";
const EDIT_PLAYER_ACTIVE_TEMPLATE_NAME = "EditPlayerInfo";

Template.NewPlayerInfo.events({   

  'submit form' (event){

    event.preventDefault();

    let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    var user = {};

    //var characterAvatar = $('#characterAvatar').val();
    let characterNB = $('#formCharacterNB').val();
    //console.log("characterNB: " + characterNB);
    let characterEmail = $('#formCharacterEmail').val();
    //console.log("characterEmail: " + characterEmail);
    let characterMBTI = $('#formCharacterMBTI').val();
    //console.log("characterMBTI: " + characterMBTI);
    let characterName = $('#formCharacterName').val();
    //console.log("characterName: " + characterName);      
    let characterPassword = $('#formCharacterPassword').val();
    //console.log("characterPassword: " + characterPassword);
    let characterMobile = $('#formCharacterMobile').val();
    //console.log("characterMobile: " + characterMobile);
    let characterDateOfBirth = $('#formCharacterDateOfBirth').val();
    //console.log("characterDateOfBirth: " + characterDateOfBirth);
    let characterBusinessUnit = $('#formCharacterBusinessUnit').val(); 
    //console.log("characterBusinessUnit: " + characterBusinessUnit);

    let characterPeopleSkills = Number($('#formCharacterPeopleSkills').val());
    //console.log("characterPeopleSkills: " + characterPeopleSkills);
    let characterCommunicationSkills = Number($('#formCharacterCommunicationSkills').val());
    //console.log("characterCommunicationSkills: " + characterCommunicationSkills);
    let characterProblemSolvingSkills = Number($('#formCharacterProblemSolvingSkills').val());
    //console.log("characterProblemSolvingSkills: " + characterProblemSolvingSkills);
    let characterManagementSkills = Number($('#formCharacterManagementSkills').val());
    //console.log("characterManagementSkills: " + characterManagementSkills);
    let characterAndroidSkills = Number($('#formCharacterAndroidSkills').val());
    //console.log("characterAndroidSkills: " + characterAndroidSkills);

    let characterAvatar = "/february2017/nb" + $.trim(characterNB) + ".jpg";
    //console.log("formadorOneAvatar: " + formadorOneAvatar);

    user =  {
      nb: characterNB,
      name:characterName,
      avatar: characterAvatar,
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
        }],
      score:[]
    };

    //Modal.show('characterInsertModal', this);
    //var characterNB = event.target.characterNB.value;
    Meteor.call("insertAcademyPlayer", latestAcademy, user, function(error, result) {
      if (error) {
        alert(error);
      } 
    }); 
    //event.target.characterNB.value = "";      
    $("#addNewPlayer")[0].reset();  

    Session.set(PLAYERS_ACTIVE_ELEMENT_KEY, TABLE_PLAYERS_ACTIVE_TEMPLATE_NAME);
  },

  'click #nopCharacter' (event){
    event.preventDefault();
    Session.set(PLAYERS_ACTIVE_ELEMENT_KEY, TABLE_PLAYERS_ACTIVE_TEMPLATE_NAME);
  }

});
