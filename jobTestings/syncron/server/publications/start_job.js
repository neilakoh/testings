import {Job} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

export default function () {
  Meteor.publish('jobList', function () {
    return Job.find();
  });
}
