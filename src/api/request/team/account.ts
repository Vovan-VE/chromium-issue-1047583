import delay from 'delay';
import { AccountsList } from 'api/types/team/account/list';
import { AccountId } from '../../types/team/account';
import randomIn from 'utils/number/randomIn';

export default {
  list: () =>
    delay(randomIn(50, 300)).then<AccountsList>(() => ({
      items: [
        {
          id: 10 as AccountId,
          name: 'Lorem ipsum dolor',
        },
      ],
    })),
};
