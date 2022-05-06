import createBlock from './modules/createBlock';
import contentText from './modules/contentText';
import createKey from './modules/createKey';
import activeKey from './modules/activeKey';

window.addEventListener('DOMContentLoaded', () => {
  localStorage.lang = 'en';
  createBlock();
  contentText();
  createKey();
  activeKey();
});
