import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/MainLayout';
import Home from './containers/Home2';

export default function (injectDeps, {Meteor, FlowRouter, Collections, LocalState}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/', {
    name: 'root',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<Home />)
      });
    }
  });
}
