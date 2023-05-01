import { Post } from '../../../core/models/post.model'

export type BlogPageProps = {
  posts: Array<Post>
  onPostSelect: (post: Post) => void
  onAddPost: () => void
}
