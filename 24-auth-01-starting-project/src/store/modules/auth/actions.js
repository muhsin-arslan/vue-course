let logoutTimer;

export default {
  async login(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'login'
    });
  },

  async signup(context, payload) {
    return context.dispatch('auth', {
      ...payload,
      mode: 'signup'
    });
  },

  async auth(context, payload) {
    const mode = payload.mode;
    const url =
      mode === 'signup'
        ? 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC98q1wsUtDV4rPXoo-6k9BAUYm3UdWfF0'
        : 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC98q1wsUtDV4rPXoo-6k9BAUYm3UdWfF0';

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: payload.emailAddress,
        password: payload.password,
        returnSecureToken: true
      })
    });

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to authenticate');
      throw error;
    }

    // const expiresIn = +responseData.expiresIn * 1000;
    const expiresIn = 6000;
    const tokenExpirationDate = new Date().getTime() + expiresIn;

    localStorage.setItem('token', responseData.idToken);
    localStorage.setItem('userId', responseData.localId);
    localStorage.setItem('tokenExpiration', tokenExpirationDate);

    logoutTimer = setTimeout(() => context.dispatch('autoLogout'), expiresIn);

    context.commit('setUser', {
      token: responseData.idToken,
      userId: responseData.localId
    });
  },

  tryLogin(context) {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const tokenExpiration = localStorage.getItem('tokenExpiration');

    const expiresIn = +tokenExpiration - new Date().getTime();

    if (expiresIn < 0) return;

    if (token && userId)
      context.commit('setUser', {
        token,
        userId,
        tokenExpiration: null
      });

    logoutTimer = setTimeout(() => context.dispatch('autoLogout'), expiresIn);
  },

  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('tokenExpiration');

    clearTimeout(logoutTimer);

    context.commit('setUser', {
      userId: null,
      token: null
    });
  },

  autoLogout(context) {
    context.dispatch('logout');
    context.commit('setAutoLogout');
  }
};
