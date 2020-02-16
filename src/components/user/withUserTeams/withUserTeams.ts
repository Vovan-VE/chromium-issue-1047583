import { ComponentType } from 'react';
import { connect } from 'react-redux';
import { TeamInfo } from 'api/types/team';
import { AppState } from 'state/reducer';

interface PropsFromState {
  teams: ReadonlyArray<TeamInfo>;
  teamsIsFetching: boolean;
  teamsIsFetchFailed: boolean;
  teamsDidFetched: boolean;
}

export type UserTeamsProps = PropsFromState;

const withUserTeams = <P extends UserTeamsProps>(Component: ComponentType<P>) =>
  connect<PropsFromState, {}, Omit<P, keyof UserTeamsProps>, AppState>(
    ({
      user: {
        teams: { teams, isFetching, isFetchFailed, didFetched },
      },
    }) => ({
      teams,
      teamsIsFetching: isFetching,
      teamsIsFetchFailed: isFetchFailed,
      teamsDidFetched: didFetched,
    }),
  )(Component as ComponentType<UserTeamsProps>);

export default withUserTeams;
