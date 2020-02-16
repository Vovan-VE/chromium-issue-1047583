import 'react-app-polyfill/stable';
import App from './app/App';
import renderApp from './app/renderApp';
import './index.css';

renderApp(App);

module.hot?.accept('./app', () => {
  const NextApp = require('./app/App').default;
  renderApp(NextApp);
});
