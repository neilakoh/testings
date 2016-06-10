import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.events({
  'click #upload'() {
    var file = event.target.files[0];
    alert(file);
    // var file = event.target.files[0];
    // if (!file) return;
    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', '/uploadSomeWhere', true);
    // xhr.send(file);
  }
});

Template.hello.helpers({

});
