import React, { useState, useEffect } from "react";
import logo from "../../asset/logo/logo.png";
import avt from "../../asset/avt.jpg";
import { PoweroffOutlined } from "@ant-design/icons";
import NavBar from "./NavBar";
import { Dropdown } from "antd";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import SearchLogicComponent from "./SearchLogicComponent";
import { normalizeString } from "../../untils/normalize"; // Thêm import hàm normalize
import { callApiKhoaHoc } from "../../service/callApiKhoaHoc";
import { useMediaQuery } from "react-responsive";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  let user = useSelector((state) => state.userSlice.dataLogin);
  let navigate = useNavigate();

  // Lắng nghe sự kiện scroll để cập nhật trạng thái
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Xử lý tìm kiếm và điều hướng
  const handleSearch = async (value) => {
    const normalizedValue = normalizeString(value); // Chuẩn hóa giá trị tìm kiếm
    if (!normalizedValue || normalizedValue.length === 0) {
      return; // Không thực hiện điều hướng nếu giá trị rỗng
    }
    try {
      const response = await callApiKhoaHoc.layDanhSachKhoaHoc();
      const allCourses = response.data;

      // Lọc khóa học dựa trên tenDanhMucKhoaHoc
      const filteredCourses = allCourses.filter((course) => {
        const normalizedCourseName = normalizeString(
          course.danhMucKhoaHoc.tenDanhMucKhoaHoc
        );

        return normalizedCourseName.includes(normalizedValue);
      });
      // Nếu không có kết quả tìm kiếm, hiển thị 6 khóa học ngẫu nhiên
      if (filteredCourses.length === 0) {
        const shuffledCourses = allCourses.sort(() => 0.5 - Math.random());
        filteredCourses.push(...shuffledCourses.slice(0, 6));
      }
      // Điều hướng đến trang tìm kiếm với tham số tìm kiếm
      navigate(`/timkiem/${normalizedValue}`, {
        state: { results: filteredCourses },
      });
    } catch (error) {
      console.error("Lỗi khi gọi API:", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("USER_LOGIN");
    window.location.href = "/login";
  };

  const dropdownContent = (
    <div
      onClick={handleLogout}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        cursor: "pointer",
      }}
      className="absolute top-0 left-1/2 transform -translate-x-1/2 hover:top-0 transition-all duration-500 ease-in-out  hover:bg-gray-200"
    >
      <PoweroffOutlined
        style={{
          fontSize: "24px",
          color: "#f6ba35",
          fontWeight: "bold",
        }}
      />
    </div>
  );
  // Kiểm tra màn hình mobile (dưới 576px)
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  let renderMenu = () => {
    if (user) {
      return (
        <div
          className={`daDangNhap relative w-full ${
            isMobile ? "flex justify-center items-center mt-4" : ""
          }`}
        >
          <div
            className={`relative flex ${
              isMobile
                ? "justify-center items-center gap-6"
                : "items-center gap-4"
            }`}
          >
            {user.maLoaiNguoiDung === "GV" && (
              <div
                onClick={() => navigate("/admin")}
                className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-gray-200 transition-all duration-300"
              >
                <i className="fas fa-cog text-xl text-[#f6ba35] font-bold"></i>
              </div>
            )}

            <div className="relative">
              <Dropdown
                overlay={dropdownContent}
                trigger={["hover"]}
                placement="bottomCenter"
              >
                <a
                  className="_blank"
                  onClick={() => {
                    navigate("/thongtincanhan");
                  }}
                >
                  <img
                    className={`border rounded-full object-cover opacity-90 hover:opacity-100 duration-300 transition-all ${
                      isMobile ? "w-14 h-14" : "w-12 h-12"
                    } cursor-pointer`}
                    src={avt}
                    alt="Avatar"
                  />
                </a>
              </Dropdown>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={`flex items-center ${
            isMobile ? "w-full justify-center mt-2" : "justify-end ml-4"
          } chuaDangNhap`}
        >
          <NavLink
            to="/login"
            className="btn btn-warning font-bold text-white hover:scale-105 duration-300 transition-all"
          >
            ĐĂNG NHẬP
          </NavLink>
        </div>
      );
    }
  };

  return (
    <div
      className={`${
        isScrolled
          ? "fixed top-0 left-0 w-full bg-white shadow-md z-50 opacity-100"
          : "relative opacity-90"
      } transition-all duration-500 ease-in-out`}
    >
      <div className="flex items-center justify-between px-6 py-3 flex-wrap lg:flex-nowrap gap-4">
        {/* Logo */}
        <a href="#" className="flex-shrink-0" onClick={() => navigate("/")}>
          <img src={logo} alt="Logo" className="w-28 sm:w-36 md:w-48 lg:w-60" />
        </a>

        {/* Search */}
        <div className="flex-grow lg:ml-2  flex justify-start items-center ">
          <SearchLogicComponent onSearch={handleSearch} />
        </div>

        {/* NavBar & User Menu */}
        <div className=" flex-shrink-0 flex items-center gap-4 lg:gap-8">
          <NavBar />
          {renderMenu()}
        </div>
      </div>
    </div>
  );
}
