import { getPostById, Post } from '@/shared/api';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useEffect, useLayoutEffect } from 'react';

type WithCookie = {
  cookies?: boolean;
};

const PostPage: NextPage<Post & WithCookie> = ({ post, cookies }) => {
  useEffect(() => {
    console.log('useEffect на клиенте. SSR не влияет.');
  }, []);

  useLayoutEffect(() => {
    console.log('useLayoutEffect: выполняется синхронно перед рендером');
  }, []);
  console.log(cookies);
  return (
    <div>
      <h2>Post page</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { req, res, query } = ctx;

  const acceptLanguage = req.headers['accept-language'] || 'unknown';

  console.log(acceptLanguage);

  res.setHeader('Set-Cookie', ['my-cookie=value123412; Path=/; HttpOnly; max-age=3600']);
  res.setHeader('Content-Language', acceptLanguage);

  const { id } = ctx.params as { id: string };
  // или
  // const { id } = query

  const post: Post = await getPostById(id);
  const cookies = req.cookies;

  // if (!query.paramName) {
  //   res.writeHead(302, { Location: '/error' });
  //   res.end();
  //   return { props: {} };
  // }

  if (id === 'secret') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  if (!Object.keys(post).length) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post, cookies },
  };
};

export default PostPage;
