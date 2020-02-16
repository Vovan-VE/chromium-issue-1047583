import { TeamsList } from 'api/types/team/list';
import { AsyncAction, BaseAction, ErrorAction, PayloadAction } from 'state/types';

export const FETCH = 'USER/TEAMS/FETCH';
export const FETCH_PENDING = 'USER/TEAMS/FETCH_PENDING';
export const FETCH_DONE = 'USER/TEAMS/FETCH_FULFILLED';
export const FETCH_FAIL = 'USER/TEAMS/FETCH_REJECTED';

export type FetchAction = AsyncAction<typeof FETCH, TeamsList>;
export type FetchPendingAction = BaseAction<typeof FETCH_PENDING>;
export type FetchDoneAction = PayloadAction<typeof FETCH_DONE, TeamsList>;
export type FetchFailAction = ErrorAction<typeof FETCH_FAIL, Error>;

export type UserTeamsAction = FetchAction | FetchPendingAction | FetchDoneAction | FetchFailAction;
