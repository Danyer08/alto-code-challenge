import { Post } from '../../../core/models/post.model'

export type PostSelectProps = {
  post: Post
  onPostSelect: (post: Post) => void
}
