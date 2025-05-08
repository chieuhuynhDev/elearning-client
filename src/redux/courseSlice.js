import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { callApiKhoaHoc } from "../service/callApiKhoaHoc";

// Thunk để lấy danh sách khóa học phân trang
export const fetchCoursesPagination = createAsyncThunk(
  "courses/fetchCoursesPagination",
  async (currentPage) => {
    try {
      const response = await callApiKhoaHoc.getListCoursePagination(
        currentPage
      );

      return response.data;
    } catch (error) {
      // Kiểm tra nếu lỗi có phản hồi từ server
      return error.message;
    }
  }
);

//  call api lấy danh mục khóa học
export const fetchCategoryCourses = createAsyncThunk(
  "courses/fetchCategoryCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await callApiKhoaHoc.layDanhMucKhoaHoc();

      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue(error.message);
    }
  }
);

const courseSlice = createSlice({
  name: "courseSlice",
  initialState: {
    coursesPagination: [],
    allCourses: [],
    categories: [],
    currentPage: 1,
    pageSize: 12,
    totalPages: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoursesPagination.fulfilled, (state, action) => {
        state.coursesPagination = action.payload.items;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchCoursesPagination.rejected, (state, action) => {
        state.coursesPagination = [];
      })

      .addCase(fetchCategoryCourses.fulfilled, (state, action) => {
        state.categories = action.payload || [];
      })
      .addCase(fetchCategoryCourses.rejected, (state) => {
        state.categories = [];
      });
  },
});

export default courseSlice.reducer;
