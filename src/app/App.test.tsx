import ReactDOM from 'react-dom';
import App from './App';
import renderApp from './renderApp';

test('renders without crash', () => {
  const div = document.createElement('div');
  renderApp(App, div);
  ReactDOM.unmountComponentAtNode(div);
});
