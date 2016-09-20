Template.Rules.onCreated( function() {
  this.currentTab = new ReactiveVar( "specialCards" );
});

Template.Rules.helpers({
  tab: function() {
    return Template.instance().currentTab.get();
  },
  tabData: function() {
    var tab = Template.instance().currentTab.get();

    var data = {
      "specialCards": [
        { "name": "Seeking Wisdom: From Darwin to Munger", "creator": "Peter Bevelin" },
        { "name": "Seeking Wisdom: From Darwin to Munger", "creator": "Peter Bevelin" }
      ],
      "soldierCards": [
        { "name": "Seeking Wisdom: From Darwin to Munger", "creator": "Peter Bevelin" },
        { "name": "Seeking Wisdom: From Darwin to Munger", "creator": "Peter Bevelin" }
      ],
      "individualPoints": [
        { "name": "Seeking Wisdom: From Darwin to Munger", "creator": "Peter Bevelin" },
        { "name": "Seeking Wisdom: From Darwin to Munger", "creator": "Peter Bevelin" }
      ],
      "teamPoints": [
        { "name": "Seeking Wisdom: From Darwin to Munger", "creator": "Peter Bevelin" },
        { "name": "Seeking Wisdom: From Darwin to Munger", "creator": "Peter Bevelin" }
      ],
      "individualBadges": [
        { "name": "Seeking Wisdom: From Darwin to Munger", "creator": "Peter Bevelin" },
        { "name": "Seeking Wisdom: From Darwin to Munger", "creator": "Peter Bevelin" }
      ],
      "teamBadges": [
        { "name": "Seeking Wisdom: From Darwin to Munger", "creator": "Peter Bevelin" },
        { "name": "Seeking Wisdom: From Darwin to Munger", "creator": "Peter Bevelin" }
      ]
    };

    return data[ tab ];
  }
});

Template.Rules.events({
  'click .nav-tabs li': function( event, template ) {
    var currentTab = $( event.target ).closest( "li" );

    currentTab.addClass( "active" );
    $( ".nav-tabs li" ).not( currentTab ).removeClass( "active" );

    template.currentTab.set( currentTab.data( "template" ) );
  }
});