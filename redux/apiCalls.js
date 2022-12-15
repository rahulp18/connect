import axios from "axios";

import { signUpStart, signUpSuccess, signUpError } from "./userSlice";

export const signUp = async (formData, dispatch) => {
  dispatch(signUpStart());
  try {
    const res = await axios.post("http://localhost:3000/api/signup", formData);
    dispatch(signUpSuccess(res.data));
  } catch (error) {
    dispatch(signUpError());
  }
};
