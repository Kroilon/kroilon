/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/initAcademy.js")

*/

//Academy
db.academy.drop();
db.createCollection("academy");
db.academy.insert({
	name: "Academy Setembro 2016",
	dailyMessage: "Bem Vindos a Kroilon",
	homeMessage: "#ficaadica",
	date:new Date(),
	energyLevel: 5,
	teamChallengeScore: [{
		date: new Date(),
		challenge: "CH_001_01",
		description: "On-boarding",
		points: "100"
	}],
	teamScore: [{
		date:new Date(),
		points: "100"
	}],
	pe: [{
			challenge: "All in Time",
			value: 50,
			badge: ""
		}],
	users:[
		{
			nb: "formador",
			name:"Pedro Crespo",
			avatar: "",
			email: "pedro.crespo@novabase.pt",
			password: "academiasantarem",
			profile: "Admin"
		},
		{
			nb: "21000",
			name:"Afonso Correia Sousa",
			avatar: "AfonsoSousa.jpg",
			email: "afonsosousa0@gmail.com",
			password: "12345",
			score:[
				{
					date: new Date(),
					challenge: "kahoot",
					category: "HP",
					points: 20
				},
				{
					date: new Date(2015, 02),
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
			nb: "21001",
			name:"Anabela Araújo Rodrigues",
			avatar: "Anabela.jpg",
			email: "anabelarodrigues1993@gmail.com",
			password: "12345",
			score:[
				{
					date: new Date(),
					challenge: "kahoot",
					category: "HP",
					points: 20
				},
				{
					date: new Date(2017,09),
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
			nb: "21002",
			name:"André Gonçalo Ferreira",
			avatar: "AndreFerreira.jpg",
			email: "andre_ferreira815@hotmail.com",
			password: "12345",
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