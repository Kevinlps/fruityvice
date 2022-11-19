import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import Coin from '../../models/Fruit'
import { Card, CryptoLogo, CryptoTitle, InfoLink, Price } from './styles'

type Props = {
  coin: Coin
}

const priceIncreasedStyle = {
  color: '#26c281',
}

const priceDecreasedStyle = {
  color: '#ff4c30',
}

const CoinCard = ({ coin }: Props) => {
  const priceStyle =
    coin.priceChange1H >= 0 ? priceIncreasedStyle : priceDecreasedStyle

  const { vsCurrency } = useContext(UserContext)

  const formatter = Intl.NumberFormat('pt-BR', {
    currency: vsCurrency,
    style: 'currency',
  })

  return (
    <InfoLink to='/info' state={{ coin: coin }}>
      <Card>
        <CryptoLogo src={coin.logo} alt={`${coin.name} logo`} />
        <CryptoTitle>{coin.name}</CryptoTitle>
        <Price style={priceStyle}>{formatter.format(coin.currentPrice)}</Price>
      </Card>
    </InfoLink>
  )
}

export default CoinCard
