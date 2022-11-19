import { useRoutes } from 'react-router-dom'
import Header from './components/Header'
import { UserContextProvider } from './context/UserContext'
import routes from './routes'

const App = () => {
  const elements = useRoutes(routes)

  return (
    <UserContextProvider>
      <Header />
      {elements}
    </UserContextProvider>
  )
}

export default App
