import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Page1 from '../components/page_1.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();

  onData(null, {});
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Page1);
