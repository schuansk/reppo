import Link from 'next/link';
import styles from './styles.module.scss';

type Props = {
  url: string;
  title: string;
};

export function Button({ url, title }: Props) {
  return (
    <Link href={url}>
      <a target="_blank" className={styles.container}>
        <span>{title}</span>
      </a>
    </Link>
  );
}
