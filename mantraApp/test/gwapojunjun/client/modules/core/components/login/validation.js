import { Meteor } from 'meteor/meteor';
import { Class } from 'meteor/jagi:astronomy';

export const User = Class.create({
  name: 'users',
  collection: Meteor.users,
  fields: {
    username: String,
    password: String
  },

  methods: {
    validateUsername() {
      var usernameLengthError1 = 'Username must be greater than ' + this.username.length;
      var usernameLengthError2 = 'Username must be less than ' + this.username.length;
      var usernameLengthError3 = 'Username must not contain any spaces ';
      var result = true;
      if (/\s/g.test(this.username) === true) {
        return usernameLengthError3;
      }
      if (this.username.length < 3) {
        return usernameLengthError1;
      }
      if (this.username.length > 8) {
        return usernameLengthError2;
      }
      return result;
    },

    validatePassword() {
      var result = true;
      var passowrdLengthError1 = 'Password Too Short';
      var passowrdLengthError2 = 'Password Too Long';
      if (this.password.length < 3) {
        return passowrdLengthError1;
      }
      if (this.password.length > 10) {
        return passowrdLengthError2;
      }
      return result;
    }
  }
});
