import { AppChainFactory } from 'store/chain';

import info from './info/chain';
import teams from './teams/chain';

const chain: AppChainFactory = function*() {
  yield* info();
  yield* teams();
};

export default chain;
