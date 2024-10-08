import { NextPage } from 'next';
import Head from 'next/head';

// import Image from 'next/image'; <--- warning fetchPriority :c

import Image from 'next/legacy/image';
import photo from '../../public/404p.png';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Not found</title>
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src={photo} alt="404" width={800} height={400} placeholder="blur" />
      </div>
    </>
  );
};

export default NotFoundPage;
