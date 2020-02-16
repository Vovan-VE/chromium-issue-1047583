import { AccountsList } from 'api/types/team/account/list';
import { AsyncAction, BaseAction, ErrorAction, PayloadAction } from 'state/types';

export const FETCH = 'TEAM/ACCOUNTS/FETCH';
export const FETCH_PENDING = 'TEAM/ACCOUNTS/FETCH_PENDING';
export const FETCH_DONE = 'TEAM/ACCOUNTS/FETCH_FULFILLED';
export const FETCH_FAIL = 'TEAM/ACCOUNTS/FETCH_REJECTED';

export type FetchAction = AsyncAction<typeof FETCH, AccountsList>;
export type FetchPendingAction = BaseAction<typeof FETCH_PENDING>;
export type FetchDoneAction = PayloadAction<typeof FETCH_DONE, AccountsList>;
export type FetchFailAction = ErrorAction<typeof FETCH_FAIL, Error>;

export type TeamAccountsAction =
  | FetchAction
  | FetchPendingAction
  | FetchDoneAction
  | FetchFailAction;
