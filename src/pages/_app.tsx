import Layout from '@/shared/layout/Layout';
import './globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// App.getInitialProps = async ({ ctx }) => {
//   const nonce = ctx.res.getHeader('x-nonce');
//   return {
//     nonce,
//   };
// };
