import { MyInfo } from 'api/types/user/my-info';
import delay from 'delay';
import randomIn from '../../../utils/number/randomIn';
import { UserId } from '../../types/user/user';

export default {
  info: () =>
    delay(randomIn(50, 300)).then<MyInfo>(() => ({
      id: 1 as UserId,
    })),
};
