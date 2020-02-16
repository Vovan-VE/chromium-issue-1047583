import { Action } from 'redux';
import * as store from 'store/store';

export interface BaseAction<T extends string> extends Action<T> {}

export interface WithPayload<P> {
  payload: P;
}

export interface ErrorAction<T extends string, E extends Error>
  extends BaseAction<T>,
    WithPayload<E> {
  error: true;
}

export type PayloadAction<T extends string, P> = BaseAction<T> & WithPayload<P>;

export type AsyncAction<T extends string, R> = store.AsyncAction<T, R>;

export type ThunkAction<R> = store.ThunkAction<R>;
