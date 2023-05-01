import React from 'react'
import { PostReviewProps } from '../../types/props/post-review-props.type'
import StyledButton from '../styled/styled-button'
import DOMPurify from 'dompurify'

const PostPreview = ({ post, onPostSelect }: PostReviewProps) => {
  const numberOfWords = 100
  const cleanHtml = DOMPurify.sanitize(
    post.content.slice(0, numberOfWords) + `${post.content.length > numberOfWords ? '...' : ''}`,
  )
  return (
    <div className="post-preview">
      <h2>{post.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: cleanHtml }}></p>
      <StyledButton onClick={() => onPostSelect(post)}>Read more</StyledButton>
    </div>
  )
}

export default PostPreview
