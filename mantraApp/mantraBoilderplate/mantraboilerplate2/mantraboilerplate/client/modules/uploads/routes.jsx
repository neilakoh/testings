import React from 'react';
import {mount} from 'react-mounter';
import Upload from './containers/uploads_add.js';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/upload', {
    name: 'upload',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Upload />)
      });
    }
  });
}
