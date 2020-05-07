export const SET_AUTHED_USER = "SET_AUTHED_USER";
export const UNSET_AUTHED_USER = "UNSET_AUTHED_USER";

export const setAuthedUser = (username) => ({
  type: SET_AUTHED_USER,
  username,
});
export const unSetAuthedUser = () => ({ type: UNSET_AUTHED_USER });
