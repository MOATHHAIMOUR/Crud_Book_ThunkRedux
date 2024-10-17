import { createSlice } from "@reduxjs/toolkit";

const initialState = { IsLoggedIn: false, name: "Moath haimour" };

export const authSlice = createSlice({
  name: "auth", // This should be an object, not an array
  initialState,
  reducers: {
    logInOut: (state) => {
      state.IsLoggedIn = !state.IsLoggedIn; // Toggle login state
    },
  },
});

export const { logInOut } = authSlice.actions;

export default authSlice.reducer;
