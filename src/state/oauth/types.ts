import { BaseAction } from 'state/types';

export const GOT_TOKENS = 'OAUTH/TOKENS/GOT_TOKENS';

export type GotTokensAction = BaseAction<typeof GOT_TOKENS>;
