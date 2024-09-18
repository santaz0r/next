import styles from './Header.module.scss';
import ActiveLink from '@/shared/ui/ActiveLink';

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.nav}>
          <li>
            <ActiveLink className={styles.nav__item} href={'/'}>
              HomePage
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className={styles.nav__item} href={'/posts'}>
              Posts
            </ActiveLink>
          </li>
          <li>
            <ActiveLink className={styles.nav__item} href={'/about'}>
              About us
            </ActiveLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
