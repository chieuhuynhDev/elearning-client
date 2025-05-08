// src/redux/userAdminSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { callApiNguoiDung } from "../service/callApiNguoiDung";

// Async thunk để gọi API lấy tât cả danh sách người dùng
export const fetchUserListsAll = createAsyncThunk(
  "userAdmin/fetchUsersAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await callApiNguoiDung.getUserListAll();

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchSearchUsers = createAsyncThunk(
  "userAdmin/fetchSearchUsers",
  async (keyword, { rejectWithValue }) => {
    try {
      const response = await callApiNguoiDung.searchUsers(keyword);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

// Slice cho quản lý người dùng
const userAdminSlice = createSlice({
  name: "userAdminSlice",
  initialState: {
    userListAll: [],
    status: "idle",
    error: null,
    totalPages: 0,
  },
  reducers: {
    // Thêm các reducer nếu cần
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchUserListsAll.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUserListsAll.fulfilled, (state, action) => {
        state.userListAll = action.payload; // Dữ liệu trả về từ API
      })
      .addCase(fetchUserListsAll.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Không thể lấy danh sách người dùng.";
      })

      .addCase(fetchSearchUsers.fulfilled, (state, action) => {
        state.userListAll = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchSearchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Không thể tìm kiếm người dùng.";
      });
  },
});

export default userAdminSlice.reducer;
