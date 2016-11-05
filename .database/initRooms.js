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
		name: "Coachroach Entry",
		DailyDescription:"",
		badges: [
			{}
			]
	},
	{
		name: "Project Room",
		DailyDescription:"",
		badges: [
			{
				name: "BOAT"
			}
			]
	},
	{
		name: "Wandering Wall",
		DailyDescription:"",
		badges: [
			{}
			]
	},
	{
		name: "Nowayout Corridor",
		DailyDescription:"",
		badges: [
			{}
			]
	},
	{
		name: "Death Corridor",
		DailyDescription:"",
		badges: [
			{}
			]
	},
	{
		name: "Adolph Room",
		DailyDescription:"",
		badges: [
			{
				name: "BOAT"
			}
			]
	},
	{
		name: "Stormillor Hall",
		DailyDescription:"",
		badges: [
			{
				name: "SWORD"
			}
			]
	},
	{
		name: "Diaz Krez Arena",
		DailyDescription:"",
		badges: [
			{}
			]
	},
	{
		name: "Kalu Hall",
		DailyDescription:"",
		badges: [
			{
				name: "FOOD"
			}
			]
	},
	{
		name: "Ristar Room",
		DailyDescription:"",
		badges: [
			{
				name: "FOOD"
			}
			]
	},
	{
		name: "Stormillor Dungeons",
		DailyDescription:"",
		badges: [
			{
				name: "MYSTERY"
			}
			]
	},
	{
		name: "Normingor Room A",
		DailyDescription:"",
		badges: [
			{}
			]
	},
	{
		name: "Diktaur Room",
		DailyDescription:"",
		badges: [
			{
				name: "DOUBLE"
			}
			]
	},
	{
		name: "Normingor Room B",
		DailyDescription:"",
		badges: [
			{}
			]
	},
	{
		name: "Almusther Room",
		DailyDescription:"",
		badges: [
			{
				name: "FOOD"
			}
			]
	},
	{
		name: "Performanthor Room",
		DailyDescription:"",
		badges: [
			{}
			]
	}
]);