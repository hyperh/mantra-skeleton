import { useDeps, composeWithTracker, composeAll } from 'mantra-core';
import Login from '../components/Login';

const depsMapper = (context) => ({
  context: () => context,
});

export const composer = ({ context }, onData) => {
  onData(null, {});
};

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Login);
