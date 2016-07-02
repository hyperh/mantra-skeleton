import React from 'react';
import { mount } from 'react-mounter';

import { EnsureLoggedIn } from 'meteor-auth';
import MainLayout from './components/MainLayout';
import Home from './containers/Home';
import ForLoggedInOnly from './containers/ForLoggedInOnly';

export default function (injectDeps, { Meteor, FlowRouter, Collections, LocalState }) {
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
