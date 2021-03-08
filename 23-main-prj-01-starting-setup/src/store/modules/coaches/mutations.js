export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setLastFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
};
