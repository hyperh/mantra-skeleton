import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Component from '../components/ForLoggedInOnly';

const depsMapper = (context) => ({
  context: () => context,
});

export const composer = ({ context }, onData) => {
  onData(null, {});
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Component);
