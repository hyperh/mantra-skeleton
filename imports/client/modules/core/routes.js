import React from 'react';
import { mount } from 'react-mounter';

import { EnsureLoggedIn } from 'meteor-auth';
import MainLayout from '/client/MainLayout';
import Home from './containers/Home';
import ForLoggedInOnly from './containers/ForLoggedInOnly';

export default function (injectDeps, { FlowRouter }) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'root',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />),
      });
    },
  });

  FlowRouter.route('/forLoggedInOnly', {
    name: 'root',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<EnsureLoggedIn><ForLoggedInOnly /></EnsureLoggedIn>),
      });
    },
  });
}
