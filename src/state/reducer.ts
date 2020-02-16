import { combineReducers } from 'redux';

import team from './team/reducer';
import user from './user/reducer';

const createRootReducer = () =>
  combineReducers({
    team,
    user,
  });

export type AppState = ReturnType<ReturnType<typeof createRootReducer>>;

export default createRootReducer;
