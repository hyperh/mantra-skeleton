import React from 'react';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';
import Home from '../components/Home.jsx';

const depsMapper = (context, actions) => ({
  context: () => context
});

export const composer = ({context}, onData) => {
  const {Meteor, FlowRouter, Collections} = context();
  onData(null, {});
};

export default composeAll(
  composeWithTracker(composer, function () {
    return React.createElement('div', null);
  }),
  useDeps(depsMapper)
)(Home);
