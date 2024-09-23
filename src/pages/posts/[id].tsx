import { getPostById, Post } from '@/shared/api';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import PostNotFound from './404';

type ExtraProps = {
  cookies?: boolean;
  error?: boolean;
};

const PostPage: NextPage<Post & ExtraProps> = ({ post, error }) => {
  if (error) return <PostNotFound />;

  return (
    <>
      <Head>
        <title>Post | {post.title}</title>
      </Head>

      <div>
        <h2>Post page</h2>

        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { req, res, query } = ctx;

  const acceptLanguage = req.headers['accept-language'] || 'unknown';

  console.log(acceptLanguage);
  console.log(query);

  res.setHeader('Set-Cookie', 'my-cookie=value123412; Path=/; HttpOnly; max-age=3600');
  res.setHeader('Content-Language', acceptLanguage);

  const { id } = ctx.params as { id: string };

  const post: Post = await getPostById(id);
  const cookies = req.cookies;

  if (id === 'secret') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  if (!Object.keys(post).length) {
    res.statusCode = 404;
    return { props: { error: true } };
    // return {
    //   notFound: true,
    // };
  }

  return {
    props: { post },
  };
};

export default PostPage;
