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
		name: "WATCH",
		points: 20,
		type: "HP",
		percentage: 1.0,
		description: "Três dias sem atrasos",
		date: new Date()
	},
	{
		name: "TOP WATCH",
		points: 50,
		type: "HP",
		percentage: 1.0,
		description: "Dois badges WATCH",
		date: new Date()
	},
	{
		name: "MEGASHOWBIZ WATCH",
		points: 100,
		type: "HP",
		percentage: 1.0,
		description: "Três badges WATCH",
		date: new Date()
	},
	{
		name: "TEAM PLAYER",
		points: 50,
		type: "HP",
		percentage: 1.0,
		description: "Três vitórias em desafios de equipa",
		date: new Date()
	},
	{
		name: "TOP TEAM PLAYER",
		points: 100,
		type: "HP",
		percentage: 1.0,
		description: "Dois badges TEAM PLAYER",
		date: new Date()
	},
	{
		name: "BOSS",
		points: 50,
		type: "HP",
		percentage: 1.0,
		description: "Três vezes como Small Unit Leader",
		date: new Date()
	},
	{
		name: "TOP BOSS",
		points: 100,
		type: "HP",
		percentage: 1.0,
		description: "Dois badges BOSS",
		date: new Date()
	},
	{
		name: "SONECA",
		points: 0,
		type: "HP",
		percentage: 0.95,
		description: "Três atrasos",
		date: new Date()
	},
	{
		name: "HOUDINI",
		points: 0,
		type: "HP",
		percentage: 1.0,
		description: "Três dias como magician",
		date: new Date()
	},
	{
		name: "SWORD",
		points: 0,
		type: "HP",
		percentage: 1.0,
		description: "Podem ser jogadas cartas de Attackers",
		date: new Date()
	},
	{
		name: "GADALF",
		points: 0,
		type: "HP",
		percentage: 1.0,
		description: "Podem ser jogadas cartas de Ganfalf",
		date: new Date()
	},
	{
		name: "BOAT",
		points: 200,
		type: "HP",
		percentage: 1.0,
		description: "O grupo pode usar canais aquáticos",
		date: new Date()
	},
	{
		name: "DOUBLE",
		points: 0,
		type: "HP",
		percentage: 2.0,
		description: "Duplica os pontos ganhos no quarto",
		date: new Date()
	},
	{
		name: "FOOD",
		points: 0,
		type: "HP",
		percentage: 1.0,
		description: "Restaura duas barras de energia",
		date: new Date()
	},
	{
		name: "MYSTERY",
		points: 0,
		type: "HP",
		percentage: 1.0,
		description: "TBD",
		date: new Date()
	}
]);