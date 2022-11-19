import { useContext, useEffect, useState } from 'react'
import CoinCard from '../../components/CoinCard'
import Fruit from '../../models/Fruit'
import CoinService from '../../services/CoinService'
import { Container, FilterInput, Loading } from './styles'
import loading from '../../assets/img/loading.gif'
import { UserContext } from '../../context/UserContext'

const Home = () => {
  const [fruit, setFruit] = useState<Fruit[]>([])
  const [filter, setFilter] = useState('')
  const [coinsLoaded, setCoinsLoaded] = useState(false)
  const [coinService] = useState(new CoinService())

  const { vsCurrency } = useContext(UserContext)

  const loadFruit = async () => {
    setCoinsLoaded(false)
    const loadedFruits = await coinService.loadFruit(
      
    )
    setFruit(loadedFruits)
    setCoinsLoaded(true)
  }

  useEffect(() => {
    loadFruit()
  }, [vsCurrency])

  useEffect(() => {
    const results = coinService.filterCoins(filter)
    setFruit(results)
  }, [filter])

  return (
    <Container>
      {coinsLoaded && (
        <>
          <FilterInput
            placeholder='Digite o nome ou o símbolo da crypto'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          {fruit.length > 0 &&
            fruit.map((c) => <CoinCard coin={c} key={c.id} />)}
          
          {fruit.length == 0 && <h2>Erro ao acessar os dados das moedas</h2>}
        </>
      )}

      {!coinsLoaded && <Loading src={loading} alt='Carregando criptomoedas' />}
    </Container>
  )
}

export default Home
