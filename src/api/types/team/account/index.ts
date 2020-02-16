import { IdOf } from '../../common/primitive';

export type AccountId = IdOf<'Account'>;

export interface Account {
  readonly id: AccountId;
  name: string;
}
