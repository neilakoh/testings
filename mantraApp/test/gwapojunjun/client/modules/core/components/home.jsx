import React from 'react';
var ReactMarkdown = require('react-markdown');

const Home = ({posts}) => (
  <div className='postlist'>
    <ul>
      {posts.map(post => (
        <div key={post._id}>
        <ReactMarkdown source={post.vidEmbed} />
        Title: {post.vidTitle}<br/>
        Description: {post.vidDescp}<br/>

        </div>
      ))}
    </ul>
  </div>
);

export default Home;
