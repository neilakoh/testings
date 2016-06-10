import React from 'react';
import Page3 from '/client/modules/page_3/components/page_3.jsx';

const Home = () => (
  <div>
    <h1>Mantra Route Investigation about React-HELMET</h1>
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
      <hr/>
      <li>
        View <a href="/page1">Page 1</a>
        <p>- The component of this route is under the module "page_1"</p>
        <p>- This route is inside the core module</p>
        <p>- The head tag does not reload even if the component is in another module as long as the route is added inside the core module</p>
      </li>
      <hr/>
      <li>
        View <a href="/page2">Page 2</a>
        <p>- The component of this route is under the module "page_2"</p>
        <p>- This route is inside the module page_2</p>
        <p>- The head tag of this route reloads because the route link is added inside the core module and it needs to point to module page_2 to tap the route code.</p>
      </li>
      <hr/>
      <li>
        <Page3 />
        <p>- The component of this route is under the module "page_3"</p>
        <p>- This route is a component imported from the module "page_3"</p>
        <p>- Even though the component is added under the same module, but since it is used/imported under a different module that is why the head tag still reloads because the link has to point back to the module "page_3"</p>
        <p>- If you click Page 3 then click Page 3 Sub after, the head tag will not reload because the link and route are in the same module</p>
      </li>
    </ul>
  </div>
);

export default Home;
