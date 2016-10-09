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
	currentRoom: "Coachroach Entry",
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
			card: "afonso_sousa.PNG",
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
			counter: 0,
			voted: false,
			profile: "Trainee",
			mbti: "ENTJ",
			skills:[{
					people: 7,
					communication: 8,
					problemSolving: 8,
					manegement: 7,
					android: 1
				}]
		},
		{
			nb: "21001",
			name:"Anabela Araújo Rodrigues",
			avatar: "Anabela.jpg",
			card: "anabela_rodrigues.PNG",			
			email: "anabelarodrigues1993@gmail.com",
			password: "12345",
			score:[
				{
					date: new Date(),
					challenge: "Autoavaliação",
					category: "HP",
					points: 50
				},
				{
					date: new Date(2015, 02),
					challenge: "Wells&Cans",
					category: "XP",
					points: 600
				}
			],
			counter: 0,
			voted: false,
			profile: "Trainee",
			mbti: "ENTJ",
			skills:[{
					people: 7,
					communication: 7,
					problemSolving: 8,
					manegement: 7,
					android: 9
				}]
		},
		{
			nb: "21002",
			name:"André Gonçalo Ferreira",
			avatar: "AndreFerreira.jpg",
			card: "andre_ferreira.PNG",
			email: "andre_ferreira815@hotmail.com",
			password: "12345",
			score:[{
					date: new Date(),
					challenge: "kahoot",
					category: "HP",
					points: 20
				}
			],
			counter: 0,
			voted: false,
			profile: "Trainee",
			mbti: "ESTJ",
			skills:[
				{
					people: 10,
					communication: 7,
					problemSolving: 5,
					manegement: 7,
					android: 3
				}
			]
		},
		{
			nb: "21003",
			name:"Andreia Alves",
			avatar: "AndreiaAlves.jpg",
			card: "andreia_alves.PNG",
			email: "dummy@hotmail.com",
			password: "12345",
			score:[
				{
					date: new Date(),
					challenge: "Autoavaliação",
					category: "HP",
					points: 50
				},
				{
					date: new Date(),
					challenge: "Kahoot-1st",
					category: "KP",
					points: 50
				}
			],
			counter: 0,
			voted: false,
			profile: "Trainee",
			mbti: "ISTJ",
			skills:[{
					people: 8,
					communication: 9,
					problemSolving: 7,
					manegement: 7,
					android: 7
				}]
		},
		{
			nb: "21004",
			name:"Catarina Oliveira",
			avatar: "CatarinaOliveira.jpg",
			card: "catarina_oliveira.PNG",
			email: "catarina@hotmail.com",
			password: "12345",
			score:[
				{
					date: new Date(),
					challenge: "Kahoot-2nd",
					category: "KP",
					points: 40
				},
				{
					date: new Date(2015, 02),
					challenge: "Wells&Cans",
					category: "XP",
					points: 600
				}
			],
			counter: 0,
			voted: false,
			profile: "Trainee",
			mbti: "ESTJ",
			skills:[{
					people: 6,
					communication: 9,
					problemSolving: 7,
					manegement: 7,
					android: 6
				}]
		},
		{
			nb: "21005",
			name:"Fernando Garcia",
			avatar: "FernandoGarcia.jpg",
			card: "fernando_garcia.PNG",
			email: "someemail@hotmail.com",
			password: "12345",
			score:[
				{
					date: new Date(),
					challenge: "Voluntário LipSync Battle",
					category: "HP",
					points: 50
				}
			],
			counter: 0,
			voted: false,
			profile: "Trainee",
			mbti: "ESTJ",
			skills:[{
					people: 6,
					communication: 7,
					problemSolving: 9,
					manegement: 7,
					android: 3
				}]
		},
		{
			nb: "21006",
			name:"Joao Baptista",
			avatar: "JoaoBaptista.jpg",
			card: "joao_baptista.PNG",
			email: "joao@hotmail.com",
			password: "12345",
			score:[
				{
					date: new Date(),
					challenge: "Voluntário Android",
					category: "HP",
					points: 50
				}
			],
			counter: 0,
			voted: false,
			profile: "Trainee",
			mbti: "ESTJ",
			skills:[{
					people: 6,
					communication: 9,
					problemSolving: 7,
					manegement: 8,
					android: 5
				}]
		},
		{
			nb: "21007",
			name:"Pedro Gabriel",
			avatar: "PedroGabriel.jpg",
			card: "pedro_gabriel.PNG",
			email: "pedro@hotmail.com",
			password: "12345",
			score:[
				{
					date: new Date(),
					challenge: "Voluntário Medley",
					category: "HP",
					points: 50
				},
				{
					date: new Date(),
					challenge: "Penalizacao",
					category: "HP",
					points: -10
				},
				{
					date: new Date(2015, 02),
					challenge: "Wells&Cans",
					category: "XP",
					points: 600
				}
			],
			counter: 0,
			voted: false,
			profile: "Trainee",
			mbti: "ESTJ",
			skills:[{
					people: 9,
					communication: 9,
					problemSolving: 7,
					manegement: 7,
					android: 9
				}]
		},
		{
			nb: "21008",
			name:"Rita Narciso",
			avatar: "RitaNarciso.jpg",
			card: "rita_narciso.PNG",
			email: "rita123@hotmail.com",
			password: "12345",
			score:[
				{
					date: new Date(),
					challenge: "Kahoot-2nd",
					category: "KP",
					points: 40
				},
				{
					date: new Date(),
					challenge: "Atraso",
					category: "HP",
					points: -10
				}
			],
			counter: 0,
			voted: false,
			profile: "Trainee",
			mbti: "ESTJ",
			skills:[{
					people: 7,
					communication: 6,
					problemSolving: 3,
					manegement: 7,
					android: 1
				}
			]
		}
	]
});