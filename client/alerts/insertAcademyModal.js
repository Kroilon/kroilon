Template.insertAcademyModal.events({
  'click #insertAcademy': function(e) {

    e.preventDefault();

    var academyName = $('#academyName').val();

    var data =
    {
      name: academyName,
      date: new Date()
    };

    //Meteor.call("addAcademy", data);
    Meteor.call('addAcademy', data, function(error, result) {
      if (error) {
        alert(error);
      } 
    });

    $("#academyName")[0].reset();

    Modal.hide('insertAcademyModal');
  }

});

