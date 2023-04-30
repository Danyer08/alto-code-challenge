import { IHttpClient } from '../../core/interfaces/http-client.interface'

export class HttpClient implements IHttpClient {
  async get<T>(url: string, id: number): Promise<T> {
    const data = localStorage.getItem(url)
    const items: Array<T> = data ? JSON.parse(data) : null

    return new Promise((resolve, reject) => {
      if (items) {
        const item = items.find((item: any) => item.id === id)
        resolve(item!)
      } else {
        reject('Not found')
      }
    })
  }

  async getAll<T>(url: string): Promise<Array<T>> {
    const items = await this.getCurrentItems<T>(url)
    return new Promise((resolve, reject) => {
      if (items) {
        resolve(items)
      } else {
        reject('Not found')
      }
    })
  }

  async post<T>(url: string, body: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        let items: Array<T> = await this.getCurrentItems<T>(url)
        items = [...items, body]
        localStorage.setItem(url, JSON.stringify(items))
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }

  async put<T>(url: string, body: any): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        let items: Array<T> = await this.getCurrentItems<T>(url)
        const item = items.find((item: any) => item.id === body.id)
        if (item) {
          items = items.filter((item: any) => item.id !== body.id)
        } else {
          reject('Not found')
        }

        items = [...items, body]
        localStorage.setItem(url, JSON.stringify(items))
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }

  async delete<T>(url: string, id: number): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        let items: Array<T> = await this.getCurrentItems<T>(url)
        const item = items.find((item: any) => item.id === id)
        if (item) {
          items = items.filter((item: any) => item.id !== id)
        } else {
          reject('Not found')
        }

        localStorage.setItem(url, JSON.stringify(items))
        resolve()
      } catch (e) {
        reject(e)
      }
    })
  }

  private async getCurrentItems<T>(url: string): Promise<Array<T>> {
    const data = localStorage.getItem(url)
    const items: Array<T> = data ? JSON.parse(data) : null
    return new Promise((resolve, reject) => {
      if (items) {
        resolve(items)
      } else {
        reject('Not found')
      }
    })
  }
}
