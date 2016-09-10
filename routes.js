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

// Leaderboard_dash Page
FlowRouter.route('/leaderboard_dash', {
    name: '/leaderboard_dash',
    action() {
        BlazeLayout.render("AppLayout", {main: "Leaderboard_dash"});
    }
});

// Leaderboard_tops Page
FlowRouter.route('/leaderboard_tops', {
    name: '/leaderboard_tops',
    action() {
        BlazeLayout.render("AppLayout", {main: "Leaderboard_tops"});
    }
});
