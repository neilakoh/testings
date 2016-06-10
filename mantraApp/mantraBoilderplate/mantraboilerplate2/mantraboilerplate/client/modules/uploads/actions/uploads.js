export default {
  upload({LocalState}, data, dest) {
    Meteor.call('uploadImage', data, dest, function (err) {
      if(err) {
        return LocalState.set('UPLOAD_ERROR', 'Upload Image Error');
      }
    });
  },
}
