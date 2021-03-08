export default {
  requests(state, _, _2, rootGetters) {
    const currentCoachId = rootGetters.coachId;

    const requestsOfCoach = state.requests.filter(request => {
      if (request.coachId === currentCoachId) return true;
      else return false;
    });

    return requestsOfCoach;
  },
  hasRequest(state) {
    return state.requests && state.requests.length > 0;
  }
};
