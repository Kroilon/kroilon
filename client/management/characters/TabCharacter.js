import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { Challenges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';
import { Badges } from '/imports/api/databasedriver.js';
import { Secrets } from '/imports/api/databasedriver.js';


Template.TabCharacter.helpers({
    user(nb) {

      var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

      var user = $.grep(latestAcademy.users, function(e){ return e.nb == nb; });

      return user[0];
    },
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
        { name: 'CF', value: 'CelFocus' },
        { name: 'FSI', value: 'Financial Services' },
        { name: 'VC', value: 'Venture Capital' },
        { name: 'IMS', value: 'IMS' },        
        { name: 'ITC', value: 'IT Contracting' }
      ];
    },
    possiblePoints: function () {
    return [
        { name: 'one', value: '1' },
        { name: 'two', value: '2' },
        { name: 'three', value: '3' },
        { name: 'four', value: '4' },
        { name: 'five', value: '5' },
        { name: 'six', value: '6' },
        { name: 'seven', value: '7' },
        { name: 'eight', value: '8' },
        { name: 'nine', value: '9' },
        { name: 'ten', value: '10' }
      ];
    }

});

Template.TabCharacter.events({ 
  'submit form' (event){

      event.preventDefault();

      var user = {};

      var characterAvatar = $('#characterAvatar').val();
      var characterNB = $('#characterNB').val();
      var characterName = $('#characterName').val();      
      var characterEmail = $('#characterEmail').val();
      var characterPassword = $('#characterPassword').val();
      var characterBusiness = $('#characterBusiness').val();
      var characterMobile = $('#characterMobile').val();
      var characterDateOfBirth = $('#characterDateOfBirth').val();
      var characterBusinessUnit = $('#characterBusinessUnit').val();      
      var characterMBTI = $('#characterMBTI').val();
      var characterPPLSkills = $('#characterPPLSkills').val();
      var characterCommunicationSkills = $('#characterCommunicationSkills').val();
      var characterProblemSolvingSkills = $('#characterProblemSolvingSkills').val();
      var characterManagementSkills = $('#characterManagementSkills').val();
      var characterAndroidSkills = $('#characterAndroidSkills').val();

      var user = 	{
    			nb: characterNB,
    			name:characterName,
    			avatar: characterAvatar,
    			email: characterEmail,
          password: characterPassword,
    			profile: "Trainee",
          contact: characterMobile,
          dateOfBirth: characterDateOfBirth,
          businessUnit: characterBusinessUnit,
    			mbti: characterMBTI,
    			skills:[{
    					people: characterCommunicationSkills,
    					communication: characterCommunicationSkills,
    					problemSolving: characterProblemSolvingSkills,
    					manegement:characterManagementSkills,
    					android:characterAndroidSkills
    				}],
          score:[
            {
              date: new Date(),
              name: '', 
    					points: 0
            }
          ]
    		};

        var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

        Modal.show('characterInsertModal', this);
        //var characterNB = event.target.characterNB.value;
        Meteor.call("addAcademyUser",latestAcademy._id, user); 
        //event.target.characterNB.value = "";      
        $("#addCharacter")[0].reset();  

  },
  'click #deleteCharacter' (event){

    event.preventDefault();
		debugger;

		var playerId = $("#characterNB").val();

    var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

    alert("Character deleted!");    
    Meteor.call("deleteCharacter",latestAcademy._id, playerId);

  },
  'click #editCharacter' (event){

    event.preventDefault();
    Modal.show('editCharacterModal', this);
  }

});
