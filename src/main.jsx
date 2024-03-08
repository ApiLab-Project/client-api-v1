import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {ApiProvider } from './common/context/api-context'
import {QuizProvider } from './common/context/quiz-context'
import './index.css'
import {GlobalStyled} from './theme/globalStyled'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <GlobalStyled/>
    <ApiProvider>
      <QuizProvider>
    <App />    
    </QuizProvider>
    </ApiProvider>
    </>
  </React.StrictMode>,
)
