import axios, { AxiosInstance } from 'axios'
import Fruit from '../models/Fruit'


export default class CoinService {
  private _http: AxiosInstance
  private _endpoint: string
  private _fruitSelectd: string
  private _fruits: Fruit[]

  constructor() {
    const urlApi = import.meta.env.VITE_API_URL
    this._http = axios.create({
      baseURL: urlApi,
    })

    this._endpoint = import.meta.env.VITE_FRUIT_ENDPOINT
    this._fruitSelectd = import.meta.env.VITE_FRUIT_VALUE
    this._fruits = []
  }

  async loadFruit(fruitValue: string) {
    this._fruits = []
    const response = await this._http(this._endpoint, {
      params: {
        _fruitSelectd : fruitValue
      },
    })

    try {
      if (response.status == 200) {
        const { data } = response
        this._fruits = data.map((obj: any) => new Fruit(obj))
      }
    } catch(err) {
      console.log(err)
    }

    return this._fruits
  }

  filterCoins(filter: string) {
    const sanitizedFilter = filter.trim().toLowerCase()

    if (!sanitizedFilter) {
      return this._fruits
    }

    return this._fruits.filter((c) => {
      return (
        c.name.toLowerCase().includes(sanitizedFilter) ||
        c.symbol.toLowerCase().includes(sanitizedFilter)
      )
    })
  }
}
