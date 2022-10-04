import Link from 'next/link';
import styles from './styles.module.scss';

export type Topic = {
  name: string;
  slug: string;
};

type Props = {
  topics: Topic[];
};

export function Topics({ topics }: Props) {
  return (
    <div className={styles.container}>
      {topics.map((topic) => (
        <Link key={topic.slug} href={`https://github.com/topics/${topic.slug}`}>
          <a target="_blank" className={styles.topic}>
            {topic.name}
          </a>
        </Link>
      ))}
    </div>
  );
}
