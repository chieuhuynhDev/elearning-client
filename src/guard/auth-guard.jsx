import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const isLoggedIn = !!localStorage.getItem("USER_LOGIN"); // Kiểm tra token đăng nhập (giả sử bạn lưu token ở localStorage)
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />; // Chuyển hướng về trang login nếu chưa đăng nhập
  }

  return children; // Render nội dung nếu đã đăng nhập
};

export default AuthGuard;
// login page -> enter user & pass -> call api -> receive token ???
// -> store in localstorage
// -> verify if user logged in -> load local storage
