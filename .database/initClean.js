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
	dailyMessage: "Bem Vindos a Kroilon",
	homeMessage: "#ficaadica",
	date:new Date(),
	energyLevel: 5,
	users:[		
		{
			nb: "formador",
			name:"Pedro Crespo",
			avatar: "",
			email: "pedro.crespo@novabase.pt",
			password: "academiasantarem",
			profile: "Admin"
		}
	]
});

//Challenges
db.challenges.drop();
db.createCollection("activity");


//Badges
db.badges.drop();
db.createCollection("badges");


//Badges
db.rooms.drop();
db.createCollection("rooms");


//secrets
db.secrets.drop();
db.createCollection("secrets");
