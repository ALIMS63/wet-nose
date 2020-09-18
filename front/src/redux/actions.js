import { SET_USER, DELETE_USER, AUTHENTICATED_SUCCESSFULLY } from "./action-types";

export function setUser(user) {
  return {
    type: SET_USER,
    payload: {
      user,
    },
  };
}
