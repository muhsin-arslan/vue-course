<template>
  <button @click="increaseCount">Add via Payload</button>
</template>

<script>
export default {
  methods: {
    increaseCount() {
      this.$store.commit('counter/increaseCounter', { value: 5 });
    },
  },
};
</script>