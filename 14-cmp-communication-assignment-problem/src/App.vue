<template>
  <user-data @save-user-data="saveCurrentUser"></user-data>
  <active-user :fullName="this.fullName" :age="this.age"></active-user>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      age: 0,
    };
  },
  methods: {
    saveCurrentUser(currentUser) {
      const { fullName, age } = currentUser;

      this.fullName = fullName;
      this.age = age;
    },
  },
};
</script>

<style>
</style>