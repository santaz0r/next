import { getAllPosts, PostsType } from '@/shared/api';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import styles from './post.module.scss';
import Head from 'next/head';

const Posts: NextPage<PostsType> = ({ posts, nonce }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
        <style nonce={nonce}>
          {`
            .title {
              color: red;
            }
          `}
        </style>
      </Head>

      <h2 className={styles.title + ' title'}>Posts</h2>
      <div className={styles.wrapper}>
        {posts.length ? (
          posts.map((post) => (
            <div key={post.id} className={styles.post}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              <Link href={`/posts/${post.id}`}>подробнее....</Link>
            </div>
          ))
        ) : (
          <h2>Loading....</h2>
        )}
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<PostsType> = async (context) => {
  const posts = await getAllPosts();
  const nonce = context.req.headers['x-nonce'] as string;
  console.log(nonce);
  return {
    props: { posts, nonce },
  };
};

export default Posts;
