import api from 'api/request/user';
import { ThunkAction } from 'state/types';
import { needFetch } from 'utils/store/fetching-state';
import { sliceState } from './slicer';
import { FETCH, FetchAction } from './types';

const fetchUserInfo = (): FetchAction => ({
  type: FETCH,
  payload: api.info(),
});

export const fetchIfNeed = (): ThunkAction<void> => (dispatch, getState) => {
  const state = sliceState(getState());
  if (needFetch(state)) {
    dispatch(fetchUserInfo());
  }
};
