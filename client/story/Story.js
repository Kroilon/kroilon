import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

Template.Story.helpers({
	currentDay() {

		var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });

		var today = latestAcademy.countDays;

		return today;
	},
	checkIfEqualOrLarger(number,toCompare){
	    if(number>=toCompare){
	        return true;
	    }else{
	        return false;
	    }
	},
	openBriefing(){
		var latestAcademy = Academy.findOne({}, { sort: { date: -1, limit: 1 } });
		var today = latestAcademy.countDays;
		var text="";
		//BUSCAR À BD
		switch(today){
			case 1:
				text = "<h3>Mission day #1 briefing:</h3>"+
				 "<br><p class='lead'>You’re entering the fortress through a tunnel in the northeast corner of the island. "+
				 "Thank god the fortress was formerly a place of Cristian cult filled with monks and nuns. A small group of "+
				 "survivors from that era will escort you and your team to the cockroach entry.<br>"+
				 "If you’ve completed your initial auto skill evaluation you’ll be starting with some Knowledge Points. "+
				 "Be sure to volunteer to help your team in this initial times.<br>"+
				 "Beware of the guards as they are very well trained and you want to keep your surprise advantage.";
			break;
			case 2:
				text = "<h3>Mission day #2 briefing:</h3>"+
				"You’re doing great and reached the Project Room. This is where everything is planned so you have to "+
				"retrieve any plans you can find. Wait… there are some underwater secret tunnels. Hurry up and grab your "+
				"team badges to give your team it’s full potential. Unlock the boat badge to enter the tunnels."+
				"Don’t forget to grow your intel and healing power to better defend your team.";
			break;
			case 3:
				text = "<h3>Mission day #3 briefing:</h3>"+
				"Too bad about the tunnels… but there’s no problem. You’re at the Wondering Hall and your first big "+
				"decision is right in front of you… Death Corridor or Adolph Room? You have to be sure because failing "+
				"to pass the corridor will harm your team (lose 100 team points). In the other hand, passing through the "+
				"corridor will make your team win 100 team points.";
			break;
			case 4:
				text = "<h3>Mission day #4 briefing:</h3>"+
				"Welcome to the unpredictable Adolph Room. Named after the World War II fearless Germain leader, "+
				"this room is where prisoners are interrogated many times until death."+
				"There’s a pit across the room stopping your from ";
			break;
			case 5:
				text = "<h3>Mission day #4 briefing:</h3>"+
				"Welcome to the unpredictable Adolph Room. Named after the World War II fearless Germain leader, "+
				"this room is where prisoners are interrogated many times until death."+
				"There’s a pit across the room stopping your from ";
			break;
			case 6:
				text = "<h3>Mission day #4 briefing:</h3>"+
				"Welcome to the unpredictable Adolph Room. Named after the World War II fearless Germain leader, "+
				"this room is where prisoners are interrogated many times until death."+
				"There’s a pit across the room stopping your from ";
			break;
			case 7:
				text = "<h3>Mission day #4 briefing:</h3>"+
				"Welcome to the unpredictable Adolph Room. Named after the World War II fearless Germain leader, "+
				"this room is where prisoners are interrogated many times until death."+
				"There’s a pit across the room stopping your from ";
			break;
			case 8:
				text = "<h3>Mission day #4 briefing:</h3>"+
				"Welcome to the unpredictable Adolph Room. Named after the World War II fearless Germain leader, "+
				"this room is where prisoners are interrogated many times until death."+
				"There’s a pit across the room stopping your from ";
			break;
			case 9:
				text = "<h3>Mission day #4 briefing:</h3>"+
				"Welcome to the unpredictable Adolph Room. Named after the World War II fearless Germain leader, "+
				"this room is where prisoners are interrogated many times until death."+
				"There’s a pit across the room stopping your from ";
			break;
			case 10:
				text = "<h3>Mission day #4 briefing:</h3>"+
				"Welcome to the unpredictable Adolph Room. Named after the World War II fearless Germain leader, "+
				"this room is where prisoners are interrogated many times until death."+
				"There’s a pit across the room stopping your from ";
			break;
			case 11:
				text = "<h3>Mission day #4 briefing:</h3>"+
				"Welcome to the unpredictable Adolph Room. Named after the World War II fearless Germain leader, "+
				"this room is where prisoners are interrogated many times until death."+
				"There’s a pit across the room stopping your from ";
			break;
		}
		return text;
	}
});
