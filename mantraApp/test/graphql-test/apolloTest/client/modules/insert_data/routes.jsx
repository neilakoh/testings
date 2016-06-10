import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';
import InsertData from './components/insert.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/insert', {
    name: 'insert',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<InsertData />)
      });
    }
  });
}
