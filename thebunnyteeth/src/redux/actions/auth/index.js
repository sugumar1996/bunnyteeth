import { createAction } from "redux-act";

export const loginPending = createAction("Login API started fetching");
export const loginSuccessful = createAction(
  "Login API successful",
  (credentials) => ({ credentials })
);
export const logoutUserSuccessfull = createAction("Logout Action successful");
export const singlePostPending = createAction("Single Post API started fetching");
export const singlePostSuccessful = createAction(
  "singlePost API successful",
  (id) => ({ id })
);
