import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

import Page2 from './components/page_2.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/page2', {
    name: 'page2',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Page2 />)
      });
    }
  });
}
