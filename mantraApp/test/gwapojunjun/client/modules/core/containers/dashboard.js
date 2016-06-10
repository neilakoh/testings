import Dashboard from '/client/modules/core/components/dashboard/dashboard.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('SAVING_ERROR');
  onData(null, {error});

  return clearErrors;
};

export const junjun2 = (context, actions) => ({
  newPost: actions.dashboards.newPost,
  clearErrors: actions.dashboards.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(junjun2)
)(Dashboard);
