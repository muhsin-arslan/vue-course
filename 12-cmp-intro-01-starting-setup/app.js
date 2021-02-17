const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 1,
          fullName: "Michael Jordan",
          emailAddress: "michaeljordan@nba.com",
          phoneNumber: "+55 547 88 44",
        },
        {
          id: 2,
          fullName: "Marty Friedman",
          emailAddress: "marty@yahoo.co.jp",
          phoneNumber: "+82 341 22 11",
        },
      ],
    };
  },
  methods: {},
});

app.component("friend-card", {
  template: `
        <li>
            <h2>{{friend.fullName}}</h2>
            <button @click="toggleDetail">Show Details</button>
            <ul v-show="isDetailVisible">
            <li><strong>Phone:</strong> {{friend.phoneNumber}}</li>
            <li><strong>Email:</strong> {{friend.emailAddress}}</li>
            </ul>
        </li>
    `,
  data() {
    return {
      isDetailVisible: false,
      friend: {
        id: 1,
        fullName: "Michael Jordan",
        emailAddress: "michaeljordan@nba.com",
        phoneNumber: "+55 547 88 44",
      },
    };
  },
  methods: {
    toggleDetail() {
      this.isDetailVisible = !this.isDetailVisible;
    },
  },
});

app.mount("#app");
