import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '/client/modules/core/components/main_layout.jsx';

import Pagination from './containers/pagination.js';

export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/pagination', {
    name: 'pagination',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Pagination />),
      });
    },
  });
}
