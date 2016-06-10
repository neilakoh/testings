import {useDeps, composeAll, composeWithTracker, compose} from 'mantra-core';

import Interests from '../components/interests.jsx';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('interests').ready()) {
    const interests = Collections.Interests.find({},{sort: {createdAt: -1}}).fetch();
    onData(null, {interests});
  }
};

export const depsMapper = (context, actions) => ({
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Interests);
