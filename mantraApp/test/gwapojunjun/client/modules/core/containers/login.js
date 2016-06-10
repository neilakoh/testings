import Login from '/client/modules/core/components/login/login.jsx';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState} = context();
  const error = LocalState.get('SAVING_ERROR');
  onData(null, {error});

  // clearErrors when unmounting the component
  return clearErrors;
};

export const junjun = (context, actions) => ({
  login: actions.logins.login,
  register: actions.registers.register,
  clearErrors: actions.logins.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(junjun)
)(Login);
