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
	name: "Academy Setembro 2016",
	date:new Date(),
	dailyMessage: "Bem Vindos a Kroilon",
	homeMessage: "#ficaadica",
	currentRoom: "Coachroach Entry",
	countDays: 4,
	energyLevel: 5,
	TeamScore: [{
		date:new Date(),
		TeamChallenge: "CH_001_01",
		TeamPoints: "100",
		Badge: "",
		Room: "Coachroach Entry"
	}],
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
			contact: "+932 123 456",
          	dateOfBirth: "31/01/1991",
          	businessUnit: "CF",
    		mbti: "ENTJ",
    		skills:[{
				people: 7,
				communication: 8,
				problemSolving: 8,
				management: 7,
				android: 1
			}],
			counter: 8,
			voted: false,
			atrasos: 2,
			score:[
				{					
					date: new Date(),
					CountType: 1,
					Activity/Badge: "Kahoot 1st",
					points: 20,
					pointsType: "HP"										
				},
				{					
					date: new Date(2015, 02),
					CountType: 1,
					Activity/Badge: "Egg",					
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
			contact: "+932 897 456",
          	dateOfBirth: "12/09/1991",
          	businessUnit: "FSI",
    		mbti: "ISFP",
    		skills:[{
				people: 7,
				communication: 7,
				problemSolving: 8,
				management: 7,
				android: 9
			}],
			counter: 0,
			voted: false,
			atrasos: 0,
			score:[
				{	
					date: new Date(),			
					CountType: 1,
					Activity/Badge: "Autoavaliação",					
					points: 50,
					pointsType: "HP"					
				},
				{
					date: new Date(),			
					CountType: 1,
					Activity/Badge: "Wells&Cans",					
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
			contact: "+932 497 412",
          	dateOfBirth: "02/01/1992",
          	businessUnit: "ITC",
    		mbti: "ISFP",
    		skills:[{
				people: 10,
				communication: 7,
				problemSolving: 5,
				management: 7,
				android: 3
			}],
			counter: 0,
			voted: false,
			atrasos: 1,
			score:[
				{					
					date: new Date(),			
					CountType: 1,
					Activity/Badge: "Kahoot 1st",
					points: 15,
					pointsType: "HP"					
				}
			],
			
			
		}
	]
});

//Challenges
db.challenges.drop();
db.createCollection("activity");
db.activity.insert({
	name: "kahoot",
	points: 100,
	pointType: "XP"
	room: "masmorra"
	description: "ganhou o Kahoot"
});

//Badges
db.badges.drop();
db.createCollection("badges");
db.badges.insert({
	type: "Player",
	name: "WATCH",
	points: 20,
	pointsType: "HP",
	image: '',
	percentage: 1.0,
	description: "Três dias sem atrasos"
});

//Rooms
db.rooms.drop();
db.createCollection("rooms");
db.rooms.insert({
	name: "soneca",
	DailyDecision: "",
	badges: [
		{
			name: "soneca"
		},
		{
			name: "outro"
		}
	]
});

//secrets
db.secrets.drop();
db.createCollection("secrets");
db.secrets.insert({
		description: "Primeiro segredo",
		nb: "nb21000",
		name:"Afonso Correia Sousa",
		challenge: "Submeter Segredo",
		discovered: 0,
		date:new Date()
});
