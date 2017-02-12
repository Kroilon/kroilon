import { Academy } from '/imports/api/databasedriver.js';

Template.registerHelper('formatDate', function(date) {
  return date.toDateString();
});

Template.deleteActivityModal.events({

  'click #delete': function(e) {
    
    e.preventDefault();
    let latestAcademy = Academy.findOne({}, {sort: {date: -1, limit: 1}});
    let activity = this;

    if (activity.pointsType === "TP") {  
      //console.log("TEAM!");

      Meteor.call("deleteTeamScore", latestAcademy._id, activity, function(error, result) {
        if (error) {
          alert(error);
        } 
      });

    } else {

      let activityDate = activity.date;
      //console.log("Activity Date: " + activityDate);
      let activityType = activity.type;
      //console.log("Activity Type: " + activityType);
      let activityName = activity.name;
      //console.log("Activity Name: " + activityName);
      let activityPoints = activity.points;
      //console.log("Activity Points: " + activityPoints);
      let activityPointsType = activity.pointsType;
      //console.log("Activity Points Type: " + activityPointsType);

      let activityUser = getUserByNB(activity.nb);
      let userScores = activityUser.score;

      if (userScores != undefined)
      {
        $.each(userScores, function(idx_scores, val_scores)
        {
          console.log("SCORE NAME: " + val_scores.name);

          if ( (val_scores.name === activityName) && (val_scores.date === activityDate) && (val_scores.countType === activityType) && (val_scores.points === activityPoints) && (val_scores.pointsType === activityPointsType))  {

            //console.log("NAME CHECK!");
            //console.log("DATE CHECK!");
            //console.log("TYPE CHECK!");
            //console.log("POINTS CHECK!");
            //console.log("POINTS TYPE CHECK!");
            
            Meteor.call('deleteScore', latestAcademy._id, activity.nb, val_scores, function(error, result) {
              if (error) {
                alert(error);
              }
            });
            
          }
           
          //points.push({"player":val_players.name, "category":val_scores.countType, "name":val_scores.name, "points":val_scores.points, "type":val_scores.pointsType,  "date":val_scores.date});
        //  console.log(points_a);
        //  console.log(points[0]);
        });
      }

    
      

    }

    Modal.hide('deleteChallengeModal');

  }
});

function getUserByNB(nb) {
  let latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
  let users = $.grep(latestAcademy.users, function (e) { return e.nb == nb; });
  return users[0];
}