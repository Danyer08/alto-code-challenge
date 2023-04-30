import { Post } from '../../../core/models/post.model'

export type PostReviewProps = {
  post: Post
  onPostSelect: (post: Post) => void
}
