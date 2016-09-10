/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/init.js")

*/

//Academy

db.createCollection("academy");
db.academy.insert({
	name: "Kroilon Test",
	date:new Date(),
	users:[{
			nb: "nb00001",
			name:"kroilon",
			avatar: "foto",
			score:[{
					date: new Date(),
					challenge: "kahoot",
					category: "HP",
					points: 20
				}],
			profile: "instructor",
			skills:[{
					people: 8,
					communication: 6,
					manegemment:7,
					problemSolving: 7,
					android:2,
					arduino:0
				}]
		}]
});

//Challenges
db.createCollection("challenges");
db.academy.insert({
	name: "kahoot",
	technicalName:"CH_001",
	nParticipants: "35",
	room: 3,
	users: [{
			nb:["nb00001", "nb00002"]
		}],
	date: new Date(),
	badges: [{
		name: "soneca",
		avatar: "foto_badge",
		score: "-100",
		category: "XP"
		}]
});

//Rooms
db.createCollection("rooms");
db.academy.insert({
	name: "masmorra",
	challenge: "wells and  ",
	badges: [{
		name: "Espada",
		avatar: "foto_badge",
		score: "50",
		category: "XP"
		}],
	date: new Date()
});
