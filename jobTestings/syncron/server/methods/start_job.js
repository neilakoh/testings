import Job from '/lib/collections/job.js';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import CronJob from 'cron';
import CronJobManager from 'cron-job-manager';
import Fiber from 'fibers';

// var job = new CronJob.CronJob({
//   cronTime: '* * * * * *',
//   onTick: function() {
//     console.log('Document');
//     job.stop();
//   },
//   start: true,
// });

// const job = new CronJobManager(
//   'inapp',
//   '0 * * * * *',
//   function () {
//     console.log('running');
//   }, {
//     start: true,
//     completion: function () {
//       console.log('job has completed');
//     }
//   }
// );


export default function () {
  Meteor.methods({
    'executeJob'(id) {

      var job = new CronJob.CronJob({
        cronTime: '* * * * * *',
        onTick: function() {
          console.log('running');

          Fiber(function() {
            Job.update({_id: id}, {$set: {checked:true}}, Meteor.bindEnvironment(function(error, result) {
              if(result === 1) {
                console.log('New Record Found');
                console.log('Processing the new record: ', id);
              }

              if(result === 0) {
                console.log('New Record has been successfully processed');
              }
            }));
          }).run();

          job.stop();
        },
        start: true,
      });

    },
    // 'runJob'(id) {
    //
    //   var data = Job.find({_id: id}, {fields: {autorun:1, schedule:1}}).fetch()[0];
    //   console.log(data);
    //
    //   job = new CronJobManager(
    //     id,
    //     data.schedule,
    //     function () {
    //       console.log('running', data._id);
    //       console.log('schedule', data.schedule);
    //     }, {
    //       start: true,
    //       completion: function () {
    //         console.log('job has completed');
    //       }
    //     }
    //   );
    //
    //   console.log('start');
    //   job.start(id);
    // },
//
//     'stopJob'() {
//       console.log('stop');
//       job.stop();
//     },
//
    'insertJob'(jobName, jobSchedule) {
      Job.insert({
        name: jobName,
        schedule: ''+jobSchedule+'* * * * *',
        autorun: true,
        createdAt: new Date(),
        finished: false,
        lastUpdate: new Date(),
        checked: false,
      });
    }
  });
}
