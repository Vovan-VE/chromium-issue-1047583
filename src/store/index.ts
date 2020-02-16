import { applyMiddleware, createStore, Dispatch } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import chain from 'state/chain';
import createReducers, { AppState } from 'state/reducer';
import { createChainMiddleware } from './middlewares/chain-actions';
import { AppStateStore } from './store';
import { AppDispatch } from './redux-dispatch-fix';

export default () => {
  const reducer = createReducers();

  const chainMiddleware = createChainMiddleware<AppState, AppDispatch<AppState, null>>();
  chainMiddleware.setChain(chain());

  const store: AppStateStore = createStore(
    reducer,
    undefined,
    applyMiddleware<Dispatch & AppDispatch<AppState, null>>(thunk, promise, chainMiddleware),
  );

  if (process.env.NODE_ENV !== 'production') {
    module.hot?.accept('state/chain', () => {
      chainMiddleware.setChain(chain());
    });
    module.hot?.accept('state/reducer', () => {
      store.replaceReducer(reducer);
    });
  }

  return store;
};
