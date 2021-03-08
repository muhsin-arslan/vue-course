<template>
  <section>
    <base-card>
      <header><h2>Requests Received</h2></header>
      <ul v-if="hasRequest">
        <request-item
          v-for="request in receivedRequests"
          :key="request.id"
          :emailAddress="request.emailAddress"
          :message="request.message"
        ></request-item>
      </ul>
      <h3 v-else>You haven't received any request yet.</h3>
    </base-card>
  </section>
</template>

<script>
import RequestItem from '../../components/requests/RequestItem.vue';
export default {
  components: { RequestItem },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequest() {
      return this.$store.getters['requests/hasRequest'];
    },
  },
  created() {
    try {
      this.$store.dispatch('requests/loadRequests');
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>