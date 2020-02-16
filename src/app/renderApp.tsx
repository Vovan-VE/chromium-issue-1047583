import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import i18n from '../i18n';
import configureStore from 'store/';
import LoadingPage from 'ui/LoadingPage';

export const store = configureStore();

export default function renderApp(
  Component: React.ComponentType,
  rootEl = document.getElementById('root'),
): void {
  render(
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <Suspense fallback={<LoadingPage />}>
          <Component />
        </Suspense>
      </Provider>
    </I18nextProvider>,
    rootEl,
  );
}
