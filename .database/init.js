/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/init.js")

*/

//Academy
db.academy.drop();
db.createCollection("academy");
db.academy.insert({
	name: "Kroilon Test",
	date:new Date(),
	energyLevel: [{
		date: new Date(),
		energy: 5		
	}],
	teamChallengeScore: [{
		date: new Date(),
		challenge: "CH_001_01",
		points: "2979"
	}],
	teamScore: [{
		date:new Date(),
		points: "3534"
	}],
	users:[
		{
			nb: "nb22634",
			name:"Afonso Correia Sousa",
			avatar: "AfonsoSousa.jpg",
			email: "afonsosousa0@gmail.com",
			score:[
				{
					date: new Date(),
					challenge: "kahoot",
					category: "HP",
					points: 20
				},
				{
					date: new Date(),
					challenge: "kahoot",
					category: "KP",
					points: 320
				}
			],
			profile: "Trainee",
			mbti: "ENTJ",
			skills:[{
					people: 7,
					communication: 8,
					problemSolving: 8,
					manegement:7,
					android:1
				}]
		},
		{
			nb: "nb22756",
			name:"Anabela Araújo Rodrigues",
			avatar: "Anabela.jpg",
			email: "anabelarodrigues1993@gmail.com",
			score:[
				{
					date: new Date(),
					challenge: "kahoot",
					category: "HP",
					points: 20
				},
				{
					date: new Date(),
					challenge: "daily coiso",
					category: "KP",
					points: 50
				}
			],
			profile: "Trainee",
			mbti: "ENTJ",
			skills:[{
					people: 7,
					communication: 7,
					problemSolving: 8,
					manegement:7,
					android:9
				}]
		},
		{
			nb: "nb22758",
			name:"André Gonçalo Ferreira",
			avatar: "AndreFerreira.jpg",
			email: "andre_ferreira815@hotmail.com",
			score:[{
					date: new Date(),
					challenge: "kahoot",
					category: "HP",
					points: 20
				}],
			profile: "Trainee",
			mbti: "ESTJ",
			skills:[{
					people: 7,
					communication: 9,
					problemSolving: 7,
					manegement:7,
					android:1
				}]
		}
	]
});

//Challenges
db.challenges.drop();
db.createCollection("challenges");
db.challenges.insert({
	name: "kahoot",
	technicalName:"CH_001",
	nParticipants: "35",
	room: [{name:"room1"}, {name:"room 2"}],
	date: new Date(),
	badges: [{
		name: "soneca",
		avatar: "foto_badge",
		score: "-100",
		category: "XP"
		}]
});
