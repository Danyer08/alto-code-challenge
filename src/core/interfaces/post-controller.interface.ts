import { Post } from '../models/post.model'

export interface IPostContoller {
  getPost: (id: number) => Promise<Post>
  getPosts: () => Promise<Post[]>
  addPost: (post: Post) => Promise<unknown>
  updatePost: (post: Post) => Promise<unknown>
  deletePost: (id: number) => Promise<unknown>
}
