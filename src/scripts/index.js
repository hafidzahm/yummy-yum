import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import '../styles/style.css';
import App from './views/app';

// import './components/components.js';
// import main from './main.js';
// main();

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('#side-nav'),
  closeBtn: document.querySelector('#closeBtn'),
});

