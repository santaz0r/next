import { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import NextDocument from 'next/document';

export default function Document({ nonce }) {
  return (
    <Html lang="en">
      <Head nonce={nonce} />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// export const getInitialProps = async (ctx) => {
//   const nonce = ctx.res.getHeader('x-nonce');
//   return {
//     ...(await NextDocument.getInitialProps(ctx)),
//     nonce,
//   };
// };
