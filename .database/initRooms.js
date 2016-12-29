/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/initRooms.js")

*/

//Rooms
db.rooms.drop();
db.createCollection("rooms");
db.rooms.insert([
	{
		"name": "Cockroach Entry",
		"dailyDecision":"Cockroach Entry decision...",
		"description": "Cockroach Entry room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{}
			]
	},
	{
		"name": "Project Room",
		"dailyDecision":"Project Room decision...",
		"description": "Project Room room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{
				"name": "BOAT",
				"locked": true
			},
			{
				"name": "DOUBLE",
				"locked": true
			},
			{
				"name": "MYSTERY",
				"locked": true
			}
			]
	},
	{
		"name": "Wandering Wall",
		"dailyDecision":"Wandering Wall decision...",
		"description": "Wandering Wall room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{}
			]
	},
	{
		"name": "Nowayout Corridor",
		"dailyDecision":"Nowayout Corridor decision...",
		"description": "Nowayout Corridor room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{}
			]
	},
	{
		"name": "Death Corridor",
		"dailyDecision":"Death Corridor decision...",
		"description": "Death Corridor room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{}
			]
	},
	{
		"name": "Adolph Room",
		"dailyDecision":"Adolph Room decision...",
		"description": "Adolph Room room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{
				"name": "BOAT",
				"locked": true
			}
			]
	},
	{
		"name": "Stormilor Hall",
		"dailyDecision":"Stormilor Hall decision...",
		"description": "Stormilor Hall room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{
				"name": "SWORD",
				"locked": true
			}
			]
	},
	{
		"name": "Diaz Krez Arena",
		"dailyDecision":"Diaz Krez Arena decision...",
		"description": "Diaz Krez Arena room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{
				"name": "FOOD",
				"locked": false
			}
			]
	},
	{
		"name": "Kalu Hall",
		"dailyDecision":"Kalu Hall decision...",
		"description": "Kalu Hall room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{
				"name": "FOOD",
				"locked": false
			}
			]
	},
	{
		"name": "Ristar Room",
		"dailyDecision":"Ristar Room decision...",
		"description": "Ristar Room room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{
				"name": "FOOD",
				"locked": false
			}
			]
	},
	{
		"name": "Stormillor Dungeon",
		"dailyDecision":"Stormillor Dungeon decision...",
		"description": "Stormillor Dungeon room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{
				"name": "MYSTERY",
				"locked": true
			}
			]
	},
	{
		"name": "Normingor Room A",
		"dailyDecision":"Normingor Room A decision...",
		"description": "Normingor Room A room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{}
			]
	},
	{
		"name": "Diktaur Room",
		"dailyDecision":"Diktaur Room decision...",
		"description": "Diktaur Room room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{
				"name": "DOUBLE",
				"locked": true
			}
			]
	},
	{
		"name": "Normingor Room B",
		"dailyDecision":"Normingor Room B decision...",
		"description": "Normingor Room B room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{}
			]
	},
	{
		"name": "Almusther Room",
		"dailyDecision":"Almusther Room decision...",
		"description": "Almusther Room room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{
				"name": "FOOD",
				"locked": false
			}
			]
	},
	{
		"name": "Performanthor Room",
		"dailyDecision":"Performanthor Room decision...",
		"description": "Performanthor Room room description HERE...",
		"image":"/roomImages/imageRoomExample.jpg",
		"badges": [
			{}
			]
	}
]);