/* const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

const addGoal = function (goalValue) {
  const markup = `<li>${goalValue}</li>`;
  listEl.insertAdjacentHTML("afterbegin", markup);
  inputEl.value = "";
};

buttonEl.addEventListener("click", () => addGoal(inputEl.value));
 */

Vue.createApp({
  data() {
    return {
      goals: [],
      goalValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.goalValue);
      this.goalValue = "";
    },
  },
}).mount("#app");
