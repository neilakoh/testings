Router.configure({
    layoutTemplate: 'main'
});
Router.route('/', function() {
    this.render('login');
});

Router.route('/register');
