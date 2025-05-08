// src/components/ManageUsers.jsx
import React, { useEffect, useState } from "react";
import { Settings } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import styles from "../../student/courses/course-all/course-all.module.scss";
import AddCourseModal from "./CreateCourseModal";
import {
  fetchCourseListAdmin,
  fetchSearchCourses,
} from "../../../redux/courseAdminSlice";
import UpdateCourse from "./updateCourse";
import Swal from "sweetalert2";
import { callApiKhoaHoc } from "../../../service/callApiKhoaHoc";
import { fetchUserListsAll } from "../../../redux/userAdminSlice";

export default function ManageCourse() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [updateCourse, setUpdateCourse] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  // Lấy dữ liệu từ store
  const { courseLists } = useSelector((state) => state.courseAdminSlice);

  // Trạng thái phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 10; // Số lượng khóa học mỗi trang
  const startIndex = (currentPage - 1) * coursesPerPage;
  const endIndex = startIndex + coursesPerPage;
  const paginatedCourses = courseLists.slice(startIndex, endIndex);
  console.log("🚀 ~ ManageCourse ~ paginatedCourses:", paginatedCourses);

  useEffect(() => {
    dispatch(fetchCourseListAdmin());
  }, [dispatch]);

  // xóa khóa học
  const handleDelete = async (courseId) => {
    try {
      // Hiển thị hộp thoại xác nhận xóa
      const confirmResult = await Swal.fire({
        title: "Bạn có chắc chắn?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      });

      if (confirmResult.isConfirmed) {
        // Gửi yêu cầu xóa khóa học
        const response = await callApiKhoaHoc.deleteCourse(courseId);

        if (response.status === 200) {
          Swal.fire("Đã xóa!", "Khóa học đã được xóa thành công.", "success");

          // Cập nhật danh sách khóa học
          dispatch(fetchCourseListAdmin(currentPage));
        }
      }
    } catch (error) {
      console.error("Lỗi khi xóa khóa học:", error.response?.data || error);
      Swal.fire({
        title: "Lỗi!",
        text: error.response?.data,
        icon: "error",
        confirmButtonText: "Đóng",
      });
    }
  };

  // hàm render table
  const renderCourseTable = () => {
    return paginatedCourses.length > 0 ? (
      paginatedCourses.map((courses, index) => (
        <tr key={courses.id} className="hover:bg-gray-100 text-sm md:text-base">
          <td className="border border-gray-300 p-2">
            {startIndex + index + 1}
          </td>
          <td className="border border-gray-300 p-2 break-words whitespace-normal">
            {courses.maKhoaHoc}
          </td>
          <td className="border border-gray-300 p-2 break-words whitespace-normal">
            {courses.tenKhoaHoc}
          </td>
          <td className="border border-gray-300 p-2 ">
            <div className="flex justify-center items-center">
              <div
                style={{
                  backgroundImage: `url(${courses.hinhAnh})`,
                }}
                className="w-32 sm:w-28 md:w-32 lg:w-40 h-20 sm:h-24 md:h-28 lg:h-32 bg-cover bg-center rounded"
              ></div>
            </div>
          </td>
          <td className="border border-gray-300 p-2">{courses.luotXem}</td>
          <td className="border border-gray-300 p-2">
            {courses.nguoiTao.hoTen}
          </td>
          <td className="border border-gray-300 p-2 text-center">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              {/* Nút Ghi danh */}
              <button
                className="p-2 bg-green-500 text-white rounded hover:bg-green-600 w-full sm:w-auto"
                // onClick={() => handleRegister()}
              >
                Ghi danh
              </button>

              {/* Nút Sửa */}
              <button
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto"
                onClick={() => handleUpdate(courses)}
              >
                Sửa
              </button>
              {/* Modal update */}
              {isModalOpen && modalType === "update" && (
                <UpdateCourse
                  course={updateCourse}
                  isOpen={isModalOpen}
                  closeModal={closeModal}
                />
              )}

              {/* Nút Xóa */}
              <button
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600 w-full sm:w-auto"
                onClick={() => handleDelete(courses.maKhoaHoc)}
              >
                Xóa
              </button>
            </div>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td
          colSpan="7"
          className="border border-gray-300 p-4 text-center text-gray-500"
        >
          Không có người dùng nào.
        </td>
      </tr>
    );
  };

  // Hàm mở modal thêm khóa học
  const handleAddCourse = () => {
    setModalType("add");
    setIsModalOpen(true);
  };

  // Hàm mở modal cập nhật khóa học
  const handleUpdate = (course) => {
    setModalType("update");
    setUpdateCourse(course);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setUpdateCourse(null);
  };

  // Cập nhật khóa học khi tìm kiếm
  const handleSearchChange = async (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);

    // Dispatch action để tìm kiếm
    if (keyword.trim()) {
      dispatch(fetchSearchCourses(keyword.trim()));
    } else {
      // Nếu từ khóa rỗng, lấy lại toàn bộ danh sách người dùng
      dispatch(fetchUserListsAll());
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">Quản lý khóa học</h2>
      {/* Nút thêm người dùng */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600 w-full sm:w-auto"
          onClick={handleAddCourse} // Thêm hàm xử lý khi nhấn nút
        >
          Thêm khóa học
        </button>

        {/* Thanh tìm kiếm */}
        <input
          type="text"
          placeholder="Nhập vào khóa học cần tìm"
          value={searchKeyword}
          onChange={handleSearchChange}
          className="border p-2 rounded w-1/3"
        />

        {/* Modal */}
        {isModalOpen && modalType === "add" && (
          <AddCourseModal isOpen={isModalOpen} closeModal={closeModal} />
        )}
      </div>

      {/* Hiển thị loading */}

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2 text-sm md:text-base">
                STT
              </th>
              <th className="border border-gray-300 p-2 text-sm md:text-base">
                Mã khóa học
              </th>
              <th className="border border-gray-300 p-2 text-sm md:text-base">
                Tên khóa học
              </th>
              <th className="border border-gray-300 p-2 text-sm md:text-base">
                Hình ảnh
              </th>
              <th className="border border-gray-300 p-2 text-sm md:text-base">
                Lượt xem
              </th>
              <th className="border border-gray-300 p-2 text-sm md:text-base">
                Người tạo
              </th>
              <th className="border border-gray-300 p-2 h-16 flex items-center justify-center text-sm md:text-base">
                <Settings size={20} />
              </th>
            </tr>
          </thead>
          <tbody>{renderCourseTable()}</tbody>
        </table>
      </div>

      {/* Phân trang */}
      <div className="flex justify-center mt-10 mb-10">
        <ReactPaginate
          forcePage={currentPage - 1}
          pageRangeDisplayed={3}
          pageCount={Math.ceil(courseLists.length / coursesPerPage)}
          containerClassName={styles.paginationPages}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLinkPages}
          nextClassName={styles.pageItem}
          nextLinkClassName={styles.pageLinkPages}
          previousClassName={styles.pageItem}
          previousLinkClassName={styles.pageLinkPages}
          breakClassName={styles.pageItem}
          breakLinkClassName={styles.pageLinkPages}
          activeClassName={styles.active}
          nextLabel={<i className="bi bi-arrow-right "></i>}
          previousLabel={<i className="bi bi-arrow-left "></i>}
          onPageChange={({ selected }) => {
            setCurrentPage(selected + 1);
          }}
        />
      </div>
    </div>
  );
}
