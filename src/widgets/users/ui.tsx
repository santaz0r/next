import styles from './styles.module.scss';
import { useUnit } from 'effector-react';
import { model } from './model';

export const UsersList = () => {
  const users = useUnit(model.$users);
  return (
    <div className={styles.users}>
      {users &&
        users.map((user) => (
          <div key={user.id} className={styles.user}>
            <h2 className={styles.title}>
              {user.id}. {user.name}
            </h2>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
    </div>
  );
};
