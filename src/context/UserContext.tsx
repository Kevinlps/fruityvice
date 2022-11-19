import { createContext, ReactNode, useState } from 'react'

type UserContextType = {
  vsCurrency: string
  setVsCurrency: (newState: string) => void
}

const initialValue: UserContextType = {
  vsCurrency: 'eur',
  setVsCurrency: () => {},
}

export const UserContext = createContext<UserContextType>(initialValue)

type UserContextProps = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [vsCurrency, setVsCurrency] = useState(initialValue.vsCurrency)

  return (
    <UserContext.Provider value={{ vsCurrency, setVsCurrency }}>
      {children}
    </UserContext.Provider>
  )
}
