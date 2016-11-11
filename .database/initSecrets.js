/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/initSecrets.js")

*/

//Secrets
db.secrets.drop();
db.createCollection("secrets");
db.secrets.insert([
	{
		date: new Date(),
		nb: "nb21000",
		name:"Afonso Correia Sousa",
		description: "Primeiro segredo",
		challenge: "Submit secret",
		discovered: false
	},
	{
		date: new Date(),
		nb: "nb21001",
		name:"Anabela Araújo Rodrigues",
		description: "Segundo segredo",
		challenge: "Submit secret",
		discovered: false
	},
	{
		date: new Date(),
		nb: "nb21002",
		name:"André Gonçalo Ferreira",
		description: "Terceiro segredo",
		challenge: "Submit secret",
		discovered: false		
	},
	{
		date: new Date(),
		nb: "nb21003",
		name:"Andreia Alves",
		description: "Quarto segredo",		
		challenge: "Submit secret",
		discovered: false		
	},
	{
		date: new Date(), 
		nb: "nb21004",
		name:"Catarina Oliveira",
		description: "Quinto segredo",		
		challenge: "Submit secret",
		discovered: false		
	},
	{
		date: new Date(), 
		nb: "nb21005",
		name:"Fernando Garcia",
		description: "Sexto segredo",		
		challenge: "Submit secret",
		discovered: false		
	},
	{
		
		date: new Date(),
		nb: "nb21001",
		name:"Anabela Araújo Rodrigues",
		description: "Sétimo segredo",		
		challenge: "Submit secret",
		discovered: false		
	},
	{
		date: new Date(), 
		nb: "nb21001",
		name:"Anabela Araújo Rodrigues",
		description: "Oitavo segredo",		
		challenge: "Submit secret",
		discovered: false		
	},
	{
		date: new Date(), 
		nb: "nb21003",
		name:"Andreia Alves",
		description: "Nono segredo",		
		challenge: "Submit secret",
		discovered: false		
	},
	{
		date: new Date(),
		nb: "nb21004",
		name:"Catarina Oliveira",
		description: "Décimo segredo",		
		challenge: "Submit secret",
		discovered: false		
	},
	{
		date: new Date(), 
		nb: "nb21000",
		name:"Afonso Correia Sousa",
		description: "Décimo primeiro segredo",		
		challenge: "Submit secret",
		discovered: false		
	},
	{
		date: new Date(), 
		nb: "nb21004",
		name:"Catarina Oliveira",
		description: "Décimo segundo segredo",		
		challenge: "Submit secret",
		discovered: false		
	}]
);
