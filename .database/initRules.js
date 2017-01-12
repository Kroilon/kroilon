/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/initRules.js")

*/

//Challenges
db.challenges.drop();
db.createCollection("rules");
db.rules.insert([
	{
		"name": "Badge Watch",
		"type": "BADGE",
		"typeName": "WATCH",
		"threshold": "3",
		"points": "100",
		"pointsType": "HP",
		"description": "3 dias sem atrasos"
	},
	{
		"name": "Houdini",
		"type": "CHALLENGE",
		"typeName": "MAGICIAN",
		"threshold": "3",
		"points": "100",
		"pointsType": "KP",
		"description": "3 vezes Magician"
	},
	{
		"name": "TOP BOSS",
		"type": "BADGE",
		"typeName": "BOSS",
		"threshold": "3",
		"points": "100",
		"pointsType": "XP",
		"description": "2 badges BOSS"
	}
	
]);