DataBenchmark = new Meteor.Collection("databenchmarks")
if (Meteor.isClient) {

  Session.set("limit", 10);

  Template.hello.helpers({
    data: function () {
      return DataBenchmark.find();
    }
  });

  Template.hello.events({
    "click #loadmore": function () {
      Session.set('limit', Session.get('limit') + 10);
      console.log('Loading '+Session.get("limit")+' more data');
    }
  });

  Meteor.autorun(function () {
    Meteor.subscribe('databenchmarks', Session.get("limit"));
  });
}

if (Meteor.isServer) {
  Meteor.publish('databenchmarks', function(limit) {
    return DataBenchmark.find({}, {limit: limit}).map(function(result){
      
    });
  });
}
