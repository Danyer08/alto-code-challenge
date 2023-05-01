import React from 'react'
import PostContent from '../components/content/PostContent'
import { useNavigate } from 'react-router-dom'
import StyledButton from '../styles/components/styled-button'
import { PostDeleteProps } from '../types/props/post-delete-props.type'

const PostPage = ({ post, onPostDelete }: PostDeleteProps) => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <StyledButton onClick={() => navigate('/blog')}>Back to list</StyledButton>
      <PostContent post={post} onPostDelete={onPostDelete} />
    </React.Fragment>
  )
}

export default PostPage
