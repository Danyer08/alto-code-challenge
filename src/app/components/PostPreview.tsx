import React from 'react'
import { PostReviewProps } from '../types/props/post-review-props.type'

const PostPreview = ({ post, onPostSelect }: PostReviewProps) => {
  return (
    <div className="post-preview">
      <h2>{post.title}</h2>
      <p>{post.summary}</p>
      <button onClick={() => onPostSelect(post)}>Read more</button>
    </div>
  )
}

export default PostPreview
