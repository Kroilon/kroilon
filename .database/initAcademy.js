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
	"name": "Academia Setembro 2016",
	"date": "Sat Dec 17 2016 15:55:21",
	"energyLevel": 5,	
	"dailyMessage": "Bem Vindos a Kroilon",
	"homeMessage": "#ficaadica",
	"currentRoom": "Cockroach Entry",
	"countDays": 1,	
	"teamScore": [
		{
			"date": "Sat Dec 17 2016 15:55:21",
			"name": "Team Balance",
			"points": 100,
			"badge": "",
			"room": "Cockroach Entry"
		},
		{
			"date": "Sat Dec 17 2016 15:55:21",
			"name": "Team Balance",
			"points": 200,
			"badge": "",
			"room": "Cockroach Entry"
		},
		{
			"date": "Sat Dec 17 2016 15:55:21",
			"name": "Team Balance",
			"points": 10,
			"badge": "",
			"room": "Cockroach Entry"
		},
		{
			"date": "Sat Dec 17 2016 15:55:21",
			"name": "Team Balance",
			"points": 300,
			"badge": "",
			"room": "Cockroach Entry"
		},
		{
			"date": "Sat Dec 18 2016 15:55:21",
			"name": "Team Balance",
			"points": 330,
			"badge": "",
			"room": "Cockroach Entry"
		},
		{
			"date": "Sat Dec 19 2016 15:55:21",
			"name": "Team Balance",
			"points": 400,
			"badge": "",
			"room": "Cockroach Entry"
		},
		{
			"date": "Sat Dec 20 2016 15:55:21",
			"name": "Team Balance",
			"points": 350,
			"badge": "",
			"room": "Cockroach Entry"
		},
		{
			"date": "Sat Dec 20 2016 15:55:21",
			"name": "Team Balance",
			"points": 420,
			"badge": "",
			"room": "Cockroach Entry"
		},
		{
			"date": "Sat Dec 20 2016 15:55:21",
			"name": "Team Balance",
			"points": 440,
			"badge": "",
			"room": "Cockroach Entry"
		}
	],
	"users":[
		{
			"nb": "13471",
			"name":"Pedro Crespo",
			"avatar": "",
			"email": "pedro.crespo@novabase.pt",
			"password": "321",
			"profile": "Admin"
		},
		{
			"nb": "20123",
			"name":"Carla Carvalho",
			"avatar": "",
			"email": "carla.carvalho@novabase.pt",
			"password": "321",
			"profile": "Admin"
		},
		{
			"nb": "21808",
			"name":"Bojan Magusic",
			"avatar": "",
			"email": "bojan.magusic@novabase.pt",
			"password": "321",
			"profile": "Admin"
		},
		{
			"nb": "21000",
			"name":"Afonso Correia Sousa",
			"avatar": "AfonsoSousa.jpg",
			"card": "afonso_sousa.PNG",
			"email": "afonsosousa0@gmail.com",
			"password": "12345",
			"profile": "Player",
			"dateOfBirth": "31/01/1991", 
			"contact": "+932 123 456",
			"businessUnit": "CF",  
    		"mbti": "ENTJ",
    		"counter": 8,
			"voted": "21001",
			"tardiness": 4,
    		"skills":[{
				"people": 7,
				"communication": 8,
				"problemSolving": 8,
				"management": 7,
				"android": 1
			}],			
			"score":[
				{					
					"date": "Sat Dec 17 2016 15:55:21",
					"countType": "BADGE",
					"name": "WATCH",
					"points": 20,
					"pointsType": "HP"										
				},
				{					
					"date": "Sat Dec 18 2016 15:55:21",
					"countType": "BADGE",
					"name": "WATCH",
					"points": 30,
					"pointsType": "HP"										
				}, 
				{					
					"date": "Sat Dec 19 2016 15:55:21",
					"countType": "ACTIVITY",
					"name": "KP Challenge",					
					"points": 320,
					"pointsType": "KP"					
				}
			]			
		},
		{
			"nb": "21001",
			"name":"Anabela Araújo Rodrigues",
			"avatar": "Anabela.jpg",
			"card": "anabela_rodrigues.PNG",			
			"email": "anabelarodrigues1993@gmail.com",
			"password": "12345",
			"profile": "Player",
			"dateOfBirth": "12/09/1991",
			"contact": "+932 897 456",          	
      		"businessUnit": "FSI",
    		"mbti": "ISFP",
    		"counter": 9,
			"voted": "21004",
			"tardiness": 0,
    		"skills":[{
				"people": 7,
				"communication": 7,
				"problemSolving": 8,
				"management": 7,
				"android": 9
			}],			
			"score":[
				{	
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "BADGE",
					"name": "BOSS",					
					"points": 50,
					"pointsType": "XP"					
				},
				{
					"date": "Sat Dec 18 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "Wells&Cans",					
					"points": 600,
					"pointsType": "XP"
				}
			]			
		},
		{
			"nb": "21002",
			"name":"André Gonçalo Ferreira",
			"avatar": "AndreFerreira.jpg",
			"card": "andre_ferreira.PNG",
			"email": "andre_ferreira815@hotmail.com",
			"password": "12345",
			"profile": "Player",
			"dateOfBirth": "02/01/1992",
			"contact": "+932 497 412",          	
      		"businessUnit": "NT",
    		"mbti": "ISFP",
    		"counter": 0,
			"voted": "Nobody",
			"tardiness": 1,
    		"skills":[{
				"people": 10,
				"communication": 7,
				"problemSolving": 5,
				"management": 7,
				"android": 3
			}],			
			"score":[
				{					
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "Kahoot",
					"points": 15,
					"pointsType": "HP"					
				}
			]

		},
		{
			"nb": "21003",
			"name":"Andreia Alves",
			"avatar": "AndreiaAlves.jpg",
			"card": "andreia_alves.PNG",
			"email": "dummy@hotmail.com",
			"password": "12345",
			"profile": "Player",
			"dateOfBirth": "22/09/1992",
			"contact": "+912 497 412",          	
      		"businessUnit": "VC",
    		"mbti": "ISFJ",
    		"counter": 0,
			"voted": "Nobody",
			"tardiness": 0,
    		"skills":[{
				"people": 8,
				"communication": 9,
				"problemSolving": 7,
				"management": 7,
				"android": 7
			}],			
			"score":[
				{					
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "Kahoot",
					"points": 10,
					"pointsType": "HP"					
				},
				{					
					"date": "Sat Dec 20 2016 15:55:21",			
					"countType": "BADGE",
					"name": "WATCH",
					"points": 50,
					"pointsType": "HP"			
				}
			]
		},
		{
			"nb": "21004",
			"name":"Catarina Oliveira",
			"avatar": "CatarinaOliveira.jpg",
			"card": "catarina_oliveira.PNG",
			"email": "catarina@hotmail.com",
			"password": "12345",
			"profile": "Player",
			"dateOfBirth": "30/06/1991",
			"contact": "+932 117 456",          	
          	"businessUnit": "FSI",
    		"mbti": "ESTJ",
    		"counter": 5,
			"voted": "Nobody",
			"tardiness": 1,
    		"skills":[{
				"people": 6,
				"communication": 9,
				"problemSolving": 7,
				"management": 7,
				"android": 6
			}],			
			"score":[
				{					
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "Kahoot",
					"points": 10,
					"pointsType": "HP"					
				},
				{					
					"date": "Sat Dec 19 2016 15:55:21",			
					"countType": "BADGE",
					"name": "WATCH",
					"points": 50,
					"pointsType": "HP"			
				},
				{
					"date": "Sat Dec 20 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "Wells&Cans",					
					"points": 600,
					"pointsType": "XP"
				}
			]			
		},
		{
			"nb": "21005",
			"name":"Fernando Garcia",
			"avatar": "FernandoGarcia.jpg",
			"card": "fernando_garcia.PNG",
			"email": "someemail@hotmail.com",
			"password": "12345",
			"profile": "Player",
			"dateOfBirth": "12/02/1992",
			"contact": "+932 897 456",          	
          	"businessUnit": "CF",
    		"mbti": "ISTJ",
    		"counter": 3,
			"voted": "Nobody",
			"tardiness": 0,
    		"skills":[{
				"people": 6,
				"communication": 7,
				"problemSolving": 9,
				"management": 7,
				"android": 3
			}],			
			"score":[
				{
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "Volunteer LipSync Battle",
					"points": 50,
					"pointsType": "HP"
				},
				{	
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "BADGE",
					"name": "BOSS",					
					"points": 50,
					"pointsType": "XP"					
				},
				{					
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "BADGE",
					"name": "WATCH",
					"points": 50,
					"pointsType": "HP"			
				},
				{	
					"date": "Sat Dec 18 2016 15:55:21",			
					"countType": "BADGE",
					"name": "TEAM PLAYER",					
					"points": 50,
					"pointsType": "XP"					
				},
				{					
					"date": "Sat Dec 19 2016 15:55:21",			
					"countType": "BADGE",
					"name": "WATCH",
					"points": 50,
					"pointsType": "HP"			
				},
				{					
					"date": "Sat Dec 20 2016 15:55:21",			
					"countType": "BADGE",
					"name": "WATCH",
					"points": 50,
					"pointsType": "HP"			
				},
				{					
					"date": "Sat Dec 22 2016 15:55:21",			
					"countType": "BADGE",
					"name": "SONECA",
					"points": -200,
					"pointsType": "HP"			
				}
			]
		},
		{
			"nb": "21006",
			"name":"Joao Baptista",
			"avatar": "JoaoBaptista.jpg",
			"card": "joao_baptista.PNG",
			"email": "joao@hotmail.com",
			"password": "12345",			
			"profile": "Player",
			"dateOfBirth": "27/01/1992",
			"contact": "+912 867 634",          	
          	"businessUnit": "CF",
    		"mbti": "ISTJ",
    		"counter": 1,
			"voted": "Nobody",
			"tardiness": 0,
    		"skills":[{
				"people": 6,
				"communication": 9,
				"problemSolving": 7,
				"management": 8,
				"android": 5
			}],			
			"score":[
				{
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "Volunteer Android",
					"points": 50,
					"pointsType": "HP"
				}
			]			
		},
		{
			"nb": "21007",
			"name":"Pedro Gabriel",
			"avatar": "PedroGabriel.jpg",
			"card": "pedro_gabriel.PNG",
			"email": "pedro@hotmail.com",
			"password": "12345",
			"profile": "Player",
			"dateOfBirth": "11/01/1988",			
			"contact": "+912 441 630",          	
          	"businessUnit": "IMS",
    		"mbti": "ISTJ",
			"counter": 10,
			"voted": "Nobody",
			"tardiness": 0,
    		"skills":[{
				"people": 9,
				"communication": 9,
				"problemSolving": 7,
				"management": 7,
				"android": 9
			}],			
			"score":[
				{
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "Volunteer Medley",
					"points": 50,
					"pointsType": "HP"
				},
				{
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "Penalty",
					"points": -10, 
					"pointsType": "HP"					
				},
				{
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "Wells & Cans",
					"points": 600,
					"pointsType": "XP"		
				}
			]						
		},
		{
			"nb": "21008",
			"name":"Rita Narciso",
			"avatar": "RitaNarciso.jpg",
			"card": "rita_narciso.PNG",
			"email": "rita123@hotmail.com",
			"password": "12345",
			"profile": "Player",
			"dateOfBirth": "11/01/1988",
			"contact": "+912 441 630",          	
          	"businessUnit": "IMS",
    		"mbti": "ESTJ",
    		"counter": 0,
			"voted": "Nobody",
			"tardiness": 3,
    		"skills":[{
				"people": 7,
				"communication": 6,
				"problemSolving": 3,
				"management": 7,
				"android": 1
			}],			
			"score":[
				{
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "Penalty",
					"points": -10, 
					"pointsType": "HP"					
				},
				{
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "Penalty",
					"points": -10, 
					"pointsType": "HP"					
				},
				{
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "Penalty",
					"points": -10, 
					"pointsType": "HP"					
				},
				{
					"date": "Sat Dec 17 2016 15:55:21",			
					"countType": "ACTIVITY",
					"name": "SONECA",					
					"points": -50,
					"pointsType": "HP"	
				}
			]
		}
	]
});
