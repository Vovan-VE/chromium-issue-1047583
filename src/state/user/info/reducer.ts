import { MyInfo } from 'api/types/user/my-info';
import { FetchingState } from 'utils/store/fetching-state';
import { FETCH_DONE, FETCH_FAIL, FETCH_PENDING, UserInfoAction } from './types';

export interface State extends FetchingState {
  userInfo: MyInfo | null;
}

const initialState: State = {
  userInfo: null,
  isFetching: false,
  isFetchFailed: false,
  didFetched: false,
};

export default (state = initialState, action: UserInfoAction): State => {
  switch (action.type) {
    case FETCH_PENDING:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_DONE:
      return {
        ...state,
        userInfo: action.payload,
        isFetching: false,
        isFetchFailed: false,
        didFetched: true,
      };

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
