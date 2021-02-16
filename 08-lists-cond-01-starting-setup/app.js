const app = Vue.createApp({
  data() {
    return {
      goals: [],
      goalInput: "",
      person: { firstName: "Muhsin", lastName: "Arslan", age: "28" },
    };
  },
  methods: {
    addGoal() {
      if (this.goalInput !== "") this.goals.push(this.goalInput);
      this.goalInput = "";
    },
    removeGoal(indexOfGoal) {
      this.goals.splice(indexOfGoal, 1);
    },
  },
});

app.mount("#user-goals");
