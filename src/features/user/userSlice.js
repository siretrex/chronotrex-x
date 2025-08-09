// features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user: null,
  isLoggedIn: false,
  token: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      console.log(action)
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.token = action.payload.token;
    },
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      state.token= null;
    },
    updateTask(state, action){
        state.user.tasks = action.payload
        console.log(state.user)
    }
  }
});

export const { login, logout, updateTask} = userSlice.actions;
export default userSlice.reducer;
