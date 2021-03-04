import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const counterModule = {
  namespaced: true,
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increaseCounter(state, payload) {
      if (payload?.value) state.counter = state.counter + payload.value;
      else state.counter = state.counter + 1;
    }
  },
  actions: {
    incrementAsync(context) {
      setTimeout(function() {
        context.commit('increment');
      }, 2000);
    },
    increaseAsync(context, payload) {
      setTimeout(function() {
        context.commit('increaseCounter', payload);
      }, 3500);
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;

      if (finalCounter < 0) return 0;
      if (finalCounter > 100) return 100;
      return finalCounter;
    }
  }
};

const authModule = {
  namespaced: true,
  state() {
    return {
      isAuth: false
    };
  },
  getters: {
    isUserAuthenticated(state) {
      return state.isAuth;
    }
  },
  mutations: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    }
  },
  actions: {
    loginAsync(context) {
      setTimeout(function() {
        context.commit('login');
        console.log('Login...');
      }, 2500);
    },
    logoutAsync(context) {
      setTimeout(function() {
        context.commit('logout');
        console.log('Logout...');
      }, 2500);
    }
  }
};

const store = createStore({
  modules: {
    counter: counterModule,
    auth: authModule
  }
});

const app = createApp(App);
app.use(store);
app.mount('#app');
