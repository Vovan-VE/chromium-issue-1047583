import { Account } from 'api/types/team/account';
import { FetchingState } from 'utils/store/fetching-state';
import { FETCH_DONE, FETCH_FAIL, FETCH_PENDING, TeamAccountsAction } from './types';

export interface State extends FetchingState {
  accounts: ReadonlyArray<Account>;
}

const initialState: State = {
  accounts: [],
  isFetching: false,
  isFetchFailed: false,
  didFetched: false,
};

export default (state = initialState, action: TeamAccountsAction): State => {
  switch (action.type) {
    case FETCH_PENDING: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case FETCH_DONE: {
      const accounts = action.payload.items;
      return {
        ...state,
        accounts,
        isFetching: false,
        isFetchFailed: false,
        didFetched: true,
      };
    }

    case FETCH_FAIL: {
      return {
        ...state,
        isFetching: false,
        isFetchFailed: true,
      };
    }

    default:
      return state;
  }
};
