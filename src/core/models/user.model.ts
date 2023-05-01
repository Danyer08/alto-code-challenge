export class User {
  id: number
  name: string
  email: string
  isAdmin: boolean
  constructor(id: number, name: string, email: string, isAdmin: boolean) {
    this.id = id
    this.name = name
    this.email = email
    this.isAdmin = isAdmin
  }
}
