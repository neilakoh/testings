import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { SyncedCron } from 'meteor/percolate:synced-cron';
import './main.html';

Template.info.events({
  "click #startJob": function () {
    Meteor.call("runJob");
  },

  "click #stopJob": function () {
    Meteor.call("stopJob");
  },

  "click #pauseJob": function () {
    Meteor.call("pauseJob");
  }
});
