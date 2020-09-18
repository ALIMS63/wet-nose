import { SET_USER, AUTHENTICATED_SUCCESSFULLY, LOGOUT } from "./action-types";

export function userReducer(state = false, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload.user;
    case AUTHENTICATED_SUCCESSFULLY:
      return {
        isAuthenticated: true,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

