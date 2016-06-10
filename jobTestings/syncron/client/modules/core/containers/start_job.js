import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import StartJob from '../components/home.jsx';

export const composer = ({context, testing}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('jobList').ready()) {
    const initializing = true;
    const tst = Collections.Job.find({checked: false}).observeChanges({
      added: function (id, doc) {
        if (initializing) {
          const observe = id;
          onData(null, {observe});
        }
      }
    });
    const jobs = Collections.Job.find().fetch();
    onData(null, {jobs, tst});
  }
};

export const depsMapper = (context, actions) => ({
  startJob: actions.startJob.startJob,
  stopJob: actions.startJob.stopJob,
  addJob: actions.startJob.addJob,
  testing: actions.startJob.testing,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(StartJob);
