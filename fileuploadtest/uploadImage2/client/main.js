import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.events({
  'change #myFileInput'(event, instance) {
    // var file = $('[name=myFileInput]').val()[0];
    var file = event.target.files[0];
    if (!file) return;

    var reader = new FileReader();
    reader.onload = function(event){
      var buffer = new Uint8Array(reader.result) // convert to binary
      console.log(buffer);
      Meteor.call('saveFile', buffer);
    }

    reader.readAsArrayBuffer(file);
  },
});

Template.hello.helpers({
  "display": function () {
    return Files.find();
  }
});

Meteor.subscribe("uploadTest");
