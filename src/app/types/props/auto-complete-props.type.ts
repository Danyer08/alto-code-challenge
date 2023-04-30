import { Post } from '../../../core/models/post.model'

export type AutoCompleteProps = {
  posts: Array<Post>
  onPostSelect: (option: Post) => void
}
