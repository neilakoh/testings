import toastr from 'toastr';

export default {
  newPost({Meteor, LocalState, FlowRouter}, vidTitle, vidEmbed, vidDescp, vidTag) {
    LocalState.set('SAVING_ERROR', null);
    if (!vidTitle || !vidEmbed || !vidDescp || !vidTag) {
      toastr.error('Please fill out the boxes', 'Login Error!');
      return LocalState.set('SAVING_ERROR', 'Title & Content are required!');
    }

    Meteor.call('createNewPost', vidTitle, vidEmbed, vidDescp, vidTag, (err) => {
      if (err) {
        return LocalState.set('SAVING_ERROR', err.message);
      }
    });
  },

  // e.g. clear local state
  clearErrors({LocalState}) {
    return LocalState.set('ERROR', null);
  }
};
