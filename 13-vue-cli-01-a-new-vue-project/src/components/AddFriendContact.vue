<template>
  <section>
    <header><h1>Add New Friend</h1></header>
    <form @submit.prevent="submitForm">
      <div>
        <label>Full Name</label>
        <input type="text" v-model="fullNameInput" />
      </div>

      <div>
        <label>Email Address</label>
        <input type="text" v-model="emailAddressInput" />
      </div>

      <div>
        <label>Phone Number</label>
        <input type="text" v-model="phoneNumberInput" />
      </div>

      <div>
        <button>Add Friend</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["add-friend"],
  data() {
    return {
      fullNameInput: "",
      emailAddressInput: "",
      phoneNumberInput: "",
    };
  },
  methods: {
    submitForm() {
      this.$emit("add-friend", {
        fullName: this.fullNameInput,
        emailAddress: this.emailAddressInput,
        telephoneNumber: this.phoneNumberInput,
      });
    },
  },
};
</script>

<style>
</style>