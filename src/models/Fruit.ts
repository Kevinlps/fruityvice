export default class Fruit {
  id: string
  symbol: string
  name: string
  logo: string
  currentPrice: number
  marketCap: number
  totalVolume: number
  priceChange1H: number

  constructor(obj: any) {
    const {
      id,
      symbol,
      name,
      image,
      current_price,
      market_cap,
      total_volume,
      price_change_percentage_1h_in_currency,
    } = obj

    this.id = id
    this.symbol = symbol
    this.name = name
    this.logo = image
    this.currentPrice = current_price
    this.marketCap = market_cap
    this.totalVolume = total_volume
    this.priceChange1H = price_change_percentage_1h_in_currency
  }
}
