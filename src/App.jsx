import { useState, useCallback, lazy, Suspense } from 'react'
import LoginScreen from './components/LoginScreen'

const MainLayout = lazy(() => import('./components/MainLayout'))

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

  return (
    <Suspense fallback={<LoadingScreen />}>
      <MainLayout />
    </Suspense>
  )
}

function LoadingScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-sky-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-slate-500 text-sm">読み込み中...</p>
      </div>
    </div>
  )
}

export default App
