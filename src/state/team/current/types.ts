import { BaseAction } from 'state/types';

export const SELECT = 'TEAM/CURRENT/SELECT';
export const UNSELECT = 'TEAM/CURRENT/UNSELECT';

export type SelectAction = BaseAction<typeof SELECT>;
export type UnselectAction = BaseAction<typeof UNSELECT>;
