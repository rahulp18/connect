import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    pending: false,
    error: false,
  },

  reducers: {
    signUpStart: (state) => {
      state.pending = true;
    },
    signUpSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    signUpError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { signUpStart, signUpSuccess, signUpError } = userSlice.actions;
export default userSlice.reducer;
