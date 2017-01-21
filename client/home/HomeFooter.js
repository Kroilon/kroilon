import { Template } from 'meteor/templating';

Template.HomeFooter.helpers({
  academyYear() {
    let currentDate = new Date();
	let currentYear = currentDate.getFullYear(); 
    return currentYear;
  }

});
