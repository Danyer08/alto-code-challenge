import DOMPurify from 'dompurify'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import StyledIconButton from '../styled/styled-icon-button'

const PostContent = ({ post, onPostDelete }: any) => {
  const navigate = useNavigate()
  //TODO: Use redux to persist the selected post
  if (!post) {
    navigate('/blog')
    return null
  }
  const handleDelete = () => {
    onPostDelete(post)
    navigate('/blog')
  }
  const cleanHtml = DOMPurify.sanitize(post.content)
  return (
    <React.Fragment>
      <div className="d-flex align-items-center">
        <h1 className="mr-3">{post.title}</h1>
        <StyledIconButton
          className="mr-3"
          onClick={() => {
            navigate(`/blog/edit/${post.id}`)
          }}
        >
          <span className="material-symbols-outlined">edit</span>
        </StyledIconButton>
        <StyledIconButton onClick={handleDelete}>
          <span className="material-symbols-outlined">delete</span>
        </StyledIconButton>
      </div>
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </React.Fragment>
  )
}

export default PostContent
