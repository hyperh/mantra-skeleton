/* eslint-disable global-require */
import { configure } from '@kadira/storybook';

function loadStories() {
  require('../imports/client/modules/core/components/stories/button');
  // require as many stories as you need.
}

configure(loadStories, module);
