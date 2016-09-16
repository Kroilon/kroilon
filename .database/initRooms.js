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
	badges: [
		{}
		]
	},
	{
	name: "Project Room",
	badges: [
		{
			name: "BOAT"
		}
		]
	},
	{
	name: "Wandering Wall",
	badges: [
		{}
		]
	},
	{
	name: "Nowayout Corridor",
	badges: [
		{}
		]
	},
	{
	name: "Death Corridor",
	badges: [
		{}
		]
	},
	{
	name: "Adolph Room",
	badges: [
		{
			name: "BOAT"
		}
		]
	},
	{
	name: "Stormillor Hall",
	badges: [
		{
			name: "SWORD"
		}
		]
	},
	{
	name: "Diaz Krez Arena",
	badges: [
		{}
		]
	},
	{
	name: "Kalu Hall",
	badges: [
		{
			name: "FOOD"
		}
		]
	},
	{
	name: "Ristar Room",
	badges: [
		{
			name: "FOOD"
		}
		]
	},
	{
	name: "Stormillor Dungeons",
	badges: [
		{
			name: "MYSTERY"
		}
		]
	},
	{
	name: "Normingor Room A",
	badges: [
		{}
		]
	},
	{
	name: "Diktaur Room",
	badges: [
		{
			name: "DOUBLE"
		}
		]
	},
	{
	name: "Normingor Room B",
	badges: [
		{}
		]
	},
	{
	name: "Almusther Room",
	badges: [
		{
			name: "FOOD"
		}
		]
	},
	{
	name: "Performanthor Room",
	badges: [
		{}
		]
	}
]);