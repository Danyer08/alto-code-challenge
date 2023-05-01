import { Post } from '../../../core/models/post.model'

export type PostListProps = {
  posts: Array<Post>
  onPostSelect: (post: Post) => void
}
