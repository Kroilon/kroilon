// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {main: "Home"});
    }
});

// Home Page
FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
        BlazeLayout.render("AppLayout", {main: "Dashboard"});
    }
});

// Characters
FlowRouter.route('/characters', {
    name: 'characters',
    action() {
      BlazeLayout.render("CharactersLayout", {main: "Characters"});
    }
});
// Map
FlowRouter.route('/map', {
    name: 'map',
    action() {
      BlazeLayout.render("MapLayout", {main: "Map"});
    }
});

// Characters
FlowRouter.route('/test', {
    name: 'test',
    action() {
      BlazeLayout.render("TestLayout", {main: "Test"});
    }
});