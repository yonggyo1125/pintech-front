'use client'
import { createContext, useState } from 'react'

type ContextType = {
  state?: { title?: string }
  actions?: { setTitle?: (string) => void }
}

const CommonContext = createContext<ContextType>({})

const CommonProvider = ({ children }) => {
  const [title, setTitle] = useState<string | undefined>()

  const value: ContextType = {
    state: { title },
    actions: { setTitle },
  }

  return (
    <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
  )
}

const { Consumer: CommonConsumer } = CommonContext

export { CommonProvider, CommonConsumer }

export default CommonContext
