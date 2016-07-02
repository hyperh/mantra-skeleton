import React from 'react';
import { mount } from 'react-mounter';

import MainLayout from '../core/components/main_layout.jsx';
import Login from './containers/Login';

export default function (injectDeps, { Meteor, FlowRouter, Collections, LocalState }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/login', {
    name: 'root',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Login />),
      });
    },
  });
}
