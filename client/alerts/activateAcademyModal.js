Template.activateAcademyModal.events({
  'click #activate': function(e) {

    e.preventDefault();
    Meteor.call('activateAcademy', this._id, function(error, result) {
      if (error) {
        alert(error);
      }
    });

    Modal.hide('activateAcademyModal');
  }
});