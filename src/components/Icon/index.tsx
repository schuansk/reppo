import * as AntDesign from 'react-icons/ai';
import styles from './styles.module.scss';

export type AntDesignIcon = keyof typeof AntDesign;

type Props = {
  name: AntDesignIcon;
};

export function Icon({ name }: Props) {
  const Ai = AntDesign[name];
  if (!Ai) return <AntDesign.AiOutlineWarning className={styles.container} />;
  return <Ai className={styles.container} />;
}
