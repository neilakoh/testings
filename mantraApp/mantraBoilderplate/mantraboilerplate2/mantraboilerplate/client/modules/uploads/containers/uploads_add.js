import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import UploadsAdd from '../components/uploads_add.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections, LocalState} = context();
  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  upload: actions.uploads.upload,
  context: () => context,
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(UploadsAdd);
