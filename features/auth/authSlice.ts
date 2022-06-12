import { createSlice } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "../../utils/store";

const initialAuthState: {isAuthenticated: boolean, user: User | null} = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",

  initialState: initialAuthState,

  reducers: {
    signedIn(state, action) {
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    },
    signedOut(state) {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload.subject,
      };
    },
  },
});

export default authSlice.reducer;

export const { signedIn, signedOut } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth;
export const selectUser = (state: AppState) => selectAuthState(state).user;
