import { Logo } from '../Logo';
import styles from './styles.module.scss';

export function DefaultCardImage() {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
}
