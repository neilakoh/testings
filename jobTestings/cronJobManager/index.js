var CronJob = require('cron').CronJob;
// var job = new CronJob('0-59 * * * * 0-6', function() {
//   console.log('You will see this message every second');
// }, null, true, 'America/Los_Angeles');
var job = new CronJob({
  cronTime: '0-59 * * * * 0-6',
  onTick: function() {
    var completed = true;
    console.log('I am running');
    if(completed) {
      job.stop();
    }
  },
  start: false,
});
job.start();
