import Group from '@components/group/group';
import { ReactElement, ReactNode } from 'react';
import Layout from 'src/layouts/Layout';

const GroupPage = () => {
  return (
    <>
      <Group />
    </>
  );
};

GroupPage.getLayout = (page: ReactElement): ReactNode => (
  <Layout>{page}</Layout>
);

export default GroupPage;
