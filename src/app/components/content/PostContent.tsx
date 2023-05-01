import DOMPurify from 'dompurify'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import StyledIconButton from '../../styles/components/styled-icon-button'
import { PostDeleteProps } from '../../types/props/post-delete-props.type'
import { UserContext } from '../../context/user-context'

const PostContent = ({ post, onPostDelete }: PostDeleteProps) => {
  const navigate = useNavigate()
  const user = useContext(UserContext)
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
        {user?.isAdmin && (
          <React.Fragment>
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
          </React.Fragment>
        )}
      </div>
      <div dangerouslySetInnerHTML={{ __html: cleanHtml }} />
    </React.Fragment>
  )
}

export default PostContent
