export default function ({Meteor, Collections}) {
  Meteor.methods({
    'createNewPost'(vidTitle, vidEmbed, vidDescp, vidTag) {
      const createdAt = new Date();
      const post = {
        vidTitle,
        vidEmbed,
        vidDescp,
        vidTag,
        createdAt,
        saving: true
      };
      Collections.Posts.insert(post);
    }
  });
}
