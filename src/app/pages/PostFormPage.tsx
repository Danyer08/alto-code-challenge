import React from 'react'
import PostForm from '../components/content/PostForm'
import { PostFormProps } from '../types/props/post-form-props.type'
import StyledButton from '../styles/components/styled-button'
import { useNavigate } from 'react-router-dom'

const PostFormPage = ({ post, onSubmit }: PostFormProps) => {
  const navigate = useNavigate()
  return (
    <div>
      <StyledButton onClick={() => navigate('/blog')}>Back to list</StyledButton>
      <h1 className="text-center">{post ? 'Edit Post' : 'New Post'}</h1>
      <PostForm post={post} onSubmit={onSubmit} />
    </div>
  )
}

export default PostFormPage
