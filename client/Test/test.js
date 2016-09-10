import { Template } from 'meteor/templating';
import { Tasks } from '/imports/api/tasks.js';
import '../pages/Test.html';

//console.log('aa');
 
Template.body.helpers({
  tasks() {
    return Tasks.find({});
  },
});