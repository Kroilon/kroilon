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
		"name": "Coachroach Entry",
		"dailyDecision":"Coachroach Entry decision...",
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
		"name": "Project Room",
		"dailyDecision":"Project Room decision...",
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
		"badges": [
			{}
			]
	},
	{
		"name": "Nowayout Corridor",
		"dailyDecision":"Nowayout Corridor decision...",
		"badges": [
			{}
			]
	},
	{
		"name": "Death Corridor",
		"dailyDecision":"Death Corridor decision...",
		"badges": [
			{}
			]
	},
	{
		"name": "Adolph Room",
		"dailyDecision":"Adolph Room decision...",
		"badges": [
			{
				"name": "BOAT",
				"locked": true
			}
			]
	},
	{
		"name": "Stormillor Hall",
		"dailyDecision":"Stormillor Hall decision...",
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
		"badges": [
			{}
			]
	},
	{
		"name": "Kalu Hall",
		"dailyDecision":"Kalu Hall decision...",
		"badges": [
			{
				"name": "FOOD",
				"locked": true
			}
			]
	},
	{
		"name": "Ristar Room",
		"dailyDecision":"Ristar Room decision...",
		"badges": [
			{
				"name": "FOOD",
				"locked": true
			}
			]
	},
	{
		"name": "Stormillor Dungeons",
		"dailyDecision":"Stormillor Dungeons decision...",
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
		"badges": [
			{}
			]
	},
	{
		"name": "Diktaur Room",
		"dailyDecision":"Diktaur Room decision...",
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
		"badges": [
			{}
			]
	},
	{
		"name": "Almusther Room",
		"dailyDecision":"Almusther Room decision...",
		"badges": [
			{
				"name": "FOOD",
				"locked": true
			}
			]
	},
	{
		"name": "Performanthor Room",
		"dailyDecision":"Performanthor Room decision...",
		"badges": [
			{}
			]
	}
]);