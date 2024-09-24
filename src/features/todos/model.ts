import { getTodosFx, Todo } from '@/shared/api';
import { createEvent, createStore, restore, sample } from 'effector';


const $todos = createStore<Todo[]>([]);

const getTodos = createEvent();

// sample({
//   clock: getTodos,
//   target: getTodosFx,
// });

sample({
  clock: getTodosFx.doneData,
  source: $todos,
  fn: (_, todos) => [...todos],
  target: $todos,
});

export const model = {
  $todos,
  getTodos,
};
