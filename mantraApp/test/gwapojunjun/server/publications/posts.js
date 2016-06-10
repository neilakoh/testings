import {Posts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('posts.list', function () {
    const selector = {};
    const options = {
      fields: {}
    };
    return Posts.find();
  });
}
