import { AnyAction, combineReducers } from 'redux';
import { UNSELECT } from './current/types';

import accounts from './accounts/reducer';

const teamReducer = combineReducers({
  accounts,
});

type State = ReturnType<typeof teamReducer>;

export default (state: State | undefined, action: AnyAction): State => {
  if (action.type === UNSELECT) {
    return teamReducer(undefined, action);
  }

  return teamReducer(state, action);
};
