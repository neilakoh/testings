import {Interests} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';

export default function () {
  Meteor.publish('interests', function () {
    return Interests.find();
  });
}
