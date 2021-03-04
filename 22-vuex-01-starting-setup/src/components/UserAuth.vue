<template>
  <p>Auth Status: {{ authStatus ? 'Authenticated' : 'Not Authenticated' }}</p>
  <button @click="login">Login</button>
  <button @click="logout">Logout</button>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters({ authStatus: 'auth/isUserAuthenticated' }),
  },
  methods: {
    ...mapActions({ login: 'auth/loginAsync', logout: 'auth/logoutAsync' }),
  },
};
</script>