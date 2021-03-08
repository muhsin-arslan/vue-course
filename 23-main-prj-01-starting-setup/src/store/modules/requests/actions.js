export default {
  async contactCoach(context, payload) {
    const newRequest = {
      coachId: payload.coachId,
      emailAddress: payload.emailAddress,
      message: payload.message
    };

    const response = await fetch(
      `https://vue-http-demo-84997-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest)
      }
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request');
      throw error;
    }

    newRequest.id = responseData.name;

    context.commit('addRequest', newRequest);
  },
  async loadRequests(context) {
    const currentCoachId = context.rootGetters.coachId;

    const response = await fetch(
      `https://vue-http-demo-84997-default-rtdb.europe-west1.firebasedatabase.app/requests/${currentCoachId}.json`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch requests'
      );
      throw error;
    }

    const requests = [];
    for (const key in responseData) {
      const request = {
        id: key,
        coachId: responseData[key].coachId,
        emailAddress: responseData[key].emailAddress,
        message: responseData[key].message
      };

      requests.push(request);
    }

    context.commit('setRequests', requests);
  }
};
