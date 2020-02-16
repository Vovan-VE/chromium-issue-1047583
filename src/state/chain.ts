import { AppChainFactory } from 'store/chain';

import team from './team/chain';
import user from './user/chain';

const chain: AppChainFactory = function*() {
  yield* team();
  yield* user();
};

export default chain;
