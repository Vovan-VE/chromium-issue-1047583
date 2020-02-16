import { SELECT, SelectAction, UNSELECT, UnselectAction } from './types';

export const selectTeam = (): SelectAction => ({ type: SELECT });
export const unselectTeam = (): UnselectAction => ({ type: UNSELECT });
