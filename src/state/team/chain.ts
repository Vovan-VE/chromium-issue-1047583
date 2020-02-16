import { AppChainFactory } from '../../store/chain';

import accounts from './accounts/chain';

const chain: AppChainFactory = function*() {
  yield* accounts();
};

export default chain;
