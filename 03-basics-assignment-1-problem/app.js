const app = Vue.createApp({
  data() {
    return {
      name: "Muhsin",
      age: 28,
      imageSource: "https://nosidebar.com/images/benefits-of-minimalism.jpg",
    };
  },
  methods: {
    generateFavoriteNumber() {
      return Math.random();
    },
    calculateAge() {
      return this.age + 5;
    },
  },
});

app.mount("#assignment");
