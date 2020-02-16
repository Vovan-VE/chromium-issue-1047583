import { IdOf } from '../common/primitive';

export type TeamId = IdOf<'Team'>;

export interface TeamInfo {
  readonly id: TeamId;
}
