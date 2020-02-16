export interface FetchingState {
  isFetching: boolean;
  isFetchFailed: boolean;
  didFetched: boolean;
}

export const needFetch = (state: FetchingState): boolean => !state.isFetching && !state.didFetched;
