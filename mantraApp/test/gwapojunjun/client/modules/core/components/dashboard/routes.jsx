import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../main_layout.jsx';
import Dashboard from '../../containers/dashboard.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  FlowRouter.route('/dashboard', {
    name: 'dashboard',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Dashboard />)
      });
    }
  });
}
