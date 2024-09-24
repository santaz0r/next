import { getUsersFx, Todo } from '@/shared/api';
import { restore } from 'effector';

const $users = restore<Todo[]>(getUsersFx.doneData, []);

export const model = {
  $users,
};
