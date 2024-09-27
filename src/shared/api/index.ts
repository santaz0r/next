import { createEffect } from 'effector';

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

/// todos & users ///

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type Todos = {
  todos: Todo[];
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Users = {
  users: User[];
};

enum Url {
  todos = 'https://jsonplaceholder.typicode.com/todos?_limit=10',
  users = 'https://jsonplaceholder.typicode.com/users',
}

export const getTodosFx = createEffect(async () => {
  const res = await fetch(Url.todos);

  const data = await res.json();
  return data;
});

export const getUsersFx = createEffect(async () => {
  const res = await fetch(Url.users);

  const data = await res.json();
  return data;
});

export type { PostsType, Post, Todo, Todos, User, Users };
