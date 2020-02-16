import { Dispatch, Middleware } from 'redux';

export type ChainedReaction<T, S, D> = (result: T, dispatch: D, getState: () => S) => void;

export type Chain<T, S, D> = [string, ChainedReaction<T, S, D>];

export type ChainGenerator<S, D> = Generator<Chain<any, S, D>, void, void>;

interface ChainActionsMiddleware<S, D extends Dispatch<any>> extends Middleware<{}, S, D> {
  setChain(chain: ChainGenerator<S, D>): void;
}

export const createChainMiddleware = <S, D extends Dispatch<any>>(): ChainActionsMiddleware<
  S,
  D
> => {
  const after = new Map<string, ChainedReaction<any, S, D>[]>();

  const setChain = (chain: ChainGenerator<S, D>) => {
    after.clear();
    for (let [ref, reaction] of chain) {
      const list = after.get(ref);
      if (list) {
        list.push(reaction);
      } else {
        after.set(ref, [reaction]);
      }
    }
  };

  const middleware: Middleware<{}, S, D> = store => next => action => {
    const result = next(action);

    const type = result?.type;
    if (type && after.has(type)) {
      const { dispatch, getState } = store;
      after.get(type)?.forEach(reaction => {
        reaction(result, dispatch, getState);
      });
    }

    return result;
  };

  (middleware as Partial<ChainActionsMiddleware<S, D>>).setChain = setChain;

  return middleware as ChainActionsMiddleware<S, D>;
};
