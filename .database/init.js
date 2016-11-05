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
	dailyMessage: "Bem Vindos a Kroilon",
	homeMessage: "#ficaadica",
	date: new Date(),
	energyLevel: 5,
	teamChallengeScore: [{
		date: new Date(),
		challenge: "CH_001_01",
		points: "2979"
	}],
	teamScore: [{
		date: new Date(),
		points: "3534"
	}],
	pe: [{
		challenge: "All in Time",
		value: 50,
		badge: ""
		}],
	users: [
		{
			nb: "nb22634",
			name: "Afonso Correia Sousa",
			avatar: "AfonsoSousa.jpg",
			email: "afonsosousa0@gmail.com",
			password: "12345",
			score: [
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
			skills: [{
				people: 7,
				communication: 8,
				problemSolving: 8,
				manegement: 7,
				android: 1
			}]
		},
		{
			nb: "formador",
			name: "admin",
			avatar: "",
			email: "",
			password: "123",
			profile: "Admin"
		},
		{
			nb: "formador1",
			name: "admin",
			avatar: "",
			email: "",
			password: "123",
			profile: "Admin"
		},
		{
			nb: "nb22756",
			name: "Anabela Araújo Rodrigues",
			avatar: "Anabela.jpg",
			email: "anabelarodrigues1993@gmail.com",
			password: "12345",
			score: [
				{
					date: new Date(),
					challenge: "kahoot",
					category: "HP",
					points: 20
				},
				{
					date: new Date(2017, 09),
					challenge: "daily coiso",
					category: "KP",
					points: 50
				}
			],
			profile: "Trainee",
			mbti: "ENTJ",
			skills: [{
				people: 7,
				communication: 7,
				problemSolving: 8,
				manegement: 7,
				android: 9
			}]
		},
		{
			nb: "nb22758",
			name: "André Gonçalo Ferreira",
			avatar: "AndreFerreira.jpg",
			email: "andre_ferreira815@hotmail.com",
			password: "12345",
			score: [{
				date: new Date(),
				challenge: "kahoot",
				category: "HP",
				points: 20
			}],
			profile: "Trainee",
			mbti: "ESTJ",
			skills: [{
				people: 7,
				communication: 9,
				problemSolving: 7,
				manegement: 7,
				android: 1
			}]
		}
	]
});

//Challenges
db.challenges.drop();
db.createCollection("challenges");
db.challenges.insert({
	name: "kahoot",
	points: 100,
	room: "masmorra",
	date: new Date(),
	badges: "soneca"
});

//Badges
db.badges.drop();
db.createCollection("badges");
db.badges.insert({
	name: "soneca",
	points: -200,
	date: new Date()
});

//Badges
db.rooms.drop();
db.createCollection("rooms");
db.rooms.insert({
	name: "soneca",
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
	description: "parti uma perna",
	nb: "nb22758",
	challenge: "Submeter Segredo",
	discovered: 0
});
