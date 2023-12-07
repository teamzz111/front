const API_ENDPOINTS = {
  USER: {
    LOGIN: "/user/auth/login",
    GET_ALL: "/user/all",
    DELETE: "user/{id}",
    UPDATE: "user/{id}",
  },
  ANALYTICS: {
    REGISTER_VISIT: "/analytics/register",
    GET_ALL_ROUTES: "/analytics/getAllVisits",
  },
};

export default API_ENDPOINTS;
