<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API ✅ -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code ✅ -->

  <!-- <h3 v-if="isCourseGoalVisible">{{ courseGoal }}</h3> -->
  <!-- <h3 v-if="courseGoal.isCourseGoalVisible">{{ courseGoal.title }}</h3> -->
  <h3 v-if="courseGoal.isCourseGoalVisible">{{ courseGoal.title }}</h3>

  <!-- Task 2: Toggle (show/ hide) the goal with help of the button ✅  -->
  <button @click="toggleCourseGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { /*ref,*/ reactive } from 'vue';

export default {
  setup() {
    // MANAGE DATA via REFS
    // const courseGoal = ref('Complete the Vue Course');
    // const isCourseGoalVisible = ref(true);
    // Toggle Course Goal
    // function toggleCourseGoal() {
    //   isCourseGoalVisible.value = !isCourseGoalVisible.value;
    // }
    // return { courseGoal, isCourseGoalVisible, toggleCourseGoal };

    // MANAGE DATA via REF OBJECT
    // const courseGoal = ref({
    //   title: 'Complete the Vue Course',
    //   isCourseGoalVisible: true,
    // });
    // Toggle Course Goal
    // function toggleCourseGoal() {
    //   courseGoal.value.isCourseGoalVisible = !courseGoal.value.isCourseGoalVisible;
    // }
    // return { courseGoal, toggleCourseGoal };

    // MANAGE DATA via REACTIVE OBJECT
    const courseGoal = reactive({
      title: 'Complete the Vue Course',
      isCourseGoalVisible: true,
    });
    // Toggle Course Goal
    function toggleCourseGoal() {
      courseGoal.isCourseGoalVisible = !courseGoal.isCourseGoalVisible;
    }
    return { courseGoal, toggleCourseGoal };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>