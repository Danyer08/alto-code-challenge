export class Post {
  title: string
  content: string
  date: string
  id?: number
  summary?: string
  constructor(title: string, content: string, date: string, id?: number, summary?: string) {
    this.title = title
    this.content = content
    this.date = date
    this.id = id
    this.summary = summary
  }
}
