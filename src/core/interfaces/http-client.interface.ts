export interface IHttpClient {
  get: <T>(url: string, id: number) => Promise<T>
  getAll: <T>(url: string) => Promise<Array<T>>
  post: (url: string, body: any) => Promise<void>
  put: (url: string, body: any) => Promise<void>
  delete: (url: string, id: number) => Promise<void>
}
