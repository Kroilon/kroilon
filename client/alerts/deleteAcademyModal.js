Template.deleteAcademyModal.events({
  'click #delete': function(e) {

    e.preventDefault();
    Meteor.call('removeAcademy', this._id, function(error, result) {
      if (error) {
        alert(error);
      }
    });

    Modal.hide('deleteAcademyModal');
  }
});