import DOMPurify from 'dompurify'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import StyledButton from '../styled/styled-button'

const PostContent = ({ post }: any) => {
  const navigate = useNavigate()
  const cleanHtml = DOMPurify.sanitize(post.content)
  return (
    <React.Fragment>
      <div className='d-flex'>
        <h1 className='mr-3'>{post.title}</h1>
        <StyledButton
          onClick={() => {
            navigate(`/blog/edit/${post.id}`)
          }}
        >
          Edit
        </StyledButton>
      </div>
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </React.Fragment>
  )
}

export default PostContent
