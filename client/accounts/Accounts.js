var myLogoutFunc = function () {
	//console.log('Hello');
	Session.set('nav-toggle', '');
	FlowRouter.go('/');
}

AccountsTemplates.configure({
	//Behaviour
	confirmPassword: false,
	
	// Privacy Policy and Terms of Use
    privacyUrl: 'privacy',

    // Hooks
    onLogoutHook: myLogoutFunc
});

AccountsTemplates.addFields([
	{
		_id: 'firstName',
		type: 'text',
		displayName: 'Avatar Name',
		required: true,
		re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/, 
		errStr: 'At least one 1 digit, 1 lowercase and 1 uppercase',
	}, {
		_id: 'profession',
		type: 'select',
		displayName: 'Profession',
		select: [
			{
				text: 'Developer',
				value: 'developer'
			}, {
				text: 'Analyst',
				value: 'analyst'
			}, {
				text: 'Designer',
				value: 'designer' 
			} 
		] 
	}
]);