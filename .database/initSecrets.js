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
		description: "Primeiro segredo",
		nb: "nb21000",
		name:"Afonso Correia Sousa",
		challenge: "Submeter Segredo",
		discovered: false,
		date:new Date()
	},
	{
		description: "Segundo segredo",
		nb: "nb21001",
		name:"Anabela Araújo Rodrigues",
		challenge: "Submeter Segredo",
		discovered: false,
		date:new Date()
	},
	{
		description: "Terceiro segredo",
		nb: "nb21002",
		name:"André Gonçalo Ferreira",
		challenge: "Submeter Segredo",
		discovered: false,
		date:new Date()
	},
	{
		description: "Quarto segredo",
		nb: "nb21003",
		name:"Andreia Alves",
		challenge: "Submeter Segredo",
		discovered: false,
		date:new Date()
	},
	{
		description: "Quinto segredo",
		nb: "nb21004",
		name:"Catarina Oliveira",
		challenge: "Submeter Segredo",
		discovered: false,
		date:new Date()
	},
	{
		description: "Sexto segredo",
		nb: "nb21005",
		name:"Fernando Garcia",
		challenge: "Submeter Segredo",
		discovered: false,
		date:new Date()
	},
	{
		description: "Sétimo segredo",
		nb: "nb21001",
		name:"Anabela Araújo Rodrigues",
		challenge: "Submeter Segredo",
		discovered: false,
		date:new Date()
	},
	{
		description: "Oitavo segredo",
		nb: "nb21001",
		name:"Anabela Araújo Rodrigues",
		challenge: "Submeter Segredo",
		discovered: false,
		date:new Date()
	},
	{
		description: "Nono segredo",
		nb: "nb21003",
		name:"Andreia Alves",
		challenge: "Submeter Segredo",
		discovered: false,
		date:new Date()
	},
	{
		description: "Décimo segredo",
		nb: "nb21004",
		name:"Catarina Oliveira",
		challenge: "Submeter Segredo",
		discovered: false,
		date:new Date()
	},
	{
		description: "Décimo primeiro segredo",
		nb: "nb21000",
		name:"Afonso Correia Sousa",
		challenge: "Submeter Segredo",
		discovered: false,
		date:new Date()
	},
	{
		description: "Décimo segundo segredo",
		nb: "nb21004",
		name:"Catarina Oliveira",
		challenge: "Submeter Segredo",
		discovered: false,
		date:new Date()
	}]
);
