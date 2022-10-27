//REACT
import React from 'react'
import ReactDOM from 'react-dom/client'

//COMPONENTE
import { App } from './App'

//STYLES
import GlobalStyle from './globalStyle'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
