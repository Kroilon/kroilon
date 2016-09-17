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
		discovered: false
	},
	{
		description: "Segundo segredo",
		nb: "nb21001",
		challenge: "Submeter Segredo",
		discovered: false
	},
	{
		description: "Terceiro segredo",
		nb: "nb21002",
		challenge: "Submeter Segredo",
		discovered: false
	},
	{
		description: "Quarto segredo",
		nb: "nb21003",
		challenge: "Submeter Segredo",
		discovered: false
	},
	{
		description: "Quinto segredo",
		nb: "nb21004",
		challenge: "Submeter Segredo",
		discovered: false
	},
	{
		description: "Sexto segredo",
		nb: "nb21005",
		challenge: "Submeter Segredo",
		discovered: false
	},
	{
		description: "Sétimo segredo",
		nb: "nb21001",
		challenge: "Submeter Segredo",
		discovered: false
	},
	{
		description: "Oitavo segredo",
		nb: "nb21001",
		challenge: "Submeter Segredo",
		discovered: false
	},
	{
		description: "Nono segredo",
		nb: "nb21003",
		challenge: "Submeter Segredo",
		discovered: false
	},
	{
		description: "Décimo segredo",
		nb: "nb21004",
		challenge: "Submeter Segredo",
		discovered: false
	},
	{
		description: "Décimo primeiro segredo",
		nb: "nb21000",
		challenge: "Submeter Segredo",
		discovered: false
	},
	{
		description: "Décimo segundo segredo",
		nb: "nb21004",
		challenge: "Submeter Segredo",
		discovered: false
	}]
);
