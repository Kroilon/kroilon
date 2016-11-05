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
		description: ""
	},
	{
		name: "Autoavaliação",
		points: 50,
		type: "KP",
		room: "",
		description: ""
	},
	{
		name: "Kahoot-1st",
		points: 50,
		type: "KP",
		room: "",
		description: ""
	},
	{
		name: "Kahoot-2nd",
		points: 40,
		type: "KP",
		room: "",
		description: ""
	},
	{
		name: "Kahoot-3rd",
		points: 25,
		type: "KP",
		room: "",
		description: ""
	},
	{
		name: "Voluntário Medley",
		points: 50,
		type: "HP",
		room: "",
		description: ""
	},
	{
		name: "Voluntário Android",
		points: 50,
		type: "HP",
		room: "",
		description: ""
	},
	{
		name: "Voluntário LipSync Battle",
		points: 50,
		type: "HP",
		room: "",
		description: ""
	},
	{
		name: "Team Balance",
		points: 200,
		type: "TP",
		room: "",
		description: ""
	},
	{
		name: "The Marshmallow Ladder",
		points: 400,
		type: "XP",
		room: "",
		description: ""
	},
	{
		name: "Avatar",
		points: 50,
		type: "HP",
		room: "",
		description: ""
	},
	{
		name: "Ninja MF Vencedor",
		points: 25,
		type: "XP",
		room: "",
		description: ""
	},
	{
		name: "Daily scrum",
		points: 50,
		type: "TP",
		room: "",
		description: ""
	},
	{
		name: "Avatar",
		points: 50,
		type: "HP",
		room: "",
		description: ""
	},
	{
		name: "The Chain of Claws",
		points: 400,
		type: "XP",
		room: "",
		description: ""
	},
	{
		name: "The Landing Project",
		points: 400,
		type: "XP",
		room: "",
		description: ""
	},
	{
		name: "The Blind Quest",
		points: 200,
		type: "XP",
		room: "",
		description: ""
	},
	{
		name: "The Chain of Claws",
		points: 400,
		type: "XP",
		room: "",
		description: ""
	},
	{
		name: "Wells & Cans",
		points: 600,
		type: "XP",
		room: "",
		description: ""
	},
	{
		name: "Lunch",
		points: 400,
		type: "XP",
		room: "",
		description: ""
	},
	{
		name: "Divide & Conquer",
		points: 500,
		type: "XP",
		room: "",
		description: ""
	},
	{
		name: "Lunch",
		points: 400,
		type: "XP",
		room: "",
		description: ""
	}
]);