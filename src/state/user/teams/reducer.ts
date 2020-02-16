import { TeamInfo } from 'api/types/team';
import { FetchingState } from 'utils/store/fetching-state';
import { FETCH_DONE, FETCH_FAIL, FETCH_PENDING, UserTeamsAction } from './types';

export interface State extends FetchingState {
  teams: ReadonlyArray<TeamInfo>;
}

const initialState: State = {
  teams: [],
  isFetching: false,
  isFetchFailed: false,
  didFetched: false,
};

export default (state = initialState, action: UserTeamsAction): State => {
  switch (action.type) {
    case FETCH_PENDING:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_DONE: {
      const teams = action.payload.items;
      return {
        ...state,
        teams,
        isFetching: false,
        isFetchFailed: false,
        didFetched: true,
      };
    }

    case FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        isFetchFailed: true,
      };

    default:
      return state;
  }
};
