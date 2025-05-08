import http from "./config";

export const userService = {
  login: (user) => {
    return http.post("/api/QuanLyNguoiDung/DangNhap", user);
  },
  register: (dataUser) => {
    return http.post("/api/QuanLyNguoiDung/DangKy", dataUser);
  },
};
