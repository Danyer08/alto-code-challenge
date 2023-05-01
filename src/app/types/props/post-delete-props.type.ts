import { Post } from '../../../core/models/post.model'

export type PostDeleteProps = {
  post: Post
  onPostDelete: (post: Post) => void
}
