import React from 'react'
import PostPreview from './PostPreview'
import { PostListProps } from '../../types/props/post-list-props.type'

const PostsList = ({ posts, onPostSelect }: PostListProps) => {
  return (
    <React.Fragment>
      {posts.map((post) => (
        <PostPreview key={post.id} post={post} onPostSelect={onPostSelect} />
      ))}
    </React.Fragment>
  )
}

export default PostsList
