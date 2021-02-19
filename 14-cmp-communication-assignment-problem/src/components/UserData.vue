<template>
  <form @submit.prevent="saveUserData">
    <div>
      <label>Full Name</label>
      <input type="text" v-model="fullNameInput" />
    </div>

    <div>
      <label>Age</label>
      <input type="number" v-model="ageInput" />
    </div>

    <div>
      <button>Save</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fullNameInput: "",
      ageInput: 0,
    };
  },
  emits: ["save-user-data"],
  methods: {
    saveUserData() {
      this.$emit("save-user-data", {
        fullName: this.fullNameInput,
        age: Number(this.ageInput),
      });
    },
  },
};
</script>

<style>
</style>