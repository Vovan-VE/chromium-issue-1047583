import { TeamsList } from 'api/types/team/list';
import delay from 'delay';
import randomIn from 'utils/number/randomIn';
import { TeamId } from '../../types/team';

export default {
  list: () =>
    delay(randomIn(50, 300)).then<TeamsList>(() => ({
      items: [
        {
          id: 1 as TeamId,
        },
      ],
    })),
};
