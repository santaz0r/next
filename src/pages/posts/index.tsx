import { getAllPosts, PostsType } from '@/shared/api';
import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';

import styles from './post.module.scss';

const Posts: NextPage<PostsType> = ({ posts }) => {
  return (
    <>
      <h2 className={styles.title}>Posts</h2>
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

export const getServerSideProps: GetServerSideProps<PostsType> = async () => {
  const posts = await getAllPosts();
  return {
    props: { posts },
  };
};

export default Posts;
