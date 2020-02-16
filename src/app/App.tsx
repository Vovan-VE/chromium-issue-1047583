import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { gotTokens } from 'state/oauth/actions';
import TeamId from '../routes/team-id/';

interface PropsFromDispatch {
  gotTokens: () => void;
}

type Props = PropsFromDispatch;

const App: React.FC<Props> = ({ gotTokens }) => {
  useMemo(() => {
    gotTokens();
  }, [gotTokens]);

  return <TeamId />;
};

export default connect<{}, PropsFromDispatch>(null, { gotTokens })(App);
