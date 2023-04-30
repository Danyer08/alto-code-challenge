import { Post } from '../models/post.model'

export interface IPostContoller {
  getPost: (id: number) => Promise<Post>
  getPosts: () => Promise<Post[]>
  addPost: (post: Post) => Promise<void>
  updatePost: (post: Post) => Promise<void>
  deletePost: (id: number) => Promise<void>
}
