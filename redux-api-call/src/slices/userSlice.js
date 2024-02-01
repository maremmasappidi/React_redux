import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//Action
export const getUsers = createAsyncThunk("getUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

export const addUser = createAsyncThunk("addUser", async (userData) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    userData
  );
  return response.data;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.fulfilled, (state, action) => {
        state.data = action.payload;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.data = [];
        console.log("error", action.payload);
        state.error = action.error.message;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.error = null;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
