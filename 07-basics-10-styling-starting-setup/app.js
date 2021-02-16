const app = Vue.createApp({
  data() {
    return {
      isASelected: false,
      isBSelected: false,
      isCSelected: false,
    };
  },
  computed: {
    boxClassesB() {
      return { demo: true, active: this.isBSelected };
    },
  },
  methods: {
    selectBox(box) {
      if (box === "A") {
        this.isASelected = true;
        this.isBSelected = false;
        this.isCSelected = false;
      }
      if (box === "B") {
        this.isASelected = false;
        this.isBSelected = true;
        this.isCSelected = false;
      }
      if (box === "C") {
        this.isASelected = false;
        this.isBSelected = false;
        this.isCSelected = true;
      }
    },
  },
});
app.mount("#styling");
