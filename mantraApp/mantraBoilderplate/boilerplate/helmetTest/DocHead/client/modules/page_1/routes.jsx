import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import Page1 from './components/page_1.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/page1', {
    name: 'page1',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Page1 />)
      });
    }
  });
}
