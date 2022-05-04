import createBlock from './modules/createBlock';
import contentText from './modules/contentText';
import createKey from './modules/createKey';

window.addEventListener('DOMContentLoaded', () => {
  createBlock();
  contentText();
  createKey();
});
