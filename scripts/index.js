/* Components */
import footerComponent from '../views/components/footer-component.js';
import headerComponent from '../views/components/header-component.js';

/* Components Logic */
import footer from './components/footer.js';
import header from './components/header.js';

/* Main */
import main from './main/main.js';

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

function init() {
  footerComponent.init();
  footer.init();
  headerComponent.init();
  header.init();
  main.init();
}

