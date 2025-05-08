import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AdminGuard = ({ children }) => {
  // const isLoggedIn = !!localStorage.getItem("USER_LOGIN");
  // const isAdmin = JSON.parse(localStorage.getItem("user"))?.role === "admin"; // Kiểm tra vai trò người dùng
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("USER_LOGIN");
  if (!isLoggedIn) return false;

  const userInfo = JSON.parse(localStorage.getItem("USER_LOGIN"));
  const isTeacher = userInfo?.maLoaiNguoiDung === "GV"; // Kiểm tra vai trò người dùng

  if (!isLoggedIn || !isTeacher) {
    navigate("/", { replace: true });
    Swal.fire({
      title: "Bạn không có quyền truy cập vào trang admin.",
      text: "Kiểm tra lại tài khoản nhé",
      icon: "error",
      confirmButtonText: "Đồng ý",
    });
    // return <Navigate to="/" replace />; // Chuyển hướng về trang chính nếu không phải admin
  }

  return children; // Render nội dung nếu là admin
};

export default AdminGuard;

// login page -> enter user & pass -> call api -> receive user & token ???
// -> store in localstorage
// -> verify if user logged in -> load local storage
