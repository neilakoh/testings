import { Meteor } from 'meteor/meteor';
import { SyncCron } from 'meteor/percolate:synced-cron';

Meteor.startup(() => {

});

Meteor.methods({
  "runJob": function () {
    SyncedCron.add({
      name: 'In-App Purchase Validation',
      schedule: function(parser) {
        return parser.text('every 2 secs');
      },
      job: function() {
        return console.log('done');
        console.log('Processing In-App Validation');
      }
    });
    SyncedCron.start();
  },

  "stopJob": function () {
    SyncedCron.stop();
  },

  "pauseJob": function () {
    SyncedCron.pause();
  }
});
