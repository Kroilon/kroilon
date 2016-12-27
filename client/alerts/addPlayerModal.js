import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';


Template.addPlayerModal.helpers({
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

Template.addPlayerModal.events({ 
  'submit form' (event){

      event.preventDefault();

      let user = {};

      //let characterAvatar = $('#characterAvatar').val();
      let characterNB = $('#characterNB').val();
      let characterEmail = $('#characterEmail').val();
      let characterMBTI = $('#characterMBTI').val();
      let characterName = $('#characterName').val();
      let characterPassword = $('#characterPassword').val();
      let characterMobile = $('#characterMobile').val();
      let characterDateOfBirth = $('#characterDateOfBirth').val();
      let characterBusinessUnit = $('#characterBusinessUnit').val(); 
      let characterPeopleSkills = $('#characterPeopleSkills').val();
      let characterCommunicationSkills = $('#characterCommunicationSkills').val();
      let characterProblemSolvingSkills = $('#characterProblemSolvingSkills').val();
      let characterManagementSkills = $('#characterManagementSkills').val();
      let characterAndroidSkills = $('#characterAndroidSkills').val();

      user = 	{
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

      let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
      Meteor.call("insertAcademyPlayer", latestAcademy, user);

      Modal.hide('addPlayerModal');

  }

});
