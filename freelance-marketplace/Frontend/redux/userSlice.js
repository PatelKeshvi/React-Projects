import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("http://localhost:5000/api/users");
  return response.data.totalUsers;
});

const userSlice = createSlice({
  name: "users",
  initialState: { totalUsers: 0, status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.totalUsers = action.payload;
    });
  },
});

export default userSlice.reducer;
