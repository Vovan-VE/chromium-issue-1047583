import React from 'react';
import { UserTeamsProps } from 'components/user/withUserTeams';
import Loading from 'ui/Loading';
import CurrentTeam from '../../components/team/CurrentTeam';
import TeamMainPage from './TeamMainPage';

interface Props extends UserTeamsProps {}

const TeamPage: React.FC<Props> = ({ teamsDidFetched }) => {
  if (!teamsDidFetched) {
    return <Loading />;
  }

  return (
    <CurrentTeam>
      <TeamMainPage />
    </CurrentTeam>
  );
};

export default TeamPage;
