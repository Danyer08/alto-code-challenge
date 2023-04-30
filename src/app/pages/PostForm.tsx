import React from 'react'
import PostForm from '../components/PostForm'
import { PostFormProps } from '../types/props/post-form-props.type'

const PostFormPage = ({ post, onSubmit }: PostFormProps) => {
  return (
    <div>
      <h1>{post ? 'Edit Post' : 'New Post'}</h1>
      <PostForm post={post} onSubmit={onSubmit} />
    </div>
  )
}

export default PostFormPage
