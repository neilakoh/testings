import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../main_layout.jsx';
import Login from '../../containers/login.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);
  FlowRouter.route('/login', {
    name: 'login.login',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />)
      });
    }
  });
}
