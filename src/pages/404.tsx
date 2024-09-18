import { NextPage } from 'next';
import Head from 'next/head';

// import Image from 'next/image';
import Image from 'next/legacy/image';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Not found</title>
      </Head>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image src="/404p.png" alt="404" width={800} height={400} priority={true} />
      </div>
    </>
  );
};

export default NotFoundPage;
