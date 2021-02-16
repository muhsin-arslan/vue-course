const app = Vue.createApp({
  data() {
    return {
      counter: 5,
      name: "",
      name2: "",
      confirmedName: "",
      colorHex: "#FFFFFF",
    };
  },
  computed: {
    fullName() {
      console.log("Full name computed method");
      if (this.name === "") return "";

      return `${this.name} Arslan`;
    },
    changeBackground() {
      return `background-color:${this.colorHex}`;
    },
  },
  watch: {
    colorHex(newValue, oldValue) {
      console.log(`New Hex: ${newValue}`);
      console.log(`Old Hex: ${oldValue}`);
      if (!this.colorHex.includes("#")) this.colorHex = `#${newValue}`;
    },
  },
  methods: {
    increaseCounter(amount) {
      this.counter = this.counter + amount;
    },
    decreaseCounter(amount) {
      this.counter = this.counter - amount;
    },
    changeName(event) {
      this.name = event.target.value;
    },
    changeName2(event, lastName) {
      this.name2f = `${event.target.value} ${lastName}`;
    },
    submitForm() {
      console.log("Validations are okay and form submitted.");
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    resetName() {
      this.name = "";
    },
  },
});

app.mount("#events");
