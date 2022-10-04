import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Card, RepositoryProps } from '../../components/Card';
import { Contact, ContactProps } from '../../components/Contact';
import { Decal } from '../../components/Decal';
import { Header } from '../../components/Header';
import { Profile, ProfileProps } from '../../components/Profile';
import { getContributorData } from '../../lib/contributor';

import styles from './styles.module.scss';

type Contributor = {
  profile: ProfileProps;
  repositories: RepositoryProps[];
  contacts: ContactProps[];
};

type Props = {
  contributor: Contributor;
};

type Params = {
  slug: string;
};

const Contributor = ({ contributor }: Props) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>{`${contributor.profile.name.split(' ')[0]} | Reppo`}</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Profile data={contributor.profile} />
          <Decal>
            <Contact data={contributor.contacts} />
          </Decal>
          <section>
            {contributor.repositories.map((respository) => (
              <Card key={respository.id} data={respository} />
            ))}
          </section>
        </div>
      </div>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as Params;
  const { contributor } = await getContributorData(slug);
  const formattedContributor: Contributor = {
    ...contributor,
    repositories: contributor.repositories.map((respository: any) => ({
      ...respository,
      topics: respository.topics.map((topic: string) => ({
        name: topic,
        slug: topic.split(' ').join('-').toLocaleLowerCase(),
      })),
    })),
  };

  return { props: { contributor: formattedContributor } };
};

export default Contributor;
