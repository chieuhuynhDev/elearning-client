// src/components/ManageUsers.jsx
import React, { useEffect, useState } from "react";
import { Settings } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";

import styles from "../../student/courses/course-all/course-all.module.scss";
import AddUserModal from "./CreateUserModal";
import {
  fetchSearchUsers,
  fetchUserListsAll,
} from "../../../redux/userAdminSlice";
import UpdateUserModal from "./UpdateUserModal";
import Swal from "sweetalert2";

import { callApiNguoiDung } from "../../../service/callApiNguoiDung";

export default function ManageUsers() {
  const dispatch = useDispatch();
  const [modalType, setModalType] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");

  // Lấy dữ liệu từ store
  const { userListAll } = useSelector((state) => state.userAdminSlice);

  // Trạng thái phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10; // Số lượng user mỗi trang
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const paginatedUsers = userListAll.slice(startIndex, endIndex);

  useEffect(() => {
    dispatch(fetchUserListsAll());
  }, [dispatch]);

  //hàm thêm course
  const handleAddUser = () => {
    setModalType("add");
    setSelectedUser(null);
    setIsModalOpen(true);
  };

  // Hàm xử lý các nút trong cột Cài đặt
  const handleRegister = (user) => {
    // Xử lý ghi danh cho người dùng
    console.log("Ghi danh người dùng:", user);
    // Bạn có thể mở một modal hoặc thực hiện hành động khác ở đây
  };

  // hàm edit
  const handleEdit = (user) => {
    console.log("user", user);

    setModalType("edit");
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  //hàm handle delete
  const handleDelete = async (userId) => {
    try {
      const confirmResult = await Swal.fire({
        title: "Bạn có chắc chắn muốn xóa người dùng này?",
        text: "Hành động này không thể hoàn tác!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      });

      if (confirmResult.isConfirmed) {
        // console.log(
        //   JSON.parse(localStorage.getItem("USER_LOGIN"))?.accessToken
        // );

        const response = await callApiNguoiDung.deleteUser(userId);
        console.log("userId", userId);

        // Kiểm tra nếu xóa thành công
        if (response.status === 200) {
          Swal.fire({
            title: "Đã xóa!",
            text: "Người dùng đã được xóa thành công.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });

          // Cập nhật lại danh sách người dùng sau khi xóa
          dispatch(fetchUserListsAll());
        }
      }
    } catch (error) {
      console.error("Lỗi khi xóa người dùng:", error.response?.data || error);
      Swal.fire({
        title: "Lỗi!",
        text:
          error.response?.data ||
          "Có lỗi xảy ra khi xóa người dùng. Vui lòng thử lại.",
        icon: "error",
        confirmButtonText: "Đóng",
      });
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setModalType(null);
  };
  // hàm render table
  const renderUserTable = () => {
    return paginatedUsers.length > 0 ? (
      paginatedUsers.map((user, index) => (
        <tr key={user.id} className="hover:bg-gray-100">
          <td className="border border-gray-300 p-2">
            {startIndex + index + 1}
          </td>
          <td className="border border-gray-300 p-2">{user.taiKhoan}</td>
          <td className="border border-gray-300 p-2">{user.maLoaiNguoiDung}</td>
          <td className="border border-gray-300 p-2">{user.hoTen}</td>
          <td className="border border-gray-300 p-2">{user.email}</td>
          <td className="border border-gray-300 p-2">{user.soDT}</td>
          <td className="border border-gray-300 p-2 text-center">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              {/* Nút Ghi danh */}
              <button
                className="p-2 bg-green-500 text-white rounded hover:bg-green-600 w-full sm:w-auto"
                onClick={() => handleRegister(user)}
              >
                Ghi danh
              </button>

              {/* Nút Sửa */}
              <button
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full sm:w-auto"
                onClick={() => handleEdit(user)}
              >
                Sửa
              </button>

              {/* Nút Xóa */}
              <button
                className="p-2 bg-red-500 text-white rounded hover:bg-red-600 w-full sm:w-auto"
                onClick={() => handleDelete(user.taiKhoan)}
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
  // Cập nhật danh sách người dùng khi tìm kiếm
  const handleSearchChange = async (event) => {
    const keyword = event.target.value;
    setSearchKeyword(keyword);

    // Dispatch action để tìm kiếm
    if (keyword.trim()) {
      dispatch(fetchSearchUsers(keyword.trim()));
    } else {
      // Nếu từ khóa rỗng, lấy lại toàn bộ danh sách người dùng
      dispatch(fetchUserListsAll());
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4">Quản lý người dùng</h2>
      {/* Nút thêm người dùng */}
      <div className="flex justify-between items-center mb-4">
        <button
          className="p-2 bg-green-500 text-white rounded hover:bg-green-600 w-full sm:w-auto"
          onClick={handleAddUser} // Thêm hàm xử lý khi nhấn nút
        >
          Thêm người dùng
        </button>

        {/* Thanh tìm kiếm */}
        <input
          type="text"
          placeholder="Nhập vào tài khoản hoặc họ tên người dùng"
          value={searchKeyword}
          onChange={handleSearchChange}
          className="border p-2 rounded w-1/3"
        />

        {/* Modal */}
        {isModalOpen && modalType === "add" && (
          <AddUserModal isOpen={isModalOpen} closeModal={closeModal} />
        )}
        {isModalOpen && modalType === "edit" && selectedUser && (
          <UpdateUserModal
            user={selectedUser}
            isOpen={isModalOpen}
            closeModal={closeModal}
          />
        )}
      </div>

      <>
        <div className="min-w-full">
          <table className="min-w-full border-collapse border border-gray-300  text-center">
            <thead>
              <tr className="bg-gray-200 ">
                <th className=" border border-gray-300 p-2">STT</th>
                <th className="border border-gray-300 p-2 ">Tài khoản</th>
                <th className="border border-gray-300 p-2">Người dùng</th>
                <th className="border border-gray-300 p-2">Họ và tên</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Số điện thoại</th>
                <th className="border border-gray-300 p-2 h-16 flex items-center justify-center ">
                  <Settings size={20} />
                </th>
              </tr>
            </thead>

            <tbody>{renderUserTable()}</tbody>
          </table>
        </div>

        {/* Phân trang */}
        <div className="flex justify-center mt-10 mb-10">
          <ReactPaginate
            forcePage={currentPage - 1}
            pageRangeDisplayed={3}
            pageCount={Math.ceil(userListAll.length / usersPerPage)}
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
      </>
    </div>
  );
}
