export default {
  coaches(state) {
    return state.coaches;
  },
  coach: state => coachId => {
    return state.coaches.find(coach => coach.id === coachId);
  },
  hasCoaches(state) {
    return state.coaches && state.coaches.length > 0;
  },
  isCoach(_, getters, _2, rootGetters) {
    const coaches = getters.coaches;
    const coachId = rootGetters.coachId;
    return coaches.some(coach => coach.id === coachId);
  },
  shouldUpdate(state) {
    const lastFetchTimestamp = state.lastFetch;

    if (!lastFetchTimestamp) return true;

    const currentTimestamp = new Date().getTime();
    return (currentTimestamp - lastFetchTimestamp) / 1000 > 60; // 1min
  }
};
