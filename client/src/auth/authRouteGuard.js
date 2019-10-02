import { getInstance } from './auth0';

function authGuard(to, from, next) {
  const authService = getInstance();

  const checkAuth = () => {
    if (authService.isAuthenticated) {
      return next();
    }

    authService.loginWithRedirect({ appState: { targetUrl: to.fullPath } });
  };

  if (!authService.loading) {
    return checkAuth();
  }

  authService.$watch('loading', loading => {
    if (loading === false) {
      return checkAuth();
    }
  });
}

export default authGuard;
