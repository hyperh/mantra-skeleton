import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/Home';

const depsMapper = (context) => ({
  context: () => context,
});

export const composer = ({ context }, onData) => {
  // const {Meteor, FlowRouter, Collections} = context();
  onData(null, {});
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
