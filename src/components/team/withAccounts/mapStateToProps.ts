import { Account } from 'api/types/team/account';
import { AppState } from 'state/reducer';
import { sliceState } from 'state/team/accounts/slicer';

export interface PropsFromState {
  accountsList: ReadonlyArray<Account>;
  accountsIsFetching: boolean;
  accountsIsFetchFailed: boolean;
  accountsDidFetched: boolean;
}

const mapStateToProps = (state: AppState): PropsFromState => {
  const { accounts, isFetching, isFetchFailed, didFetched } = sliceState(state);

  return {
    accountsList: accounts,
    accountsIsFetching: isFetching,
    accountsIsFetchFailed: isFetchFailed,
    accountsDidFetched: didFetched,
  };
};

export default mapStateToProps;
