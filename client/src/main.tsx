import React from 'react'
import ReactDOM from 'react-dom/client'

import { Bounce, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import App from './App.tsx'
import GlobalStyle from './utils/styles/globals.ts'

import { AuthProvider } from '@/contexts/AuthProvider.tsx'
import NotificationProvider from './contexts/NotificationProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <App />
      <NotificationProvider />
    </AuthProvider>
  </React.StrictMode>
)
