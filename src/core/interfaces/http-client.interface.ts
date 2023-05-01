export interface IHttpClient {
  get: <T>(url: string, id: number) => Promise<T>
  getAll: <T>(url: string) => Promise<Array<T>>
  post: (url: string, body: any) => Promise<unknown>
  put: (url: string, body: any) => Promise<unknown>
  delete: (url: string, id: number) => Promise<unknown>
}
