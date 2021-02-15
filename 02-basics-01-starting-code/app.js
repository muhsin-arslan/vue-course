const app = Vue.createApp({
  data() {
    return {
      courseGoal: true,
      courseGoalA: "This is my goal A",
      courseGoalB: "<strike>This is my goal B</strike>",
      vueLink: "https://vuejs.org",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? "Learn Vue" : "Master Vue";
    },

    outputGoal2() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB;
    },
  },
});

app.mount("#user-goal");
