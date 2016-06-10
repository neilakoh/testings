import {Posts} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.methods({
    'createNewPost'(vidTitle, vidEmbed, vidDescp, vidTag) {
      const createdAt = new Date();
      const post = {
        vidTitle,
        vidEmbed,
        vidDescp,
        vidTag,
        createdAt
      };
      Posts.insert(post);
    }
  });
}
