if (Meteor.isClient) {
  // Setup routing.
  Router.configure({
      layoutTemplate: 'layout',
      trackPageView: true
  });
  Router.route('/', function() {
      this.render('main');
  });

  Router.route('/about');

  Router.route('/contact');
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
