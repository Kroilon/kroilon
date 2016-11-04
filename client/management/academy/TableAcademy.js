import { Template } from 'meteor/templating';
import { Academy } from '/imports/api/databasedriver.js';

Template.TableAcademy.helpers({
  
  academies() {
    var academies = Academy.find({}).fetch();
    return academies;
  },

  isActive: function (flag) {
      return flag !== true
  }

});


Template.TableAcademy.events({ 

  'click #addAcademy' (event){    
    event.preventDefault();  
    Modal.show('insertAcademyModal', this);
  },  

  'click #deleteAcademy' (event){    
    event.preventDefault();  

    if (Academy.find().count() === 1) {
      alert('Not possible to delete last academy!');
    } else {
      Modal.show('deleteAcademyModal', this);
    }

  }

});