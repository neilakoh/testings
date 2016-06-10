import toastr from 'toastr';

export default {
  register({Meteor, LocalState, Accounts, FlowRouter}, regUsername, regEmail, regPassword, regConfPassword) {
    if (!regUsername || !regEmail || !regPassword || !regConfPassword) {
      toastr.error('Please fill out all the inputs', 'Signup Error!');
      return LocalState.set('SAVING_ERROR', 'Please fill out all the fields');
    }

    if (regPassword !== regConfPassword) {
      toastr.error('Password not match', 'Signup Error!');
      return LocalState.set('SAVING_ERROR', 'Password not Match');
    }

    Accounts.createUser({
      username: regUsername,
      email: regEmail,
      password: regPassword
    }, function (error) {
      if (error) {
        toastr.error(error.reason, 'Signup Error!');
        return LocalState.set('SAVING_ERROR', error.reason);
      }
      toastr.success('Successfully Registered', 'Signup Success!');
      FlowRouter.go('/dashboard');
    });
  },

  // e.g. clear local state
  clearErrors({LocalState}) {
    return LocalState.set('ERROR', null);
  }
};
