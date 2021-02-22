<template>
  <the-header title="Remember Me"></the-header>
  <the-learning-resources></the-learning-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheLearningResources from './components/learning-resources/TheLearningResources.vue';

export default {
  components: { TheHeader, TheLearningResources },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>