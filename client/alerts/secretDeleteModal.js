Template.secretDeleteModal.events({
  'click #delete': function(e) {

    e.preventDefault();
    Meteor.call('deleteSecret', this._id, function(error, result) {
      if (error) {
        alert(error);
      }
    });

    Modal.hide('secretDeleteModal');
  }
});