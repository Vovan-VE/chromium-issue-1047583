import { MyInfo } from 'api/types/user/my-info';
import { AsyncAction, BaseAction, ErrorAction, PayloadAction } from 'state/types';

export const FETCH = 'USER/INFO/FETCH';
export const FETCH_PENDING = 'USER/INFO/FETCH_PENDING';
export const FETCH_DONE = 'USER/INFO/FETCH_FULFILLED';
export const FETCH_FAIL = 'USER/INFO/FETCH_REJECTED';

export type FetchAction = AsyncAction<typeof FETCH, MyInfo>;
export type FetchPendingAction = BaseAction<typeof FETCH_PENDING>;
export type FetchDoneAction = PayloadAction<typeof FETCH_DONE, MyInfo>;
export type FetchFailAction = ErrorAction<typeof FETCH_FAIL, Error>;

export type UserInfoAction = FetchAction | FetchPendingAction | FetchDoneAction | FetchFailAction;
