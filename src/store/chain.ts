import { AppState } from 'state/reducer';
import { ChainGenerator } from './middlewares/chain-actions';
import { AppDispatch } from './redux-dispatch-fix';

type _AppDispatch = AppDispatch<AppState, null>;

export type AppChainGenerator = ChainGenerator<AppState, _AppDispatch>;

export interface AppChainFactory {
  (): AppChainGenerator;
}
