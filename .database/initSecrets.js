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
		challenge: "Submeter Segredo",
		discovered: 0
	},
	{
		description: "Segundo segredo",
		nb: "nb21001",
		challenge: "Submeter Segredo",
		discovered: 0
	},
	{
		description: "Terceiro segredo",
		nb: "nb21002",
		challenge: "Submeter Segredo",
		discovered: 0
	},
	{
		description: "Quarto segredo",
		nb: "nb21003",
		challenge: "Submeter Segredo",
		discovered: 0
	},
	{
		description: "Quinto segredo",
		nb: "nb21004",
		challenge: "Submeter Segredo",
		discovered: 0
	},
	{
		description: "Sexto segredo",
		nb: "nb21005",
		challenge: "Submeter Segredo",
		discovered: 0
	},
	{
		description: "Sétimo segredo",
		nb: "nb21001",
		challenge: "Submeter Segredo",
		discovered: 0
	},
	{
		description: "Oitavo segredo",
		nb: "nb21001",
		challenge: "Submeter Segredo",
		discovered: 0
	},
	{
		description: "Nono segredo",
		nb: "nb21003",
		challenge: "Submeter Segredo",
		discovered: 0
	},
	{
		description: "Décimo segredo",
		nb: "nb21004",
		challenge: "Submeter Segredo",
		discovered: 0
	},
	{
		description: "Décimo primeiro segredo",
		nb: "nb21000",
		challenge: "Submeter Segredo",
		discovered: 0
	},
	{
		description: "Décimo segundo segredo",
		nb: "nb21004",
		challenge: "Submeter Segredo",
		discovered: 0
	}]
);
