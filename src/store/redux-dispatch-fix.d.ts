// https://gist.github.com/Vovan-VE/4be25aa16933e2df9cc0f8ce96ec7326
// https://github.com/pburtchaell/redux-promise-middleware/issues/253

import { Action } from 'redux';

// ==================================
// redux-promise-middleware extension
// ==================================

declare type AsyncFunction<R = any> = () => Promise<R>;
declare type AsyncPayload<R = any> =
  | Promise<R>
  | AsyncFunction<R>
  | {
      promise: Promise<R> | AsyncFunction<R>;
      data?: any;
    };

export declare interface AsyncAction<T = any, R = any> extends Action<T> {
  payload: AsyncPayload<R>;
}

type AsyncActionResult<A> = A extends AsyncAction<any, infer R> ? R : never;

export type AsyncFulfilledAction<A extends AsyncAction, T extends string = string> = Action<T> & {
  payload: AsyncActionResult<A>;
};

type FulfilledDispatchResult<A extends AsyncAction> = {
  action: AsyncFulfilledAction<A>;
  value: AsyncActionResult<A>;
};

export type AsyncDispatchReturns<T> = T extends AsyncAction
  ? Promise<FulfilledDispatchResult<T>>
  : T;

// ==========================
// redux-thunk
// ==========================

export type ThunkDispatchReturns<S, E, A> = A extends ThunkAction<infer R, S, E> ? R : A;

export declare type ThunkAction<R, S, E = null, D = AppDispatch<S, E>> = (
  dispatch: D,
  getState: () => S,
  extraArgument: E,
) => R;

// =========================

export type AppDispatchResult<S, E, A> = AsyncDispatchReturns<ThunkDispatchReturns<S, E, A>>;

export interface AppDispatch<S, E> {
  <T extends Action | ThunkAction<any, S, E>>(action: T): AppDispatchResult<S, E, T>;
}
