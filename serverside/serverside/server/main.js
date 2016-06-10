Meteor.publish('col1', function (pageNumber) {
  var numberOfRecordsPerPage = 10;
  var skipRecords = numberOfRecordsPerPage * (pageNumber - 1);
  return Col1.find({

  }, {
       skip: skipRecords,
       limit: numberOfRecordsPerPage,
       fields: {name:1}
  });
});

Meteor.publish("posts-count", function () {
  var self = this;
  var count = 0;
  var initializing = true;

  // observeChanges only returns after the initial `added` callbacks
  // have run. Until then, we don't want to send a lot of
  // `self.changed()` messages - hence tracking the
  // `initializing` state.
  var handle = Col1.find({}).observeChanges({
    added: function (id) {
      count++;
      if (!initializing)
        self.changed("postsCount", 1, {count: count});
    },
    removed: function (id) {
      count--;
      self.changed("postsCount", 1, {count: count});
    }
    // don't care about changed
  });

  // Instead, we'll send one `self.added()` message right after
  // observeChanges has returned, and mark the subscription as
  // ready.
  initializing = false;
  self.added("postsCount", 1, {count: count});
  self.ready();

  // Stop observing the cursor when client unsubs.
  // Stopping a subscription automatically takes
  // care of sending the client any removed messages.
  self.onStop(function () {
    handle.stop();
  });
});

// client: declare collection to hold count object
PostsCount = new Mongo.Collection("postsCount");

// to get the total number of records and total number of pages
var doc = PostsCount.findOne(); //since we only publish one record with "d == 1", we don't need use query selectors
var count = 0, totalPages = 0;

if (doc) {
    count = doc.count;
    totalPages = Math.ceil(count / 10); //since page number cannot be floating point numbers..
}




// var x =[];
// Meteor.publishRelations('col1', function () {
//
//   this.cursor(Col1.find(), function (id, doc) {
//     x.push({"db1ID": id})
//
//     this.cursor(Col2.find({"col1Id": id}), function (id, doc) {
//       x.push({"db2Name": doc.name})
//     });
//
//   });
//   //console.log(x); //must return x to the client
//   return this.ready(x);
// });








Meteor.startup(() => {

  // Col1.find().fetch().map(function(err, result) {
  //   console.log(result);
  // });

  // var topPostsCursor = Col1.find();
  // var result = topPostsCursor.map(function(p) {
  //   return Col2.find({name: p.name}).count();
  // });
  //
  // console.log(result);




// var x = Col1.find().fetch();
// var data = [];
// for (var i in x) {
//   //console.log("This is Col1: ", x[i]._id);
//   //data.push("db2Name": y.name);
//   //console.log("This is Col2: ", y);
//   var y = Col2.find({col1Id: x[i]._id}).fetch()[0];
//   data.push({
//     "db1ID":x[i]._id,
//     "db2Name": y.name
//   });
// }
//
// console.log(data);

  // function makeid()
  // {
  //     var text = "";
  //     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //
  //     for( var i=0; i < 5; i++ )
  //         text += possible.charAt(Math.floor(Math.random() * possible.length));
  //
  //     return text;
  // }
  //
  // for(var i = 0; i < 100; i++) {
  //   Col1.insert({
  //     name: makeid()
  //   }, function (err, result) {
  //     if(!err) {
  //       Col2.insert({
  //         col1Id: result,
  //         name: makeid()
  //       });
  //     }
  //   })
  // }

});

// Meteor.methods({
//   // "getData": function () {
//   //   console.log(Col1.find().fetch());
//   //   Col1.find().fetch().map(function(err, result) {
//   //     console.log(result);
//   //   });
//   // }
//
//   "joinData": function (col1) {
//     var x = col1.find().fetch();
//     console.log(x);
//     return x;
//   }
// });
