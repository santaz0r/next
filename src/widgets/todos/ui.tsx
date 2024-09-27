import styles from './styles.module.scss';
import { useUnit } from 'effector-react';
import { model } from './model';

export const TodosList = () => {
  const todos = useUnit(model.$todos);
  return (
    <div className={styles.todos}>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id} className={styles.todo}>
            <h2 className={styles.title}>
              {todo.id}. {todo.title}
            </h2>
          </div>
        ))}
    </div>
  );
};
