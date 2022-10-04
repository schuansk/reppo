import { AntDesignIcon } from '../Icon';
import { InteractiveIcon } from '../InteractiveIcon';
import styles from './styles.module.scss';

export type ContactProps = {
  name: string;
  url: string;
  icon: AntDesignIcon;
};

type Props = {
  data: ContactProps[];
};

export function Contact({ data }: Props) {
  return (
    <div className={styles.container}>
      {data.map((contact) => (
        <div key={contact.name}>
          <InteractiveIcon name={contact.icon} url={contact.url} />
        </div>
      ))}
    </div>
  );
}
