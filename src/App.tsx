import { LoginButton } from './components/LoginButton'
import { useAuthStore } from './store/authStore'
import './App.css'

function App() {
  const { isAuthenticated, token } = useAuthStore()

  return (
    <div className="app-container">
      <h1>Welcome to Our App</h1>
      <LoginButton />
      
      {isAuthenticated && (
        <div className="token-display">
          <h2>Authentication Successful</h2>
          <p>Your access token:</p>
          <pre className="token">{token}</pre>
        </div>
      )}
    </div>
  )
}

export default App