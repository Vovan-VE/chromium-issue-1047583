import React, { ComponentType, PureComponent } from 'react';
import { connect } from 'react-redux';
import { selectTeam, unselectTeam } from 'state/team/current/actions';
import { InjectedProps, PropsFromDispatch } from './props';

const withinContainer = <P extends {}>(Component: ComponentType<P>) =>
  connect<{}, PropsFromDispatch, Omit<P, keyof InjectedProps>>(null, {
    setCurrentTeam: selectTeam,
    unsetCurrentTeam: unselectTeam,
  })(
    class Wrapper extends PureComponent<P & InjectedProps> {
      componentDidMount(): void {
        const { setCurrentTeam } = this.props;
        setCurrentTeam();
      }

      componentWillUnmount(): void {
        const { unsetCurrentTeam } = this.props;
        unsetCurrentTeam();
      }

      render() {
        const { setCurrentTeam, unsetCurrentTeam, ...props } = this.props;
        return <Component {...(props as P)} />;
      }
    } as ComponentType<any>,
  );

export default withinContainer;
