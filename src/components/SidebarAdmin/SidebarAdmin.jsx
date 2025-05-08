import React, { useState } from "react";
import { Users, Book, UserCog, LogOut, Menu, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import UpdateUserModal from "../../pages/admin/users/UpdateUserModal.js";

const Sidebar = ({ isOpen, toggleSidebar, onLogout, handleEdit }) => {
  const [selectedSetting, setSelectedSetting] = useState("Quản lý người dùng");
  const user = JSON.parse(localStorage.getItem("USER_LOGIN"));
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  const menuItems = [
    { icon: <Home />, label: "Trang chủ", path: "/" },
    { icon: <Users />, label: "Quản lý người dùng", path: "quanlynguoidung" },
    { icon: <Book />, label: "Quản lý khóa học", path: "quanlykhoahoc" },
  ];

  const settingsItems = [
    {
      icon: <UserCog />,
      label: "Cập nhật thông tin",
      onClick: () => {
        handleEdit(user);
        setSelectedSetting("Cập nhật thông tin");
      },
    },
    {
      icon: <LogOut />,
      label: "Đăng xuất",
      onClick: () => {
        onLogout();
        setSelectedSetting("Đăng xuất");
      },
    },
  ];

  return (
    <div
      className={`h-full bg-gray-800 text-white transition-all duration-300 ${
        isOpen ? "w-64" : "w-20"
      } flex flex-col overflow-y-auto fixed sm:relative z-50`}
    >
      {/* Header */}
      <div
        className={`flex ${
          isOpen ? "justify-between" : "justify-center"
        } items-center p-4`}
      >
        {isOpen && <h2 className="text-xl font-bold">Quản Trị</h2>}
        <button
          onClick={toggleSidebar}
          className="p-2 flex justify-center items-center w-10 h-10"
        >
          <Menu />
        </button>
      </div>

      {/* Trang chủ */}
      <div className="mb-4">
        <div
          className={`flex items-center p-4 space-x-3 rounded-md no-underline cursor-pointer ${
            selectedSetting === "Trang chủ"
              ? "text-white bg-sky-800"
              : "text-gray-400 hover:bg-gray-700"
          }`}
          onClick={() => {
            setSelectedSetting("Trang chủ");
            navigate("/"); // Điều hướng bằng useNavigate
          }}
        >
          <div className="flex justify-center items-center w-10 h-10">
            <Home />
          </div>
          {isOpen && (
            <span className="ml-4 flex-1 whitespace-normal break-words">
              Trang chủ
            </span>
          )}
        </div>
      </div>

      {/* Nhóm Quản lý */}
      <div className="mb-4">
        {isOpen && (
          <div className="px-4 text-gray-400 text-sm mt-4 mb-2">Quản lý</div>
        )}
        {menuItems.slice(1).map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-4 space-x-3 rounded-md no-underline cursor-pointer ${
              selectedSetting === item.label
                ? "text-white bg-sky-800"
                : "text-gray-400 hover:bg-gray-700"
            }`}
            onClick={() => {
              setSelectedSetting(item.label);
              navigate(item.path); // Điều hướng bằng useNavigate
            }}
          >
            <div className="flex justify-center items-center w-10 h-10">
              {item.icon}
            </div>
            {isOpen && (
              <span className="ml-4 flex-1 whitespace-normal break-words">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Nhóm Cài đặt */}
      <div className="mb-4">
        {isOpen && (
          <div className="px-4 text-gray-400 text-sm mt-4 mb-2">Cài đặt</div>
        )}
        {settingsItems.map((item, index) => (
          <div
            key={index}
            className={`flex items-center p-4 space-x-3 rounded-md no-underline cursor-pointer ${
              selectedSetting === item.label
                ? "text-white bg-sky-800"
                : "text-gray-400 hover:bg-gray-700"
            }`}
            onClick={item.onClick}
          >
            <div className="flex justify-center items-center w-10 h-10">
              {item.icon}
            </div>
            {isOpen && (
              <span className="ml-4 flex-1 whitespace-normal break-words">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const SidebarAdmin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("USER_LOGIN");
    window.location.href = "/";
  };

  const handleEdit = (user) => {
    if (!user) {
      console.error("Người dùng không tồn tại!");
      return;
    }
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="flex h-screen">
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onLogout={handleLogout}
        handleEdit={handleEdit}
      />
      <main
        className={`flex-1 bg-gray-100 transition-all duration-300 ${
          isSidebarOpen ? "ml-20" : "ml-10"
        } sm:ml-2`}
      >
        <div className="sm:hidden mb-4">
          <button
            onClick={toggleSidebar}
            className="p-2 bg-gray-800 text-white rounded-md"
          >
            <Menu />
          </button>
        </div>
      </main>
      <UpdateUserModal
        user={selectedUser}
        isOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default SidebarAdmin;
