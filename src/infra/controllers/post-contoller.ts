import { IPostContoller } from '../../core/interfaces/post-controller.interface'
import { Post } from '../../core/models/post.model'
import { HttpClient } from '../http/http-client'
import { ApiUrls } from '../utils/api-urls'

export class PostController implements IPostContoller {
  private httpClient: HttpClient

  constructor() {
    this.httpClient = new HttpClient()
  }

  getPost(id: number): Promise<Post> {
    return this.httpClient.get<Post>(ApiUrls.POSTS, id);
  }

  getPosts(): Promise<Post[]> {
    return this.httpClient.getAll<Post>(ApiUrls.POSTS);
  }

  addPost(post: Post): Promise<void> {
    return this.httpClient.post<Post>(ApiUrls.POSTS, post);
  }

  updatePost(post: Post): Promise<void> {
    return this.httpClient.put<Post>(ApiUrls.POSTS, post);
  }

  deletePost(id: number): Promise<void> {
    return this.httpClient.delete(ApiUrls.POSTS, id);
  }
}
