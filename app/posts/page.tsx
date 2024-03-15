'use client';
import { useDispatch, useSelector } from 'react-redux';
import { addPost, deletePost } from '@/redux/slices/postSlices';
import { useState } from 'react';

import React from 'react';

const Posts = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const posts = useSelector((state: any) => state.posts);
  console.log('posts :', posts);

  const handleAddPost = (e: any) =>{
    e.preventDefault();

    if(!title || !description) return;

    const newPost = {
        id: Date.now(),
        title: title,
        description: description
    }
    dispatch(addPost(newPost));
    setTitle('');
    setDescription('');

  }
  const handleRemovePost = (postId: number) => {
      dispatch(deletePost(postId));
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Posts</h1>
      <form className='flex flex-col gap-2 w-1/2 mx-auto my-8 gap-4'>
        <input type="text" placeholder='Post' value={title} onChange={(e)=> setTitle(e. target.value)}></input>
        <textarea placeholder='Add description' value={description} onChange={(e)=> setDescription(e. target.value)}></textarea>
        <button className='px-4 py-2 bg-blue-500 text-white rounded-md w-3/4 mx-auto' onClick={handleAddPost}>Add Post</button>
      </form>
      {posts ? (
        posts.map((post: any) => (
          <div
            key={post.id}
            className="flex flex-col gap-2 border p-4 rounded w-1/3 mx-auto my-4">
            <h3 className="text-xl">{post.title}</h3>
            <h4>{post.body}</h4>
            <p>{post.description}</p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md" onClick={() => handleRemovePost(post.id)}>
              Delete
            </button>
          </div>
        ))
      ) : (
        <h1>No posts</h1>
      )}
    </div>
  );
};

export default Posts;
