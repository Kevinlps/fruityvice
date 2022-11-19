import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import Coin from '../../models/Fruit'
import {
  BackButton,
  BackLink,
  BackLinkPanel,
  CardRow,
  Container,
  InfoCard,
  RowKey,
  RowValue,
} from './styles'

type Location = {
  state: {
    coin: Coin
  }
}

const CoinInfo = () => {
  const location: Location = useLocation()
  const { coin } = location.state

  const { vsCurrency } = useContext(UserContext)

  const moneyFormatter = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: vsCurrency,
  })

  return (
    <Container>
      <InfoCard>
        <CardRow>
          <RowKey>Nome:</RowKey>
          <RowValue>{coin.name}</RowValue>
        </CardRow>
        <CardRow>
          <RowKey>Símbolo:</RowKey>
          <RowValue>{coin.symbol}</RowValue>
        </CardRow>
        <CardRow>
          <RowKey>Valor:</RowKey>
          <RowValue>{moneyFormatter.format(coin.currentPrice)}</RowValue>
        </CardRow>
        <CardRow>
          <RowKey>Capitalização:</RowKey>
          <RowValue>{moneyFormatter.format(coin.marketCap)}</RowValue>
        </CardRow>
        <CardRow>
          <RowKey>Volume total:</RowKey>
          <RowValue>{coin.totalVolume}</RowValue>
        </CardRow>
        <CardRow>
          <RowKey>Variação na última hora:</RowKey>
          <RowValue>{coin.priceChange1H.toFixed(2)}%</RowValue>
        </CardRow>
      </InfoCard>

      <BackLinkPanel>
        <BackLink to='/'>
          <BackButton>Voltar</BackButton>
        </BackLink>
      </BackLinkPanel>
    </Container>
  )
}

export default CoinInfo
