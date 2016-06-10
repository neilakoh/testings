methods = {
  joinTwoCollections: function (col1) {
    Meteor.call("joinData", col1, function (err, result) {
      if(!err) {
        console.log(result);
        Session.set("join", result);
      } else {
        console.log(err);
      }
    });
    return Session.get("join");
    // var x = col1.find({}, {"fields": {field1:1}}).fetch();
    // return x;
    // var result = [];
    // for (var i in x) {
    //   var y = col2.find({field2: x[i]._id}).fetch()[0];
    //   data.push({
    //     "field1":x[i]._id,
    //     "field2": y.name
    //   });
    // }
    // return result;
  }
}
