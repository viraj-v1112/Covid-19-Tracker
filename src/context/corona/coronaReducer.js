import { GET_STATS, SET_LOADING, GET_HELPLINE } from "../types.js";

export default (state, action) => {
  switch (action.type) {
    case GET_STATS:
      console.log(action.payload.data.total);
      return {
        ...state,
        data: action.payload.data.total,
        statewise: action.payload.data.statewise,
        loading: false
      };
    case GET_HELPLINE:
      return {
        ...state,
        help: action.payload.data.contacts,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return {
        state
      };
  }
};
