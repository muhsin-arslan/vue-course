const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      taskInputValue: "",
      isShown: true,
      toggleButtonText: "Hide List",
    };
  },
  watch: {
    isShown(newValue) {
      this.toggleButtonText = newValue === true ? "Hide List" : "Show List";
    },
  },
  methods: {
    addTask() {
      if (this.taskInputValue !== "") this.tasks.push(this.taskInputValue);
      this.taskInputValue = "";
    },
    removeTask(indexOfTask) {
      this.tasks.splice(indexOfTask, 1);
    },
    toggleList() {
      this.isShown = !this.isShown;
    },
  },
});

app.mount("#assignment");
