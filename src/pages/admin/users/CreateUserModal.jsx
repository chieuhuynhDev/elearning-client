import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Swal from "sweetalert2";
import { callApiNguoiDung } from "../../../service/callApiNguoiDung";
import { useDispatch } from "react-redux";
import { fetchUserListsAll } from "../../../redux/userAdminSlice";

const AddUserModal = ({ isOpen, closeModal }) => {
  const dispatch = useDispatch();
  // Hàm submit add user
  const handleSubmitAddUser = async (values) => {
    // Log dữ liệu form khi submit
    console.log("form thêm người dùng", values);

    try {
      const result = await callApiNguoiDung.createUserAdmin(values);

      if (result.status === 200) {
        formikCreateUser.resetForm();

        Swal.fire({
          title: "Thêm người thành công!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        // Dispatch lại action để lấy lại danh sách người dùng
        dispatch(fetchUserListsAll());
      }
    } catch (error) {
      Swal.fire({
        title: error.response?.data,
        text: "Vui lòng thử lại.",
        icon: "error",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  const formikCreateUser = useFormik({
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
    onSubmit: handleSubmitAddUser,
  });

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
        <h2 className="text-2xl font-semibold text-center">Thêm người dùng</h2>

        <form onSubmit={formikCreateUser.handleSubmit}>
          <div className="form-group mb-4">
            <div className="input-group  ">
              {/* Icon và input nằm cùng 1 hàng */}
              <div className="input-group-prepend flex ">
                <span className="input-group-text rounded-r-sm">
                  <i className="fa fa-user" />
                </span>
              </div>
              <input
                value={formikCreateUser.values.taiKhoan}
                name="taiKhoan"
                id="tknv"
                className="form-control input-sm "
                placeholder="Tài khoản"
                onChange={formikCreateUser.handleChange}
                onBlur={formikCreateUser.handleBlur}
              />
            </div>
            {formikCreateUser.touched.taiKhoan &&
              formikCreateUser.errors.taiKhoan && (
                <div className="text-danger text-left text-red-600">
                  {formikCreateUser.errors.taiKhoan}
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
                value={formikCreateUser.values.hoTen}
                onChange={formikCreateUser.handleChange}
                onBlur={formikCreateUser.handleBlur}
                type="text"
                name="hoTen"
                id="hoTen"
                className="form-control input-sm"
                placeholder="Họ và tên"
              />
            </div>
            {formikCreateUser.touched.hoTen &&
              formikCreateUser.errors.hoTen && (
                <div className="text-danger text-left text-red-600">
                  {formikCreateUser.errors.hoTen}
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
                value={formikCreateUser.values.email}
                onChange={formikCreateUser.handleChange}
                onBlur={formikCreateUser.handleBlur}
                type="email"
                name="email"
                id="email"
                className="form-control input-sm"
                placeholder="Email"
              />
            </div>
            {formikCreateUser.touched.email &&
              formikCreateUser.errors.email && (
                <div className="text-danger text-left text-red-600">
                  {formikCreateUser.errors.email}
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
                value={formikCreateUser.values.matKhau}
                onChange={formikCreateUser.handleChange}
                onBlur={formikCreateUser.handleBlur}
                type="password"
                name="matKhau"
                id="matKhau"
                className="form-control input-sm"
                placeholder="Mật khẩu"
              />
            </div>
            {formikCreateUser.touched.matKhau &&
              formikCreateUser.errors.matKhau && (
                <div className="text-danger text-left text-red-600">
                  {formikCreateUser.errors.matKhau}
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
                value={formikCreateUser.values.soDt}
                onChange={formikCreateUser.handleChange}
                onBlur={formikCreateUser.handleBlur}
                type="text"
                name="soDt"
                id="soDt"
                className="form-control input-sm"
                placeholder="Số điện thoại"
              />
            </div>
            {formikCreateUser.touched.soDt && formikCreateUser.errors.soDt && (
              <div className="text-danger text-left text-red-600">
                {formikCreateUser.errors.soDt}
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
                value={formikCreateUser.values.maLoaiNguoiDung}
                onChange={formikCreateUser.handleChange}
                onBlur={formikCreateUser.handleBlur}
                className="form-control input-sm"
                id="maLoaiNguoiDung"
                name="maLoaiNguoiDung"
              >
                <option value="">Loại người dùng</option>
                <option value="GV">Giáo vụ</option>
                <option value="HV">Học viên</option>
              </select>
            </div>
            {formikCreateUser.touched.maLoaiNguoiDung &&
              formikCreateUser.errors.maLoaiNguoiDung && (
                <div className="text-danger text-left text-red-600">
                  {formikCreateUser.errors.maLoaiNguoiDung}
                </div>
              )}
          </div>

          {/* Buttons */}
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Thêm người dùng
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

export default AddUserModal;
