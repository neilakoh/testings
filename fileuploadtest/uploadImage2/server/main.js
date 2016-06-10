import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.publish('uploadTest', function(){
    return Files.find();
  });
});

Meteor.methods({
  'saveFile': function(buffer){
    Files.insert({data:buffer});
  }
});
