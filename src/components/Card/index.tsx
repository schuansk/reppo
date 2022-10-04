import { useEffect, useState } from 'react';
import { Button } from '../Button';
import { DefaultCardImage } from '../DefaultCardImage';
import { Topic, Topics } from '../Topics';
import styles from './styles.module.scss';

type Description = {
  summary: string;
  rest?: string;
};

export type RepositoryProps = {
  id: string;
  name: string;
  description: string;
  url: string;
  logoUrl?: string;
  topics: Topic[];
};

type Props = {
  data: RepositoryProps;
};

export function Card({ data }: Props) {
  const [description, setDescription] = useState<Description>(
    {} as Description,
  );
  useEffect(() => {
    if (data.description.length > 224) {
      const limit = data.description.substring(0, 224).lastIndexOf(' ');
      const summary = data.description.substring(0, limit);
      const rest = data.description.substring(limit, data.description.length);
      setDescription({
        summary,
        rest,
      });
      return;
    }
    setDescription({ summary: data.description });
  }, [data.description]);
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {data.logoUrl ? (
          <picture className={styles.image}>
            <img
              src={
                data.logoUrl || '/assets/images/default-repository-cover.png'
              }
              alt={data.name}
            />
          </picture>
        ) : (
          <DefaultCardImage />
        )}
        <div>
          <h2>{data.name}</h2>
          {data.topics.length > 0 && <Topics topics={data.topics} />}
          <div className={styles.description}>
            <details
              onClick={(e) => !description?.rest && e.preventDefault()}
              className={description?.rest ? styles.show : styles.hide}
            >
              <summary>{description.summary}</summary>
              <p>{description?.rest}</p>
            </details>
          </div>
          <Button url={data.url} title="visit" />
        </div>
      </div>
    </div>
  );
}
