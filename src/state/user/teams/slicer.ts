import { AppState } from 'state/reducer';
import { State } from './reducer';

export const sliceState = ({ user: { teams } }: AppState): State => teams;
