import { combineReducers } from 'redux';

import info from './info/reducer';
import teams from './teams/reducer';

export default combineReducers({
  info,
  teams,
});
