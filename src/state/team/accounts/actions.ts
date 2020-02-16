import api from 'api/request/team/account';
import { ThunkAction } from 'state/types';
import { needFetch } from 'utils/store/fetching-state';
import { sliceState } from './slicer';
import { FETCH, FetchAction } from './types';

const fetchAccounts = (): FetchAction => ({
  type: FETCH,
  payload: api.list(),
});

export const fetchIfNeed = (): ThunkAction<void> => (dispatch, getState) => {
  const state = sliceState(getState());
  if (needFetch(state)) {
    dispatch(fetchAccounts());
  }
};
