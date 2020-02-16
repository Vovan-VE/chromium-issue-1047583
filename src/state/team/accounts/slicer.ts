import { AppState } from 'state/reducer';
import { State } from './reducer';

export const sliceState = ({ team: { accounts } }: AppState): State => accounts;
