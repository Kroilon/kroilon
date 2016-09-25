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
  'click #insertCharacter' (event){

      var user = {};

      var characterNB = $('#characterNB').val();
      var characterName = $('#characterName').val();
      var characterAvatar = $('#characterAvatar').val();
      var characterEmail = $('#characterEmail').val();
      var characterPassword = $('#characterPassword').val();
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
    					points: 0
            }
          ]
    		};

        var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

        alert("Added user!");
        event.preventDefault();
        //var characterNB = event.target.characterNB.value;
        Meteor.call("addAcademyUser",latestAcademy._id, user); 
        //event.target.characterNB.value = "";        

  },
  'click #deleteCharacter' (event){

		debugger;

		var playerId = $("#characterNB").val();

        var latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});

        alert("Character deleted!");
        event.preventDefault();
        Meteor.call("deleteCharacter",latestAcademy._id, playerId);

  }

});
