import React from 'react'
import PostPreview from './PostPreview'
import { PostsProps } from '../types/props/posts-props.type'

const PostsList = ({ posts, onPostSelect }: PostsProps) => {
  return (
    <div className="posts-list">
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} onPostSelect={onPostSelect} />
      ))}
    </div>
  )
}

export default PostsList
