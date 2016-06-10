Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', function() {
    this.render('hello');
});

// Router.route('/uploadFile', {
//   waitOn: function (req,res) {
//     console.log(req);
//   }
// });

Router.route('/uploadFile', function () {
  
});
