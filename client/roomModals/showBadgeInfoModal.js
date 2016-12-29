import { Template } from 'meteor/templating';
import { Badges } from '/imports/api/databasedriver.js';

Template.showBadgeInfoModal.helpers({

	badgeName() {

		let badges = this;
		//console.log("Description_: " + badges[0].name);
        return badges[0].name;  		
    },
	imageSource() {

		let badges = this;
		//console.log("Image_: " + badges[0].image);
        return badges[0].image; 
	},
	badgeDescription() {

		let badges = this;
		//console.log("Description_: " + badges[0].description);
        return badges[0].description;  		
    }


});
