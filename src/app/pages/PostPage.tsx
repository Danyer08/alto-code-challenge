import React from 'react'
import PostContent from '../components/content/PostContent'
import { useNavigate } from 'react-router-dom'
import StyledButton from '../components/styled/styled-button'

const PostPage = ({ post, onPostDelete }: any) => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <StyledButton onClick={() => navigate('/blog')}>Back to list</StyledButton>
      <PostContent post={post} onPostDelete={onPostDelete} />
    </React.Fragment>
  )
}

export default PostPage
