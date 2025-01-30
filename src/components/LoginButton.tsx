import { useAuthStore } from '../store/authStore';

export function LoginButton() {
  const { login, isAuthenticated } = useAuthStore();

  return (
    <button
      onClick={login}
      disabled={isAuthenticated}
      className="login-button"
    >
      {isAuthenticated ? 'Logged In' : 'Login'}
    </button>
  );
}