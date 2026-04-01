import { useState, useCallback } from 'react'
import LoginScreen from './components/LoginScreen'
import MainLayout from './components/MainLayout'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('inguide_auth') === 'true'
  })

  const handleLogin = useCallback(() => {
    sessionStorage.setItem('inguide_auth', 'true')
    setIsAuthenticated(true)
  }, [])

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} />
  }

  return <MainLayout />
}

export default App
