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
	name: "Academia Setembro 2016",
	date: new Date(),
	energyLevel: 5,	
	dailyMessage: "Bem Vindos a Kroilon",
	homeMessage: "#ficaadica",
	currentRoom: "Coachroach Entry",
	countDays: 3,	
	teamScore: [
		{
			date: new Date(),
			teamChallenge: "Team Balance",
			teamPoints: "100",
			badge: "",
			room: "Coachroach Entry"
		}
	],
	users:[
		{
			nb: "formador",
			name:"Pedro Crespo",
			avatar: "",
			email: "pedro.crespo@novabase.pt",
			password: "123",
			profile: "Admin"
		},
		{
			nb: "21000",
			name:"Afonso Correia Sousa",
			avatar: "AfonsoSousa.jpg",
			card: "afonso_sousa.PNG",
			email: "afonsosousa0@gmail.com",
			password: "12345",
			profile: "Player",
			dateOfBirth: "31/01/1991",
			contact: "+932 123 456",
			businessUnit: "CF",  
    		mbti: "ENTJ",
    		counter: 8,
			voted: false,
			tardiness: 4,
    		skills:[{
				people: 7,
				communication: 8,
				problemSolving: 8,
				management: 7,
				android: 1
			}],			
			score:[
				{					
					date: new Date(),
					countType: "BADGE",
					name: "WATCH",
					points: 20,
					pointsType: "HP"										
				},
				{					
					date: new Date(2015, 02),
					countType: "ACTIVITY",
					name: "KP Challenge",					
					points: 320,
					pointsType: "KP"					
				}
			]			
		},
		{
			nb: "21001",
			name:"Anabela Araújo Rodrigues",
			avatar: "Anabela.jpg",
			card: "anabela_rodrigues.PNG",			
			email: "anabelarodrigues1993@gmail.com",
			password: "12345",
			profile: "Player",
			dateOfBirth: "12/09/1991",
			contact: "+932 897 456",          	
          	businessUnit: "FSI",
    		mbti: "ISFP",
    		counter: 0,
			voted: false,
			tardiness: 0,
    		skills:[{
				people: 7,
				communication: 7,
				problemSolving: 8,
				management: 7,
				android: 9
			}],			
			score:[
				{	
					date: new Date(),			
					countType: "BADGE",
					name: "BOSS",					
					points: 50,
					pointsType: "XP"					
				},
				{
					date: new Date(),			
					countType: "ACTIVITY",
					name: "Wells&Cans",					
					points: 600,
					pointsType: "XP"
				}
			]			
		},
		{
			nb: "21002",
			name:"André Gonçalo Ferreira",
			avatar: "AndreFerreira.jpg",
			card: "andre_ferreira.PNG",
			email: "andre_ferreira815@hotmail.com",
			password: "12345",
			profile: "Player",
			dateOfBirth: "02/01/1992",
			contact: "+932 497 412",          	
          	businessUnit: "ITC",
    		mbti: "ISFP",
    		counter: 0,
			voted: false,
			tardiness: 1,
    		skills:[{
				people: 10,
				communication: 7,
				problemSolving: 5,
				management: 7,
				android: 3
			}],			
			score:[
				{					
					date: new Date(),			
					countType: "ACTIVITY",
					name: "Kahoot",
					points: 15,
					pointsType: "HP"					
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
			profile: "Player",
			dateOfBirth: "22/09/1992",
			contact: "+912 497 412",          	
          	businessUnit: "VC",
    		mbti: "ISFJ",
    		counter: 0,
			voted: false,
			tardiness: 0,
    		skills:[{
				people: 8,
				communication: 9,
				problemSolving: 7,
				management: 7,
				android: 7
			}],			
			score:[
				{					
					date: new Date(),			
					countType: "ACTIVITY",
					name: "Kahoot",
					points: 10,
					pointsType: "HP"					
				},
				{					
					date: new Date(),			
					countType: "BADGE",
					name: "WATCH",
					points: 50,
					pointsType: "HP"			
				}
			]
		},
		{
			nb: "21004",
			name:"Catarina Oliveira",
			avatar: "CatarinaOliveira.jpg",
			card: "catarina_oliveira.PNG",
			email: "catarina@hotmail.com",
			password: "12345",
			profile: "Player",
			dateOfBirth: "30/06/1991",
			contact: "+932 117 456",          	
          	businessUnit: "FSI",
    		mbti: "ESTJ",
    		counter: 0,
			voted: false,
			tardiness: 1,
    		skills:[{
				people: 6,
				communication: 9,
				problemSolving: 7,
				management: 7,
				android: 6
			}],			
			score:[
				{					
					date: new Date(),			
					countType: "ACTIVITY",
					name: "Kahoot",
					points: 10,
					pointsType: "HP"					
				},
				{					
					date: new Date(),			
					countType: "BADGE",
					name: "WATCH",
					points: 50,
					pointsType: "HP"			
				},
				{
					date: new Date(),			
					countType: 1,
					name: "Wells&Cans",					
					points: 600,
					pointsType: "XP"
				}
			]			
		},
		{
			nb: "21005",
			name:"Fernando Garcia",
			avatar: "FernandoGarcia.jpg",
			card: "fernando_garcia.PNG",
			email: "someemail@hotmail.com",
			password: "12345",
			profile: "Player",
			dateOfBirth: "12/02/1992",
			contact: "+932 897 456",          	
          	businessUnit: "CF",
    		mbti: "ISTJ",
    		counter: 0,
			voted: false,
			tardiness: 0,
    		skills:[{
				people: 6,
				communication: 7,
				problemSolving: 9,
				management: 7,
				android: 3
			}],			
			score:[
				{
					date: new Date(),			
					countType: "ACTIVITY",
					name: "Volunteer LipSync Battle",
					points: 50,
					pointsType: "HP"
				}
			]
		},
		{
			nb: "21006",
			name:"Joao Baptista",
			avatar: "JoaoBaptista.jpg",
			card: "joao_baptista.PNG",
			email: "joao@hotmail.com",
			password: "12345",			
			profile: "Player",
			dateOfBirth: "27/01/1992",
			contact: "+912 867 634",          	
          	businessUnit: "CF",
    		mbti: "ISTJ",
    		counter: 0,
			voted: false,
			tardiness: 0,
    		skills:[{
				people: 6,
				communication: 9,
				problemSolving: 7,
				management: 8,
				android: 5
			}],			
			score:[
				{
					date: new Date(),			
					countType: "ACTIVITY",
					name: "Volunteer Android",
					points: 50,
					pointsType: "HP"
				}
			]			
		},
		{
			nb: "21007",
			name:"Pedro Gabriel",
			avatar: "PedroGabriel.jpg",
			card: "pedro_gabriel.PNG",
			email: "pedro@hotmail.com",
			password: "12345",
			profile: "Player",
			dateOfBirth: "11/01/1988",			
			contact: "+912 441 630",          	
          	businessUnit: "IMS",
    		mbti: "ISTJ",
			counter: 0,
			voted: false,
			tardiness: 0,
    		skills:[{
				people: 9,
				communication: 9,
				problemSolving: 7,
				management: 7,
				android: 9
			}],			
			score:[
				{
					date: new Date(),			
					countType: "ACTIVITY",
					name: "Volunteer Medley",
					points: 50,
					pointsType: "HP"
				},
				{
					date: new Date(),			
					countType: "ACTIVITY",
					name: "Penalty",
					points: -10, 
					pointsType: "HP"					
				},
				{
					date: new Date(),			
					countType: "ACTIVITY",
					name: "Wells & Cans",
					points: 600,
					pointsType: "XP"		
				}
			]						
		},
		{
			nb: "21008",
			name:"Rita Narciso",
			avatar: "RitaNarciso.jpg",
			card: "rita_narciso.PNG",
			email: "rita123@hotmail.com",
			password: "12345",
			profile: "Player",
			dateOfBirth: "11/01/1988",
			contact: "+912 441 630",          	
          	businessUnit: "IMS",
    		mbti: "ESTJ",
    		counter: 0,
			voted: false,
			tardiness: 3,
    		skills:[{
				people: 7,
				communication: 6,
				problemSolving: 3,
				management: 7,
				android: 1
			}],			
			score:[
				{
					date: new Date(),			
					countType: "ACTIVITY",
					name: "Penalty",
					points: -10, 
					pointsType: "HP"					
				},
				{
					date: new Date(),			
					countType: "ACTIVITY",
					name: "Penalty",
					points: -10, 
					pointsType: "HP"					
				},
				{
					date: new Date(),			
					countType: "ACTIVITY",
					name: "Penalty",
					points: -10, 
					pointsType: "HP"					
				},
				{
					date: new Date(),			
					countType: "ACTIVITY",
					name: "SONECA",					
					points: -50,
					pointsType: "HP"	
				}
			]
		}
	]
});
