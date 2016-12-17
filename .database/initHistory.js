/*
Run file to Init the database with dummy data

Do
Step 1 -> meteor mongo
Step 2 -> use meteor
Step 3-> load(".database/initHistory.js")

*/

//Rooms
db.history.drop();
db.createCollection("history");
db.history.insert([
	{
		"day": 1,
		"description": "You’re entering the fortress through a tunnel in the northeast corner of the island. Thank God the fortress was formerly a place of Cristian cult filled with monks and nuns. A small group of survivors from that era will escort you and your team to the Cockroach Entry. If you’ve completed your initial auto skill evaluation you’ll be starting with some Knowledge Points. Be sure to volunteer to help your team in this initial times. Beware of the guards as they are very well trained and you want to keep your surprise advantage."
	},
	{
		"day": 2,
		"description": "You’re doing great and reached the Project Room. This is where everything is planned so you have to retrieve any plans you can find. Wait… there are some underwater secret tunnels. Hurry up and grab your team badges to unlock your team’s full potential. Unlock the boat badge to enter the tunnels. Don’t forget to grow your Intel and Healing power to better defend your team."
	},
	{
		"day": 3,
		"description": "Too bad about the tunnels… but there’s no problem. You’re at the Wondering Hall and your first big decision is right in front of you… The Death Corridor or the Adolph Room? You have to be sure because failing to pass the corridor will harm your team (lose 100 team points). On the other hand, passing through the corridor will make your team win 100 team points."
	},
	{
		"day": 4,
		"description": "Welcome to the unpredictable Adolph Room. Named after the World War II ruthless German leader, this room is where prisoners are interrogated many times until death. There’s a pit across the room stopping your from ..."
	},
	{
		"day": 5,
		"description": "Day 5. To be continued..."
	},
	{
		"day": 6,
		"description": "Day 6. To be continued..."
	},
	{
		"day": 7,
		"description": "Day 7. To be continued..."
	},
	{
		"day": 8,
		"description": "Day 8. To be continued..."
	},
	{
		"day": 9,
		"description": "Day 9. To be continued..."
	},
	{
		"day": 10,
		"description": "Day 10. To be continued..."
	},
	{
		"day": 11,
		"description": "Day 11. To be continued..."
	},
	{
		"day": 12,
		"description": "Day 12. To be continued..."
	}
]);