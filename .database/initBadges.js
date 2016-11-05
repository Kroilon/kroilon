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
		type: "Player",
		name: "WATCH",
		points: 20,
		pointsType: "HP",
		image: '',
		percentage: 1.0,
		description: "Três dias sem atrasos"
	},
	{
		type: "Player",
		name: "TOP WATCH",
		points: 50,
		pointsType: "HP",
		image: '',
		percentage: 1.0,
		description: "Dois badges WATCH"
	},
	{
		type: "Player",
		name: "MEGASHOWBIZ WATCH",
		points: 100,
		pointsType: "HP",
		image: '',
		percentage: 1.0,
		description: "Três badges WATCH"
	},
	{
		type: "Player",
		name: "TEAM PLAYER",
		points: 50,
		pointsType: "HP",
		image: '',
		percentage: 1.0,
		description: "Três vitórias em desafios de equipa"
	},
	{
		type: "Player",
		name: "TOP TEAM PLAYER",
		points: 100,
		pointsType: "HP",
		image: '',
		percentage: 1.0,
		description: "Dois badges TEAM PLAYER"
	},
	{
		type: "Player",
		name: "BOSS",
		points: 50,
		pointsType: "HP",
		image: '',
		percentage: 1.0,
		description: "Três vezes como Small Unit Leader"
	},
	{
		type: "Player",
		name: "TOP BOSS",
		points: 100,
		pointsType: "HP",
		image: '',
		percentage: 1.0,
		description: "Dois badges BOSS"
	},
	{
		type: "Player",
		name: "SONECA",
		points: 0,
		pointsType: "HP",
		image: '',
		percentage: 0.95,
		description: "Três atrasos"
	},
	{
		type: "Player",
		name: "HOUDINI",
		points: 0,
		pointsType: "HP",
		image: '',
		percentage: 1.0,
		description: "Três dias como magician"
	},
	{
		type: "Team",
		name: "SWORD",
		points: 0,
		pointsType: "HP",
		image: '',
		percentage: 1.0,
		description: "Podem ser jogadas cartas de Attackers"
	},
	{
		type: "Team",
		name: "GANDALF",
		points: 0,
		pointsType: "HP",
		image: '',
		percentage: 1.0,
		description: "Podem ser jogadas cartas de Ganfalf"
	},
	{
		type: "Team",
		name: "BOAT",
		points: 200,
		pointsType: "HP",
		image: '',
		percentage: 1.0,
		description: "O grupo pode usar canais aquáticos"
	},
	{
		type: "Team",
		name: "DOUBLE",
		points: 0,
		pointsType: "HP",
		image: '',
		percentage: 2.0,
		description: "Duplica os pontos ganhos no quarto"
	},
	{
		type: "Team",
		name: "FOOD",
		points: 0,
		pointsType: "HP",
		image: '',
		percentage: 1.0,
		description: "Restaura duas barras de energia"
	},
	{
		type: "Team",
		name: "MYSTERY",
		points: 0,
		pointsType: "HP",
		image: '',
		percentage: 1.0,
		description: "TBD"
	}
]);