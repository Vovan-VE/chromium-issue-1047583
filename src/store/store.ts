import { Store } from 'redux';
import { AppState } from 'state/reducer';
import {
  AppDispatch,
  AsyncAction as _AsyncAction,
  ThunkAction as _ThunkAction,
} from './redux-dispatch-fix';

export type AppStateStore = Store<AppState> & {
  dispatch: AppDispatch<AppState, null>;
};

export type AsyncAction<T, R> = _AsyncAction<T, R>;

export type ThunkAction<R> = _ThunkAction<R, AppState>;
