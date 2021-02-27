<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="user in teamUsers"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  inject: ['teams', 'users'],
  components: {
    UserItem,
  },
  props: ['teamId'],
  data() {
    return {
      teamName: '',
      teamUsers: [],
    };
  },
  methods: {
    loadTeamMembers(teamId) {
      const team = this.teams.find((team) => team.id === teamId);
      const userIdsOfTeam = team.users;

      const usersOfTeam = [];

      for (const userId of userIdsOfTeam) {
        const user = this.users.find((user) => user.id === userId);
        usersOfTeam.push(user);
      }

      this.teamUsers = usersOfTeam;
      this.teamName = team.name;
    },
  },
  created() {
    this.loadTeamMembers(this.teamId);
    console.log(this.$route.query);
  },
  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>