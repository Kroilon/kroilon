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
	    "dailyDecision": "Move forward",
	    "description": "Autoavaliação (-50 KP)\nAvatar + EXCEL (-50 HP)\n\nSegredos: 200 HP\nDaily kahoot: 100 / 50 / 25 KP\nPontualidade: +/-50 PE / -10 HP\nNinjamotherfucker 50 XP\nTeam balance: 200 PE\nMarshmallow challenge: 400 XP\nUnlock BOAT badge (+ 50% das equipas >30cm) \nTeam leader: 50 HP",
	    "image": null,
	    "badges": [
	        {}
	    ]
	},
	{
		"name": "Project Room",
	    "dailyDecision": "South Tunnel vs. Wondering Hall vs. North Tunnel",
	    "description": "Segredos: 200 HP / 50 HP\nDaily kahoot: 100 / 50 / 25 KP\nDaily ninja: -25 HP / 50 XP\nDaily scrum: 50 PE\nPontualidade: +/-50 PE / -10 HP\nEmpathy map: 50 PE",
	    "image": null,
	    "badges": [
	        {
	            "name": "BOAT",
	            "locked": false
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
		"name": "Wondering Wall",
	    "dailyDecision": "Adolph Room vs. Death Corridor",
	    "description": " ",
	    "image": null,
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
	    "dailyDecision": "Move forward",
	    "description": " ",
	    "image": null,
	    "badges": [
	        {
	            "name": "BOAT",
	            "locked": false
	        }
	    ]
	},
	{
		"name": "Stormilor Hall",
	    "dailyDecision": "",
	    "description": " ",
	    "badges": [
	        {}
	    ]
	},
	{
		"name": "Diaz Krez Arena",
	    "dailyDecision": "Diaz Krez Arena decision...",
	    "description": " ",
	    "image": null,
	    "badges": [
	        {
	            "name": "FOOD",
	            "locked": false
	        }
	    ]
	},
	{
		"name": "Kalu Hall",
	    "dailyDecision": "Stormilor Dungeon vs. Ristar Room",
	    "description": "  ",
	    "image": null,
	    "badges": [
	        {
	            "name": "FOOD",
	            "locked": false
	        }
	    ]
	},
	{
		"name": "Ristar Room",
	    "dailyDecision": "Normingor Room A vs. Normingor Room B vs. Stormilor Dungeon",
	    "description": "Daily kahoot: 100/50/25 KP\nDaily ninja: -25 HP/50 XP\nDaily scrum: 2 x 25 PE\n\nTodos a horas: +50 PE\n5 ou mais atrasos: -50 PE\n1 atraso: -10 HP\n\nCrossing paths: 400 XP\n\nProtótipos (>10): 50 PE",
	    "image": null,
	    "badges": [
	        {
	            "name": "FOOD",
	            "locked": true
	        }
	    ]
	},
	{		
		"name": "Stormilor Dungeons",
	    "dailyDecision": "Ristar Room vs. Almusther Room vs. Rerformanthor Room (tunnel)",
	    "description": "Daily kahoot: 100/50/25 KP\nDaily ninja: -25 HP/50 XP\nDaily scrum: 2 x 25 PE\n\nTodos a horas: +50 PE\n5 ou mais atrasos: -50 PE\n1 atraso: -10 HP\n\nLunch\t400/200/0 XP\n\nWells & cans\t600/200/50/0 XP\n4 bolas/equipa » Unlock MISTERY badge",
	    "badges": [
	        {}
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
	    "dailyDecision": "Diktaur Room vs. Almusther Room vs. Performanthor Room",
	    "description": "Daily kahoot: 100/50/25 KP\nDaily ninja: -25 HP/50 XP\nDaily scrum: 2 x 25 PE\n\nTodos a horas: +50 PE\n5 ou mais atrasos: -50 PE\n1 atraso: -10 HP\n\nDivide & conquer: 400 XP",
	    "image": null,
	    "badges": [
	        {}
	    ]
	},
	{
		"name": "Almusther Room",
	    "dailyDecision": "Stormilor Dungeon vs. Normingor Room B vs. Performanthor Room",
	    "description": "Daily kahoot: 100/50/25 KP\nDaily ninja: -25 HP/25 XP\nDaily scrum: 2 x 25 PE\n\nTodos a horas: +50 PE\n5 ou mais atrasos: -50 PE\n1 atraso: -10 HP\n\nLe coq sportif: 400/100 XP\n\nSecret chambers\nMais de 75% dos soldados com votos: 100 PE\nCada voto: 50 KP",
	    "image": null,
	    "badges": [
	        {
	            "name": "FOOD",
	            "locked": false
	        }
	    ]
	},
	{
		"name": "Performanthor Room",
	    "dailyDecision": "Fight!",
	    "description": "Daily ninja: 100 XP\n\nLipsync: 1.000/600/300 XP\n\nApresentadores: 500 KP",
	    "image": null,
	    "badges": [
	        {}
    	]
	}
]);