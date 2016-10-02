if(Meteor.isClient) {
    Accounts.onLogin(function () {
        FlowRouter.go('note-book');
    });

    Accounts.onLogout(function () {
        FlowRouter.go('home');
    });
}

FlowRouter.triggers.enter([function (context, redirect) {
    if(!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/',{
    name: 'home',
    action() {
        if(Meteor.userId()) {
            FlowRouter.go('note-book');
        }
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/note-book',{
        name: 'note-book',
        action() {
            BlazeLayout.render('MainLayout',{main: 'Notes'});
        }
});

FlowRouter.route('/note/:id', {
    name: 'note',
    action() {
        BlazeLayout.render('MainLayout',{main: 'NoteSingle'});
    }
});

FlowRouter.route('/menu', {
    name: 'menu',
    action() {
        BlazeLayout.render('MainLayout',{main: 'Menu'});
    }
});