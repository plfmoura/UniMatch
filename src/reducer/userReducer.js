import { createSlice } from "@reduxjs/toolkit";

const initialState = {
<<<<<<< HEAD
  user: null,
=======
  user: [],
>>>>>>> 46ae7041ad74d2a8b5736868cf9cd247f23465e1
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
      localStorage.removeItem("uni-match-user");
    },
    updateUser: (state, action) => {
      let property = Object.keys(action.payload)[0];
      let value = action.payload[`${property}`];
      switch (property) {
        case "name":
          state.user = { ...state.user, name: value };
          break;
        case "lastName":
          state.user = { ...state.user, lastName: value };
          break;
        case "birthDate":
          state.user = { ...state.user, birthDate: value };
          break;
        case "gender":
          state.user = { ...state.user, gender: value };
          break;
        case "photoProfile":
          state.user = { ...state.user, photoProfile: value };
          break;
        default:
          break;
      }
      localStorage.setItem("uni-match-user", JSON.stringify(state.user));
    },
  },
});

export const { setUser, removeUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
