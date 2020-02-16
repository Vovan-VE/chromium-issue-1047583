import { AppChainFactory } from 'store/chain';
import { GOT_TOKENS } from 'state/oauth/types';
import { fetchIfNeed } from './actions';

const chain: AppChainFactory = function*() {
  yield [
    GOT_TOKENS,
    (_, dispatch) => {
      dispatch(fetchIfNeed());
    },
  ];
};

export default chain;
