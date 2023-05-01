import DOMPurify from 'dompurify'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import StyledIconButton from '../../styles/components/styled-icon-button'
import { PostDeleteProps } from '../../types/props/post-delete-props.type'

const PostContent = ({ post, onPostDelete }: PostDeleteProps) => {
  const navigate = useNavigate()
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
