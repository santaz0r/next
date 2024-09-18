type PostType = {
  id: number;
  title: string;
  body: string;
};

type PostsType = {
  posts: PostType[];
};

type Post = {
  post: PostType;
};

export const getAllPosts = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=7`);

  const data = await res.json();
  return data;
};

export const getPostById = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  const data = await res.json();
  return data;
};

export type { PostsType, Post };
