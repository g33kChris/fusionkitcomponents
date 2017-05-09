import { configure, setAddon } from '@kadira/storybook';
import chaptersAddon from 'react-storybook-addon-chapters';
 
setAddon(chaptersAddon);
 
function loadStories() {
  require('../stories');
}

configure(loadStories, module);
