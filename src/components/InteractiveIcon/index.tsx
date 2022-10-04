import Link from 'next/link';
import { Icon, AntDesignIcon } from '../Icon';

type Props = {
  name: AntDesignIcon;
  url: string;
};

export function InteractiveIcon({ name, url }: Props) {
  return (
    <Link href={url}>
      <a target="_blank">
        <Icon name={name} />
      </a>
    </Link>
  );
}
