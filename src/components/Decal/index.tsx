import styles from './styles.module.scss';

type Props = {
  children?: React.ReactNode;
};

export function Decal({ children }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.start}>
        <div className={styles.social}>{children}</div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.center}></div>
      <div className={styles.end}></div>
    </div>
  );
}
