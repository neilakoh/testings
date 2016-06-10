export default {
  startJob({LocalState, Meteor}, id) {
    Meteor.call('runJob', id, function (err, result) {
      if(err) {
        return LocalState.set('JOB_RUN_ERROR', err);
      }
      document.getElementById('logs').innerHTML = result;
    });
  },

  stopJob({LocalState, Meteor}) {
    Meteor.call('stopJob', function (err) {
      return LocalState.set('JOB_STOP_ERROR', err);
    });
  },

  addJob({LocalState, Meteor}, jobName, jobSchedule) {
    Meteor.call('insertJob', jobName, jobSchedule, function (err) {
      if (err) {
        return LocalState.set('JOB_INSERT_ERROR', err);
      }
    });
  },

  testing({Meteor, LocalState}, id) {
    Meteor.call('executeJob', id, function (err) {
      if (err) {
        return LocalState.set('JOB_RUN_ERROR', err);
      }
    });
  }
};
