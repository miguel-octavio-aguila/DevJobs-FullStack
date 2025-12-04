import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { AuthContextProvider } from './components/providers/AuthContextProvider'
import { FavoritesProvider } from './components/providers/FavContextProvider'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // react router
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
)
