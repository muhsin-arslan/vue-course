<template>
  <section>
    <h2>{{ fullName }}</h2>
    <h3>{{ age }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    fullName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style>
</style>