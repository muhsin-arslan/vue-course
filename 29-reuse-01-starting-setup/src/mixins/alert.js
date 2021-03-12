import UserAlert from '../components/UserAlert.vue';

export default {
  components: {
    UserAlert
  },
  data() {
    return {
      alertIsVisible: false,
      testNumber: null
    };
  },
  methods: {
    showAlert() {
      this.alertIsVisible = true;
      console.log(this.testNumber);
    },
    hideAlert() {
      this.alertIsVisible = false;
    }
  }
};
