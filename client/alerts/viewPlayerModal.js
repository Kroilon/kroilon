Template.registerHelper('getBusinessUnit', function(unit) {
  
  var businessUnit = ""; 

  switch (unit) {
    case "CF":
        businessUnit = "Celfocus";
        break;
    case "GTE":
        businessUnit = "Government, Transport and Energy";
        break;
    case "FSI":
        businessUnit = "Financial Services";
        break;
    case "VC":
        businessUnit = "Venture Capital";
        break;
    case "NT":
        businessUnit = "NeoTalent";
        break;
    case "IMS":
        businessUnit = "IMS";
        break;
    default:
        businessUnit = "";
  }

  return businessUnit;

});