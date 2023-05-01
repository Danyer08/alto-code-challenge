import React from 'react'
import { PostSelectProps } from '../../types/props/post-select-props.type'
import StyledButton from '../../styles/components/styled-button'
import DOMPurify from 'dompurify'

const PostPreview = ({ post, onPostSelect }: PostSelectProps) => {
  const numberOfWords = 500
  const cleanHtml: string = DOMPurify.sanitize(
    post.content.slice(0, numberOfWords) + `${post.content.length > numberOfWords ? '...' : ''}`,
  )
  return (
    <React.Fragment>
      <h2>{post.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: cleanHtml }}></p>
      <StyledButton onClick={() => onPostSelect(post)}>Read more</StyledButton>
    </React.Fragment>
  )
}

export default PostPreview
