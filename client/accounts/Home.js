Template.MainNav.events({
	'click .btn-text': () => {
		Session.set('nav-toggle', 'open');
	}
})