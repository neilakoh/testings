var queue = require('queue');

var q = queue();
var results = [];

q.push(function(cb) {
  results.push('two');
  cb();
});

q.stop()

q.push(
  function(cb) {
    results.push('four');
    cb();
  },
  function(cb) {
    results.push('five');
    cb();
  }
);

// q.timeout = 100;
//
// q.push(function(cb) {
//   setTimeout(function() {
//     console.log('slow job finished');
//     cb();
//   }, 200);
// });
//
// q.push(function(cb) {
//   console.log('forgot to execute callback');
// });
//
// q.on('timeout', function(next, job) {
//   console.log('job timed out:', job.toString().replace(/\n/g, ''));
//   next();
// });

q.start(function(err) {
  if(err) {
    return console.log(err);
  }
  return console.log('all done:', results);
});
