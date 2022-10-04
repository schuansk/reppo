import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Card, RepositoryProps } from '../../components/Card';
import { Contact, ContactProps } from '../../components/Contact';
import { Decal } from '../../components/Decal';
import { Header } from '../../components/Header';
import { Profile, ProfileProps } from '../../components/Profile';
import { getContributorData } from '../../lib/contributor';

import styles from './styles.module.scss';

type Props = {
  profile: ProfileProps;
  repositories: RepositoryProps[];
  contacts: ContactProps[];
};

type Params = {
  slug: string;
};

const Contributor = ({ profile, repositories, contacts }: Props) => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>{`${profile.name.split(' ')[0]} | Reppo`}</title>
      </Head>
      <Header />
      <div className={styles.container}>
        <div className={styles.content}>
          <Profile data={profile} />
          <Decal>
            <Contact data={contacts} />
          </Decal>
          <section>
            {repositories.map((respository) => (
              <Card key={respository.id} data={respository} />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { slug } = params as Params;
  const { contributor } = await getContributorData(slug);
  return { props: contributor };
};

export default Contributor;
