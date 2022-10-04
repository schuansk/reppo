import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Decal } from '../../components/Decal';

import styles from './home.module.scss';
import { getAllContributors } from '../../lib/contributors';
import { Logo } from '../../components/Logo';

type Contributer = {
  slug: string;
  name: string;
};

type Props = {
  contributors: Contributer[];
};

export default function Home({ contributors }: Props) {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>Home | Reppo</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.title}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <span>
            rep<div>p</div>o
          </span>
        </header>
        <div className={styles.content}>
          <section className={styles.header}>
            <h1>CONTRIBUTORS</h1>
            <Decal />
          </section>
          <section className={styles.contributors}>
            <ul>
              {contributors.map((contributor) => (
                <li key={contributor.slug}>
                  <Link href={`/contributor/${contributor.slug}`}>
                    <a>{contributor.name}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { contributors } = await getAllContributors();
  const formattedContributors: Contributer[] = contributors.map(
    (contributor) => ({
      slug: contributor,
      name: contributor.replace('-', ' ').toLocaleUpperCase(),
    }),
  );
  return { props: { contributors: formattedContributors } };
};
