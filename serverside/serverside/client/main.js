import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.main.created = function () {
    var template = this;
    Session.setDefault('paginationPage', 1);
    template.autorun(function () {
       var pageNumber = Session.get('paginationPage');
       Meteor.subscribe('col1', pageNumber);
    });
}

Template.main.events({
  'click .pagination': function (ev, template) {
       var target = $(ev.target);
       var pageNumber = target.attr('data-value');
       Session.set('paginationPage', pageNumber);
       console.log(Session.get('paginationPage'));
   }
});

Template.main.helpers({
  list: function () {
    // Meteor.call("getData", function (err, result) {
    //   Session.set("data", result);
    // });
    // return Session.get("data");

  }

  // getName: function (id) {
  //   Meteor.call("getNameFromCol2", id, function (err, result) {
  //     Session.set("data2", result);
  //   });
  //   return Session.get("data2");
  // }
});
