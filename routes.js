// Home Page
FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render("HomeLayout", {
            main: "Home"
        });
    }
});

// Character Table
FlowRouter.route('/characters/:page', {
    name: 'characters',
    action: function (params, queryParams) {
        BlazeLayout.render("CharactersLayout", {
            main: "Characters"
        });
    }
});

FlowRouter.route('/characters/:nb', {
    name: 'characters',
    action: function (params, queryParams) {
        BlazeLayout.render("CharactersLayout", {
            main: "Characters"
        });
    }
});

// Characters
FlowRouter.route('/characters', {
    name: 'characters',
    action() {
        BlazeLayout.render("CharactersLayout", {
            main: "Characters"
        });
    }
});

// Map
FlowRouter.route('/map', {
    name: 'map',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Map"
        });
    }
});

// Performance
FlowRouter.route('/performance', {
    name: '/performance',
    action() {
        BlazeLayout.render("PerformanceLayout", {
            main: "LeaderboardMainTabs"
        });
    }
});

// Management
FlowRouter.route('/management', {
    name: 'management',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Management"
        });
    }
});

// Kahoot
FlowRouter.route('/kahoot', {
    name: 'kahoot',
    action() {
        BlazeLayout.render("KahootLayout", {
            main: "Kahoot"
        });
    }
});

// Story
FlowRouter.route('/story', {
    name: '/story',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Story"
        });
    }
});

// Rules
FlowRouter.route('/rules', {
    name: '/rules',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Rules"
        });
    }
});

// Secrets
FlowRouter.route('/secrets', {
    name: '/secrets',
    action() {
        BlazeLayout.render("AppLayout", {
            main: "Secrets"
        });
    }
});