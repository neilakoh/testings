import toastr from 'toastr';

export default {
  login({Meteor, LocalState, FlowRouter}, uname, upass) {
    LocalState.set('SAVING_ERROR', null);
    if (!uname || !upass) {
      toastr.error('Username or Password does not exist', 'Login Error!');
      return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    }

    Meteor.loginWithPassword(uname, upass, function (error) {
      if (error) {
        toastr.error(error.reason, 'Signup Error!');
        return LocalState.set('SAVING_ERROR', 'Unable to login');
      }
      toastr.success('Successfully Logged In', 'Login Success!');
      FlowRouter.go('/dashboard');
    });
  },

  // e.g. clear local state
  clearErrors({LocalState}) {
    return LocalState.set('ERROR', null);
  }
};
