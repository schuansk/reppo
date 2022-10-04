import styles from './styles.module.scss';

export type ProfileProps = {
  name: string;
  pictureUrl: string;
  bio: string;
  customBackgroundColor?: string;
};

type Props = {
  data: ProfileProps;
};

export function Profile({ data }: Props) {
  return (
    <section
      className={styles.header}
      style={
        data.customBackgroundColor
          ? ({
              '--custom-background-color': data.customBackgroundColor,
            } as React.CSSProperties)
          : {}
      }
    >
      <picture>
        <img src={data.pictureUrl} alt={data.name} />
      </picture>
      <h1>{data.name}</h1>
      <p> - {data.bio}</p>
    </section>
  );
}
