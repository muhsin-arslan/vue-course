<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChanges">Save Changes</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      isDataSaved: false,
    };
  },
  methods: {
    confirmInput() {
      // Do something...
      this.$router.push('/teams');
    },
    saveChanges() {
      this.isDataSaved = true;
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log('Before route enter - users list component');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);

    if (this.isDataSaved) next();
    else {
      const userWantsToLeave = confirm(
        'Are you sure? You got unsaved changes!'
      );
      next(userWantsToLeave);
    }
  },
  unmounted() {
    console.log('User list is unmounted, user is left from user list.');
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>