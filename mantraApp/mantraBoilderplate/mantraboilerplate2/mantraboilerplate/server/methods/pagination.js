import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.methods({
    'getTotalPage'() {
      return Meteor.users.find().count();
    },
  });
}
