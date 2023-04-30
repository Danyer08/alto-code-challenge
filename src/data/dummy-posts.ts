import { Post } from '../core/models/post.model'

export const dummyPosts: Array<Post> = [
  {
    id: 1,
    title: 'First post',
    content: '<p>This is the first post.</p>',
    date: '2021-01-01',
  },
  {
    id: 2,
    title: 'Second post',
    content: '<p>This is the second post.</p>',
    date: '2021-01-02',
  },
  {
    id: 3,
    title: 'Third post',
    content: '<p>This is the third post.</p>',
    date: '2021-01-03',
  },
]
