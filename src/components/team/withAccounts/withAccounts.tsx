import { ComponentType } from 'react';
import { connect } from 'react-redux';
import { AppState } from 'state/reducer';
import mapStateToProps, { PropsFromState } from './mapStateToProps';

export type WithAccountsProps = PropsFromState;

const withAccounts = <P extends WithAccountsProps>(Component: ComponentType<P>) =>
  connect<PropsFromState, {}, Omit<P, keyof WithAccountsProps>, AppState>(mapStateToProps)(
    Component as ComponentType<WithAccountsProps>,
  );

export default withAccounts;
