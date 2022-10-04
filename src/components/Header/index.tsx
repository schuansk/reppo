import Link from 'next/link';
import styles from './styles.module.scss';

export function Header() {
  return (
    <div className={styles.container}>
      <Link href="/home">
        <div className={styles.content}>
          <div className={styles.marker}> &#x25C0; </div>
          <span> home </span>
          <div className={styles.bullet}>
            <div>
              <span></span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
