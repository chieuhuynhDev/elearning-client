import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { userService } from "../service/userService";

export let loginActionService = createAsyncThunk(
  "userSlice/loginAcitonService",
  async (dataForm) => {
    let result = await userService.login(dataForm);

    return result.data;
  }
);

// Lấy dữ liệu từ localStorage khi ứng dụng khởi động
const initialState = {
  dataLogin: localStorage.getItem("USER_LOGIN")
    ? JSON.parse(localStorage.getItem("USER_LOGIN"))
    : null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Trạng thái khi API thành công
    builder.addCase(loginActionService.fulfilled, (state, action) => {
      state.dataLogin = action.payload;
    });
    // Trạng thái khi API bị lỗi (thất bại)
    builder.addCase(loginActionService.rejected, (state, action) => {
      console.error("Login failed:", action.error.message);
      state.dataLogin = null;
    });
  },
});

export default userSlice.reducer;
