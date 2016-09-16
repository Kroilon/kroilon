/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/initChallenges.js")

*/

//Challenges
db.challenges.drop();
db.createCollection("challenges");
db.challenges.insert([
	{
		name: "Avatar",
		points: 50,
		type: "HP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Autoavaliação",
		points: 50,
		type: "KP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Kahoot-1st",
		points: 50,
		type: "KP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Kahoot-2nd",
		points: 40,
		type: "KP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Kahoot-3rd",
		points: 25,
		type: "KP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Voluntário Medley",
		points: 50,
		type: "HP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Voluntário Android",
		points: 50,
		type: "HP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Voluntário LipSync Battle",
		points: 50,
		type: "HP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Team Balance",
		points: 200,
		type: "TP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "The Marshmallow Ladder",
		points: 400,
		type: "XP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Avatar",
		points: 50,
		type: "HP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Ninja MF Vencedor",
		points: 25,
		type: "XP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Daily scrum",
		points: 50,
		type: "TP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Avatar",
		points: 50,
		type: "HP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "The Chain of Claws",
		points: 400,
		type: "XP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "The Landing Project",
		points: 400,
		type: "XP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "The Blind Quest",
		points: 200,
		type: "XP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "The Chain of Claws",
		points: 400,
		type: "XP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Wells & Cans",
		points: 600,
		type: "XP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Lunch",
		points: 400,
		type: "XP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Divide & Conquer",
		points: 500,
		type: "XP",
		room: "",
		date: new Date(),
		badges: ""
	},
	{
		name: "Lunch",
		points: 400,
		type: "XP",
		room: "",
		date: new Date(),
		badges: ""
	}
]);