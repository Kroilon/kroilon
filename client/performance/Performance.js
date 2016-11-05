import {
    Academy
} from '/imports/api/databasedriver.js';

Template.Performance.helpers({

});

Template.Performance.events({
    '.profile click' (event) {
        event.preventDefault();

        $(".container").hide();
    }
});