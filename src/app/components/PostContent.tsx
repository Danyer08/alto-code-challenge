import React from 'react'
import { useNavigate } from 'react-router-dom'

const PostContent = ({ post }: any) => {
  const navigate = useNavigate()
  return (
    <div className="post-content">
      <h1>{post.title}</h1>
      <button
        onClick={() => {
          navigate(`/blog/edit/${post.id}`)
        }}
      >
        Edit
      </button>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  )
}

export default PostContent
