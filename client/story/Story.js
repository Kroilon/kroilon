import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';
import { KroilonHistory } from '/imports/api/databasedriver.js';

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
		var text = "";
		//console.log("Today: " + today); 
		//console.log("Text: " + text); 		

		//BUSCAR À BD
		var history = KroilonHistory.find({'day': today }, {"day" : 1, "description" : 1}).fetch();
		//console.log("History: " + history); 
		var description = history[0].description;
		text = "<h3>Mission day #" + today + " briefing:</h3>" + "<br><p class='lead'>" + description + "</p>"; 

		return text;
	}
});

Template.Story.events({  
  'click #dayOne' (event){   
	var text = "";
	var history = KroilonHistory.find({'day': 1 }, {"day" : 1, "description" : 1}).fetch();
	var description = history[0].description;
	text = "<h3>Mission day #1 briefing:</h3>" + "<br><p class='lead'>" + description + "</p>"; 	
   	$("#briefing").html( text );
  },
  'click #dayTwo' (event){   
	var text = "";
	var history = KroilonHistory.find({'day': 2 }, {"day" : 1, "description" : 1}).fetch();
	var description = history[0].description;
	text = "<h3>Mission day #2 briefing:</h3>" + "<br><p class='lead'>" + description + "</p>"; 
   	$("#briefing").html( text );
  },
  'click #dayThree' (event){   
	var text = "";
	var history = KroilonHistory.find({'day': 3 }, {"day" : 1, "description" : 1}).fetch();
	var description = history[0].description;
	text = "<h3>Mission day #3 briefing:</h3>" + "<br><p class='lead'>" + description + "</p>"; 
   	$("#briefing").html( text );
  },
  'click #dayFour' (event){   
	var text = "";
	var history = KroilonHistory.find({'day': 4 }, {"day" : 1, "description" : 1}).fetch();
	var description = history[0].description;
	text = "<h3>Mission day #4 briefing:</h3>" + "<br><p class='lead'>" + description + "</p>"; 
   	$("#briefing").html( text );
  },
  'click #dayFive' (event){   
	var text = "";
	var history = KroilonHistory.find({'day': 5 }, {"day" : 1, "description" : 1}).fetch();
	var description = history[0].description;
	text = "<h3>Mission day #5 briefing:</h3>" + "<br><p class='lead'>" + description + "</p>"; 
   	$("#briefing").html( text );
  },
  'click #daySix' (event){   
	var text = "";
	var history = KroilonHistory.find({'day': 6 }, {"day" : 1, "description" : 1}).fetch();
	var description = history[0].description;
	text = "<h3>Mission day #6 briefing:</h3>" + "<br><p class='lead'>" + description + "</p>"; 
   	$("#briefing").html( text );
  },
  'click #daySeven' (event){   
	var text = "";
	var history = KroilonHistory.find({'day': 7 }, {"day" : 1, "description" : 1}).fetch();
	var description = history[0].description;
	text = "<h3>Mission day #7 briefing:</h3>" + "<br><p class='lead'>" + description + "</p>"; 
   	$("#briefing").html( text );
  },
  'click #dayEight' (event){   
	var text = "";
	var history = KroilonHistory.find({'day': 8 }, {"day" : 1, "description" : 1}).fetch();
	var description = history[0].description;
	text = "<h3>Mission day #8 briefing:</h3>" + "<br><p class='lead'>" + description + "</p>"; 
   	$("#briefing").html( text );
  },
  'click #dayNine' (event){   
	var text = "";
	var history = KroilonHistory.find({'day': 9 }, {"day" : 1, "description" : 1}).fetch();
	var description = history[0].description;
	text = "<h3>Mission day #9 briefing:</h3>" + "<br><p class='lead'>" + description + "</p>"; 
   	$("#briefing").html( text );
  },
  'click #dayTen' (event){   
	var text = "";
	var history = KroilonHistory.find({'day': 10 }, {"day" : 1, "description" : 1}).fetch();
	var description = history[0].description;
	text = "<h3>Mission day #10 briefing:</h3>" + "<br><p class='lead'>" + description + "</p>"; 
   	$("#briefing").html( text );
  },
  'click #dayEleven' (event){   
	var text = "";
	var history = KroilonHistory.find({'day': 11 }, {"day" : 1, "description" : 1}).fetch();
	var description = history[0].description;
	text = "<h3>Mission day #11 briefing:</h3>" + "<br><p class='lead'>" + description + "</p>"; 
   	$("#briefing").html( text );
  },
  'click #dayTwelve' (event){   
	var text = "";
	var history = KroilonHistory.find({'day': 12 }, {"day" : 1, "description" : 1}).fetch();
	var description = history[0].description;
	text = "<h3>Mission day #12 briefing:</h3>" + "<br><p class='lead'>" + description + "</p>"; 
   	$("#briefing").html( text );
  }    
});