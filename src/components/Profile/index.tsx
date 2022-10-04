import styles from './styles.module.scss';

export type ProfileProps = {
  name: string;
  pictureUrl: string;
  bio: string;
};

type Props = {
  data: ProfileProps;
};

export function Profile({ data }: Props) {
  return (
    <section className={styles.header}>
      <picture>
        <img src={data.pictureUrl} alt={data.name} />
      </picture>
      <h1>{data.name}</h1>
      <p> - {data.bio}</p>
    </section>
  );
}
