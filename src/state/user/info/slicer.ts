import { AppState } from 'state/reducer';
import { State } from './reducer';

export const sliceState = ({ user: { info } }: AppState): State => info;
