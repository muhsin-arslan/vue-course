export default {
  async registerCoach(context, payload) {
    const coachId = context.rootGetters.coachId;
    const coach = {
      //id: context.rootGetters.coachId,
      firstName: payload.firstName,
      lastName: payload.lastName,
      description: payload.description,
      hourlyRate: payload.hourlyRate,
      areas: payload.areas
    };

    const response = await fetch(
      `https://vue-http-demo-84997-default-rtdb.europe-west1.firebasedatabase.app/coaches/${coachId}.json`,
      {
        method: 'PUT',
        body: JSON.stringify(coach)
      }
    );

    if (!response.ok) {
      ///.... error
    }

    // const responseData = await response.json();

    context.commit('registerCoach', {
      ...coach,
      id: coachId
    });
  },
  async loadCoaches(context, payload) {
    if (!payload.forceLoad && !context.getters.shouldUpdate) {
      console.log('Load from cache (redux) 🎃');
      return;
    }

    const response = await fetch(
      'https://vue-http-demo-84997-default-rtdb.europe-west1.firebasedatabase.app/coaches.json'
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to loading coaches.'
      );
      throw error;
    }

    const coaches = [];
    for (const key in responseData) {
      const coach = {
        id: key,
        firstName: responseData[key].firstName,
        lastName: responseData[key].lastName,
        description: responseData[key].description,
        hourlyRate: responseData[key].hourlyRate,
        areas: responseData[key].areas
      };

      coaches.push(coach);
    }

    context.commit('setCoaches', coaches);
    context.commit('setLastFetchTimestamp');

    console.log('Updated from Firebase 🔥');
  }
};
