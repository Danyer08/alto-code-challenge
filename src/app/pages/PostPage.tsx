import React from 'react'
import PostContent from '../components/PostContent'
import { useNavigate } from 'react-router-dom'

const PostPage = ({ post }: any) => {
  const navigate = useNavigate()

  return (
    <React.Fragment>
      <button onClick={() => navigate('/blog')}>Back to blog</button>
      <PostContent post={post} />
    </React.Fragment>
  )
}

export default PostPage
