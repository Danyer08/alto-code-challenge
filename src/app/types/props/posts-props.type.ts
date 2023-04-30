import { Post } from '../../../core/models/post.model'

export type PostsProps = {
  posts: Array<Post>
  onPostSelect: (post: Post) => void
}
