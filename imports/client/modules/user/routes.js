import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '/client/modules/core/components/MainLayout';
import Login from './containers/Login';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/login', {
    name: 'root',
    action() {
      mount(MainLayoutCtx, {
        content: () => <Login />,
      });
    },
  });
}
