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
		"day": 2,
    	"description": "You\u2019re doing great and reached the Project Room. This is where everything is planned so you have to retrieve any plans you can find. Wait\u2026 there are some underwater secret tunnels. Hurry up and grab your team badges to unlock your team\u2019s full potential. Unlock the boat badge to enter the tunnels. Don\u2019t forget to grow your Intel and Healing power to better defend your team."
	},
	{
		"day": 1,
    	"description": "You\u2019re entering the fortress through a tunnel in the northeast corner of the island. Thank God the fortress was formerly a place of Cristian cult filled with monks and nuns. A small group of survivors from that era will escort you and your team to the Cockroach Entry. If you\u2019ve completed your initial auto skill evaluation you\u2019ll be starting with some Knowledge Points. Be sure to volunteer to to existing missions sot that you can help your team in this initial times. Beware of the guards as they are very well trained and you want to keep your surprise advantage."
	},
	{
		"day": 3,
    	"description": "Too bad about the tunnels\u2026 but there\u2019s no problem. You\u2019re at the Wondering Hall and your first big decision is right in front of you\u2026 The Death Corridor or the Adolph Room? You have to decide betwen the north passage, full of energy refilles, and the south passage, a shorter but full of surprises route. Decide wisely because failing to pass the corridor will harm your team with the loss of team points. On the other hand, passing through the corridor will make your team richer and faster."
	},
	{
		"day": 4,
    	"description": "The unpredictable Adolph Room was named after the World War II ruthless German leader. Many prisoners are interrogated til death in this room and you're adviced to be very careful. There\u2019s a pit across the room stopping your from advancing to the lake in the middle of the fortress, unless of course if you have already unlocked the boat team badge.\nThe only way to go is to move to the Stormilor Hall."
	},
	{
		"day": 5,
    	"description": "The Stormilor Hall is the gateway through to the arena and the arena is where the games are played. Entering the Stormilor Hall will automatically grant you access to a huge amount of energy and Experience (points). Also and very important for this room, unlock the Atacker team badge so that players can use their Atacker's card and double any points earned in this area of the fortress."
	},
	{
		"day": 6,
    	"description": "Ah... the Kalu Hall... a place of acient Kroilon art and tradicional music. Move your way through this pararel universe of great old feats, as a team, maintaining your stealth mode, and find your way through to the south side of the fortress. Beware of the mighty Captain Cook... always there to undermine your team's hability to move forward."
	},
	{
		"day": 7,
    	"description": "You're finally in the south side of the fortress. The team gathered a huge amount of energy and gear, alowing you to face the final challenges in a more relaxed maner. Focus on the final goal. With only 4 more days in front of you it is crutial that you make a good decision and move in the right direction."
	},
	{
		"day": 8,
    	"description": "Welcome to the Dungeons. Dangerous as all dungeons are, this one as an extra challenge... this air is not fully breadable and you cannot stay long. Pass the wells and cans that will grant you access to the getaway tunnel, and boost your team directly throught the room where Diaz Krez is.\nA surprise team badge is available. Decide (wisely) if you want to go for it."
	},
	{
		"day": 9,
    	"description": "After failing to access the tunnel, the group had to run down into the Almusther Room... closer and closer to the Performanthor Room where Diz Krez is waiting for our final battle. The energy levels are high but the group needs to increase team knowledge to beat the evil wizard. Use individual reflection wisely."
	},
	{
		"day": 10,
    	"description": "Normingor (B) was the only way to go. Beware of party distractions. Do not, I repeat, do not let you fool and focus on your goals. This room is known for its divide and conquer features. Surpass the adversities and collect all you need to move to the final room. The adventure is almost finished but you need to keep you concentration levels all time."
	},
	{
		"day": 11,
    	"description": "Finally the Performanthor Room. The final confrontation with Diz Krez is imminent and there's no way out. All the sacrifices are finally worth it..."
	},
	{
		"day": 12,
		"description": "Day 12. To be continued..."
	}
]);