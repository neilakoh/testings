import React from 'react';
import Page3 from '/client/modules/page_3/components/page_3.jsx';

const Home = () => (
  <div>
    <h1>Mantra Route Investigation about Kadira DocHead</h1>
    <p>
      Welcome to Mantra 0.2.0.
    </p>
    <ul>
      <li>
        Read <a target="_blank" href="https://kadirahq.github.io/mantra/">spec</a>
      </li>
      <li>
        Learn <a target="_blank" href="https://github.com/sungwoncho/mantra-cli#commands">CLI</a>
      </li>

      <li>
        View <a href="/page1">Page 1</a>
      </li>

      <li>
        View <a href="/page2">Page 2</a>
      </li>

      <li>
        <Page3 />
      </li>
    </ul>
  </div>
);

export default Home;
