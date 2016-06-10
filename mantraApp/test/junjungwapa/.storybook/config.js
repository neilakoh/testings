import { configure } from '@kadira/storybook';

function loadStories() {
  require('../components/stories/button');
}

configure(loadStories, module);
