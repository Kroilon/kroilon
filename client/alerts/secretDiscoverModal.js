Template.secretDiscoverModal.events({
  'click #delete': function(e) {

    e.preventDefault();
    Meteor.call('discoverSecret', this._id, function(error, result) {
      if (error) {
        alert(error);
      } 
    });

    Modal.hide('secretDiscoverModal');
  }
});