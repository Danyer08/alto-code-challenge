import { Post } from '../../../core/models/post.model'

export type PostFormProps = {
  onSubmit: (post: Post) => void
  post?: Post | null
}
