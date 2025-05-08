import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Swal from "sweetalert2";
import { callApiNguoiDung } from "../../../service/callApiNguoiDung";
import { useDispatch } from "react-redux";
import { fetchUserListsAll } from "../../../redux/userAdminSlice";

const UpdateUserModal = ({ user, isOpen, closeModal }) => {
  const dispatch = useDispatch();
  // Hàm submit update user
  const handleUpdateUser = async (values) => {
    try {
      // Gửi yêu cầu API cập nhật người dùng
      const response = await callApiNguoiDung.updateUser(values);

      if (response.status === 200) {
        Swal.fire({
          title: "Thành công!",
          text: "Người dùng đã được cập nhật thành công.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        closeModal();
        dispatch(fetchUserListsAll());
      }
    } catch (error) {
      Swal.fire({
        title: "Lỗi!",
        text:
          error.response?.data ||
          "Có lỗi xảy ra khi cập nhật người dùng. Vui lòng thử lại.",
        icon: "error",
        confirmButtonText: "Đóng",
      });
    }
  };

  const formikUpdateUser = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDt: "",
      maLoaiNguoiDung: "",
      maNhom: "GP01",
      email: "",
    },
    validationSchema: Yup.object({
      taiKhoan: Yup.string().required("Tài khoản là bắt buộc"),
      hoTen: Yup.string().required("Họ và Tên là bắt buộc"),
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Email là bắt buộc"),
      matKhau: Yup.string()
        .min(6, "Mật khẩu tối thiểu 6 ký tự")
        .required("Mật khẩu là bắt buộc"),
      soDt: Yup.string()
        .required("Số điện thoại không được để trống")
        .matches(
          /([\84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
          "Số điện thoại chưa đúng định đạng"
        ),
      maLoaiNguoiDung: Yup.string().required("Vui lòng chọn người dùng !"),
    }),
    onSubmit: handleUpdateUser,
  });

  useEffect(() => {
    if (user) {
      formikUpdateUser.setValues({
        taiKhoan: user.taiKhoan || "",
        matKhau: user.matKhau || "",
        hoTen: user.hoTen || "",
        soDt: user.soDt || "",
        maLoaiNguoiDung: user.maLoaiNguoiDung || "",
        email: user.email || "",
        maNhom: user.maNhom || "GP01",
      });
    }
  }, [user]);

  if (!isOpen) return null; // Nếu modal không mở thì không render

  return (
    <div
      onClick={closeModal}
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-500 bg-opacity-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg w-full sm:w-96 md:w-1/2 lg:w-1/3 p-6"
      >
        <h2 className="text-2xl font-semibold text-center">
          CẬP NHẬT THÔNG TIN
        </h2>

        <form onSubmit={formikUpdateUser.handleSubmit}>
          <div className="form-group mb-4">
            <div className="input-group  ">
              {/* Icon và input nằm cùng 1 hàng */}
              <div className="input-group-prepend flex ">
                <span className="input-group-text rounded-r-sm">
                  <i className="fa fa-user" />
                </span>
              </div>
              <input
                value={formikUpdateUser.values.taiKhoan}
                name="taiKhoan"
                id="tknv"
                className="form-control input-sm "
                placeholder="Tài khoản"
                onChange={formikUpdateUser.handleChange}
                onBlur={formikUpdateUser.handleBlur}
              />
            </div>
            {formikUpdateUser.touched.taiKhoan &&
              formikUpdateUser.errors.taiKhoan && (
                <div className="text-danger text-left text-red-600">
                  {formikUpdateUser.errors.taiKhoan}
                </div>
              )}
          </div>

          {/* Các trường nhập liệu khác */}

          <div className="form-group mb-4">
            <div className="input-group ">
              <div className="input-group-prepend flex ">
                <span className="input-group-text rounded-r-sm">
                  <i className="fa fa-address-book" />
                </span>
              </div>
              <input
                value={formikUpdateUser.values.hoTen}
                onChange={formikUpdateUser.handleChange}
                onBlur={formikUpdateUser.handleBlur}
                type="text"
                name="hoTen"
                id="hoTen"
                className="form-control input-sm"
                placeholder="Họ và tên"
              />
            </div>
            {formikUpdateUser.touched.hoTen &&
              formikUpdateUser.errors.hoTen && (
                <div className="text-danger text-left text-red-600">
                  {formikUpdateUser.errors.hoTen}
                </div>
              )}
          </div>

          <div className="form-group mb-4">
            <div className="input-group ">
              <div className="input-group-prepend flex ">
                <span className="input-group-text rounded-r-sm">
                  <i className="fa fa-envelope" />
                </span>
              </div>
              <input
                value={formikUpdateUser.values.email}
                onChange={formikUpdateUser.handleChange}
                onBlur={formikUpdateUser.handleBlur}
                type="email"
                name="email"
                id="email"
                className="form-control input-sm"
                placeholder="Email"
              />
            </div>
            {formikUpdateUser.touched.email &&
              formikUpdateUser.errors.email && (
                <div className="text-danger text-left text-red-600">
                  {formikUpdateUser.errors.email}
                </div>
              )}
          </div>

          <div className="form-group mb-4">
            <div className="input-group  ">
              <div className="input-group-prepend flex ">
                <span className="input-group-text rounded-r-sm">
                  <i className="fa fa-key" />
                </span>
              </div>
              <input
                value={formikUpdateUser.values.matKhau}
                onChange={formikUpdateUser.handleChange}
                onBlur={formikUpdateUser.handleBlur}
                type="password"
                name="matKhau"
                id="matKhau"
                className="form-control input-sm"
                placeholder="Mật khẩu"
              />
            </div>
            {formikUpdateUser.touched.matKhau &&
              formikUpdateUser.errors.matKhau && (
                <div className="text-danger text-left text-red-600">
                  {formikUpdateUser.errors.matKhau}
                </div>
              )}
          </div>

          <div className="form-group mb-4">
            <div className="input-group">
              <div className="input-group-prepend flex ">
                <span className="input-group-text rounded-r-sm">
                  <i className="fa fa-phone" />
                </span>
              </div>
              <input
                value={formikUpdateUser.values.soDt}
                onChange={formikUpdateUser.handleChange}
                onBlur={formikUpdateUser.handleBlur}
                type="text"
                name="soDt"
                id="soDt"
                className="form-control input-sm"
                placeholder="Số điện thoại"
              />
            </div>
            {formikUpdateUser.touched.soDt && formikUpdateUser.errors.soDt && (
              <div className="text-danger text-left text-red-600">
                {formikUpdateUser.errors.soDt}
              </div>
            )}
          </div>

          <div className="form-group mb-4">
            <div className="input-group ">
              <div className="input-group-prepend flex ">
                <span className="input-group-text rounded-r-sm">
                  <i className="fa fa-briefcase" />
                </span>
              </div>
              <select
                value={formikUpdateUser.values.maLoaiNguoiDung}
                onChange={formikUpdateUser.handleChange}
                onBlur={formikUpdateUser.handleBlur}
                className="form-control input-sm"
                id="maLoaiNguoiDung"
                name="maLoaiNguoiDung"
              >
                <option value="">Loại người dùng</option>
                <option value="GV">Giáo vụ</option>
                <option value="HV">Học viên</option>
              </select>
            </div>
            {formikUpdateUser.touched.maLoaiNguoiDung &&
              formikUpdateUser.errors.maLoaiNguoiDung && (
                <div className="text-danger text-left text-red-600">
                  {formikUpdateUser.errors.maLoaiNguoiDung}
                </div>
              )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cập nhật
            </button>
            <button
              type="button"
              onClick={closeModal}
              className="ml-2 bg-gray-300 text-black p-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserModal;
