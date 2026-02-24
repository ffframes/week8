import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, createSystem, defineConfig } from "@chakra-ui/react"
import { BrowserRouter } from 'react-router'


const config = defineConfig({
  theme: {
    tokens: {
      colors: {},
    },
  },
})

const system = createSystem(config)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <ChakraProvider value={system}>
      <BrowserRouter><App /></BrowserRouter>
    </ChakraProvider>
    
  </React.StrictMode>,
)