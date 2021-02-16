const app = Vue.createApp({
  data() {
    return {
      input: "",
      confirmedInput: "",
    };
  },
  methods: {
    showAlert() {
      alert("This is just regular alert.");
    },
    changeInput(event) {
      this.input = event.target.value;
    },
    confirmInput(event) {
      this.confirmedInput = event.target.value;
    },
  },
});

app.mount("#assignment");
