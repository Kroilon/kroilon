import { Template } from 'meteor/templating';
import { Badges } from '/imports/api/databasedriver.js';
import { Rooms } from '/imports/api/databasedriver.js';

Template.showRoomInfoModal.helpers({
	roomName() {

		let rooms = this;
		//console.log("Image_: " + rooms[0].name);
        return rooms[0].name; 
	},
	imageSource() {

		let rooms = this;
		//console.log("Image_: " + rooms[0].image);
        return rooms[0].image; 
	},
	roomDescription() {

		let rooms = this;
		//console.log("Description_: " + rooms[0].description);
        return rooms[0].description;  		
    }


});
