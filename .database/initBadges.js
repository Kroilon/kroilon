/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/initBadges.js")

*/

//Badges
db.badges.drop();
db.createCollection("badges");
db.badges.insert([
	{
		"name": "WATCH",
		"points": 20,
		"pointsType": "HP",
		"type": "Player",
		"image": "/academyBadges/watch.png",
		"percentage": 1.0,
		"description": "Três dias sem atrasos"
	},
	{
		"name": "TOP WATCH",
		"points": 50,
		"pointsType": "HP",
		"type": "Player",		
		"image": "/academyBadges/watch2.png",
		"percentage": 1.0,
		"description": "Dois badges WATCH"
	},
	{		
		"name": "MEGASHOWBIZ WATCH",
		"points": 100,
		"pointsType": "HP",
		"type": "Player",
		"image": "/academyBadges/watch2.png",
		"percentage": 1.0,
		"description": "Três badges WATCH"
	},
	{		
		"name": "TEAM PLAYER",
		"points": 50,
		"pointsType": "HP",
		"type": "Player",
		"image": "/academyBadges/team_player.png",
		"percentage": 1.0,
		"description": "Três vitórias em desafios de equipa"
	},
	{		
		"name": "TOP TEAM PLAYER",
		"points": 100,
		"pointsType": "HP",
		"type": "Player",
		"image": "/academyBadges/team_player.png",
		"percentage": 1.0,
		"description": "Dois badges TEAM PLAYER"
	},
	{		
		"name": "BOSS",
		"points": 50,
		"pointsType": "HP",
		"type": "Player",
		"image": "/academyBadges/boss.png",
		"percentage": 1.0,
		"description": "Três vezes como Small Unit Leader"
	},
	{		
		"name": "TOP BOSS",
		"points": 100,
		"pointsType": "HP",
		"type": "Player",
		"image": "/academyBadges/boss.png",
		"percentage": 1.0,
		"description": "Dois badges BOSS"
	},
	{		
		"name": "SONECA",
		"points": 0,
		"pointsType": "HP",
		"type": "Player",
		"image": "/academyBadges/soneca.png",
		"percentage": 0.95,
		"description": "Três atrasos"
	},
	{		
		"name": "HOUDINI",
		"points": 0,
		"pointsType": "HP",
		"type": "Player",
		"image": "/academyBadges/magician.png",
		"percentage": 1.0,
		"description": "Três dias como magician"
	},
	{		
		"name": "SWORD",
		"points": 0,
		"pointsType": "HP",
		"type": "Team",
		"image": "/academyBadges/sword.png",
		"percentage": 1.0,
		"description": "Podem ser jogadas cartas de Attackers"
	},
	{		
		"name": "GANDALF",
		"points": 0,
		"pointsType": "HP",
		"type": "Team",
		"image": "/academyBadges/gandalf.png",
		"percentage": 1.0,
		"description": "Podem ser jogadas cartas de Ganfalf"
	},
	{		
		"name": "BOAT",
		"points": 200,
		"pointsType": "HP",
		"type": "Team",
		"image": "/academyBadges/boat.png",
		"percentage": 1.0,
		"description": "O grupo pode usar canais aquáticos"
	},
	{		
		"name": "DOUBLE",
		"points": 0,
		"pointsType": "HP",
		"type": "Team",
		"image": "/academyBadges/double.png",
		"percentage": 2.0,
		"description": "Duplica os pontos ganhos no quarto"
	},
	{		
		"name": "FOOD",
		"points": 0,
		"pointsType": "HP",
		"type": "Team",
		"image": "/academyBadges/food.png",
		"percentage": 1.0,
		"description": "Restaura duas barras de energia"
	},
	{		
		"name": "MYSTERY",
		"points": 0,
		"pointsType": "HP",
		"type": "Team",
		"image": "/academyBadges/mystery.png",
		"percentage": 1.0,
		"description": "TBD"
	}
]);