import { RouteObject } from 'react-router-dom'
import CoinInfo from './pages/CoinInfo'
import Home from './pages/Home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/info',
    element: <CoinInfo />,
  },
]

export default routes
