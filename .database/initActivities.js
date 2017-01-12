/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/initChallenges.js")

*/

//Challenges
db.challenges.drop();
db.createCollection("activities");
db.activities.insert([
	{
		"name": "Avatar",
		"points": 50,
		"pointsType": "HP",
		"room": "",
		"description": ""
	},
	{
		"name": "Autoevaluation",
		"points": 50,
		"pointsType": "KP",
		"room": "",
		"description": ""
	},
	{
		"name": "Kahoot",
		"points": 50,
		"pointsType": "KP",
		"room": "",
		"description": ""
	},
	{
		"name": "Volunteer Medley",
		"points": 50,
		"pointsType": "HP",
		"room": "",
		"description": ""
	},
	{
		"name": "Volunteer Android",
		"points": 50,
		"pointsType": "HP",
		"room": "",
		"description": ""
	},
	{
		"name": "Volunteer LipSync Battle",
		"points": 50,
		"pointsType": "HP",
		"room": "",
		"description": ""
	},
	{
		"name": "Team Balance",
		"points": 200,
		"pointsType": "TP",
		"room": "",
		"description": ""
	},
	{
		"name": "Marshmallow Ladder",
		"points": 400,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Ninja MF Winner",
		"points": 25,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Daily Scrum",
		"points": 50,
		"pointsType": "TP",
		"room": "",
		"description": ""
	},
	{
		"name": "Chain of Claws",
		"points": 400,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Landing Project",
		"points": 400,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Blind Quest",
		"points": 200,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Wells & Cans",
		"points": 600,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Lunch",
		"points": 400,
		"pointsType": "XP",
		"room": "",
		"description": ""
	},
	{
		"name": "Divide & Conquer",
		"points": 500,
		"pointsType": "XP",
		"room": "",
		"description": ""
	}
]);