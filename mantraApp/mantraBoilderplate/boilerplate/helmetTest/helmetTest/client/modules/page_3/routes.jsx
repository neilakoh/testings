import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

import {Page3} from './components/page_3.jsx';
import Page3Sub from './components/page_3_sub.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/page3', {
    name: 'page3',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Page3 />)
      });
    }
  });

  FlowRouter.route('/page3/sub', {
    name: 'page3.sub',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Page3Sub />)
      });
    }
  });
}
