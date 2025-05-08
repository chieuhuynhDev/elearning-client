import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { callApiKhoaHoc } from "../../service/callApiKhoaHoc";
import { normalizeString } from "../../untils/normalize"; // Thêm import hàm normalize

const { Search } = Input;

const SearchLogicComponent = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState(""); // Lưu giá trị tìm kiếm

  const handleSearch = (value) => {
    const normalizedValue = normalizeString(value); // Chuẩn hóa giá trị tìm kiếm
    setSearchValue(normalizedValue); // Lưu giá trị đã chuẩn hóa vào state
    onSearch(normalizedValue); // Truyền dữ liệu đã chuẩn hóa lên component cha
  };

  useEffect(() => {
    const fetchData = async () => {
      if (searchValue) {
        try {
          const response = await callApiKhoaHoc.layDanhSachKhoaHoc(); // Gọi API
          const allCourses = response.data; // Dữ liệu trả về từ API

          // Lọc dữ liệu theo maDanhMucKhoahoc
          const filteredCourses = allCourses.filter((course) =>
            normalizeString(course.danhMucKhoaHoc.tenDanhMucKhoaHoc).includes(
              searchValue
            )
          );

          // Truyền kết quả đã lọc về component cha
          onSearch(filteredCourses);
        } catch (error) {
          console.error("Error fetching courses:", error);
        }
      }
    };

    fetchData();
  }, [searchValue]); // Gọi lại khi searchValue thay đổi

  return (
    <Search
      placeholder="Tìm Kiếm theo danh mục"
      allowClear
      onSearch={handleSearch} // Gọi khi nhấn Enter hoặc nút tìm kiếm
      style={{ width: 250 }}
    />
  );
};

export default SearchLogicComponent;
