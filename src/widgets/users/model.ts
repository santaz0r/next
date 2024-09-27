import { getUsersFx, Todo, User } from '@/shared/api';
import { createEvent, createStore, sample } from 'effector';

const $users = createStore<User[]>([]);

const getUsers = createEvent();

sample({
  clock: getUsers,
  target: getUsersFx,
});

sample({
  clock: getUsersFx.doneData,
  source: $users,
  fn: (state, users) => [...state, ...users],
  target: $users,
});

export const model = {
  $users,
  getUsers,
};
