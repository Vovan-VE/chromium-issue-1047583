import { AppChainFactory } from 'store/chain';
import { SELECT } from '../current/types';
import { fetchIfNeed } from './actions';

const chain: AppChainFactory = function*() {
  yield [
    SELECT,
    (_, dispatch) => {
      dispatch(fetchIfNeed());
    },
  ];
};

export default chain;
