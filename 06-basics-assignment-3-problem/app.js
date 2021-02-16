const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    resultText(newResult) {
      const global = this;
      if (newResult === "Too Much!") {
        setTimeout(function () {
          global.counter = 0;
        }, 5000);
      }
    },
  },
  computed: {
    resultText() {
      return this.counter < 37 ? "Not There Yet" : "Too Much!";
    },
  },
  methods: {
    increaseCounter(amount) {
      this.counter = this.counter + amount;
    },
    decreaseCounter(amount) {
      this.counter = this.counter - amount;
    },
  },
});
app.mount("#assignment");
