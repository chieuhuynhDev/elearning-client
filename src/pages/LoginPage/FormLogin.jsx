import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import { Facebook, Github, Linkedin, Mail } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginActionService } from "../../redux/userSlice";
import { userService } from "../../service/userService";
import Swal from "sweetalert2";
import http from "../../service/config";

export default function FormLogin() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);

  // Validation
  const validationSchema = Yup.object({
    taiKhoan: Yup.string()
      .min(2, "Tài khoản quá ít kí tự")
      .max(16, "Tài khoản quá 16 kí tự")
      .required("Tài khoản không được để trống"),
    hoTen: Yup.string().required("Họ tên không được để trống"),
    matKhau: Yup.string()
      .required("Mật khẩu không được để trống")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
        "Mật khẩu phải ít nhất 6 ký tự gồm chữ viết hoa, số, và kí tự đặc biệt"
      ),
    email: Yup.string()
      .email("Email không hợp lệ")
      .required("Email không được để trống"),
    soDT: Yup.string()
      .required("Số điện thoại không được để trống")
      .matches(
        /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/,
        "Số điện thoại chưa đúng định đạng"
      ),
  });
  // Hàm handle đăng nhập
  const handleLogin = (values) => {
    console.log(values);

    dispatch(loginActionService(values))
      .unwrap()
      .then((result) => {
        let dataJson = JSON.stringify(result);
        localStorage.setItem("USER_LOGIN", dataJson);

        if (result.maLoaiNguoiDung == "GV") {
          navigate("/admin");
        } else {
          navigate(-1); // không gây reload trang
        }

        console.log("🚀 ~ result:", result);
      })
      .catch((err) => {
        Swal.fire({
          title: "Tài khoản hoặc mật khẩu không đúng",
          text: "Vui lòng thử lại",
          icon: "warning",
          timer: 2000,
          showConfirmButton: false,
        });
      });
  };

  // Formik hook cho form đăng nhập
  const formikLogin = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
    },

    onSubmit: handleLogin,
  });

  // hàm hanlde đăng ký
  const hanldeRegister = async (values) => {
    console.log("Form Submitted", values);
    try {
      const result = await userService.register(values);
      console.log("🚀 ~ hanldeRegister ~ result:", result);

      if (result.status === 200) {
        console.log("Đăng ký thành công:", result.data);
        Swal.fire({
          title: "Đăng ký thành công!",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });

        formikRegister.resetForm();
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

  // Formik cho form đăng ký
  const formikRegister = useFormik({
    initialValues: {
      taiKhoan: "",
      hoTen: "",
      matKhau: "",
      email: "",
      soDT: "",
      maNhom: "GP01",
    },
    validationSchema: validationSchema,
    onSubmit: hanldeRegister,
  });

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ""}`}>
      {/* Sign Up Form */}
      <div className={`${styles.formContainer} ${styles.signUp}`}>
        <form onSubmit={formikRegister.handleSubmit}>
          <h1>Đăng ký</h1>

          <input
            type="text"
            placeholder="Tài khoản"
            name="taiKhoan"
            value={formikRegister.values.taiKhoan}
            onChange={formikRegister.handleChange}
            onBlur={formikRegister.handleBlur}
          />
          {formikRegister.touched.taiKhoan &&
            formikRegister.errors.taiKhoan && (
              <div className={styles.errorMessage}>
                {formikRegister.errors.taiKhoan}
              </div>
            )}
          <input
            type="text"
            placeholder="Họ tên"
            name="hoTen"
            value={formikRegister.values.hoTen}
            onChange={formikRegister.handleChange}
            onBlur={formikRegister.handleBlur}
          />
          {formikRegister.touched.hoTen && formikRegister.errors.hoTen && (
            <div className={styles.errorMessage}>
              {formikRegister.errors.hoTen}
            </div>
          )}

          <input
            type="password"
            placeholder="Mật khẩu"
            name="matKhau"
            value={formikRegister.values.matKhau}
            onChange={formikRegister.handleChange}
            onBlur={formikRegister.handleBlur}
          />
          {formikRegister.touched.matKhau && formikRegister.errors.matKhau && (
            <div className={styles.errorMessage}>
              {formikRegister.errors.matKhau}
            </div>
          )}

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formikRegister.values.email}
            onChange={formikRegister.handleChange}
            onBlur={formikRegister.handleBlur}
          />
          {formikRegister.touched.email && formikRegister.errors.email && (
            <div className={styles.errorMessage}>
              {formikRegister.errors.email}
            </div>
          )}

          <input
            type="text"
            placeholder="Số điện thoại"
            name="soDT"
            value={formikRegister.values.soDT}
            onChange={formikRegister.handleChange}
            onBlur={formikRegister.handleBlur}
          />
          {formikRegister.touched.soDT && formikRegister.errors.soDT && (
            <div className={styles.errorMessage}>
              {formikRegister.errors.soDT}
            </div>
          )}

          <select
            name="maNhom"
            value={formikRegister.values.maNhom}
            onChange={formikRegister.handleChange}
          >
            <option value="GP01">GP01</option>
            <option value="GP02">GP02</option>
            <option value="GP03">GP03</option>
            <option value="GP04">GP04</option>
            <option value="GP05">GP05</option>
            <option value="GP06">GP06</option>
            <option value="GP07">GP07</option>
            <option value="GP08">GP08</option>
            <option value="GP09">GP09</option>
            <option value="GP010">GP010</option>
          </select>
          <button type="submit">Đăng ký</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className={`${styles.formContainer} ${styles.signIn}`}>
        <form onSubmit={formikLogin.handleSubmit}>
          <h1>Đăng nhập</h1>

          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook">
              <i>
                <Facebook size={20} />
              </i>
            </a>
            <a href="#" aria-label="Mail">
              <i>
                <Mail size={20} />
              </i>
            </a>
            <a href="#" aria-label="Github">
              <i>
                <Github size={20} />
              </i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i>
                <Linkedin size={20} />
              </i>
            </a>
          </div>

          <span>hoặc sử dụng tài khoản đã đăng ký của bạn</span>

          <input
            type="text"
            placeholder="Tài khoản"
            name="taiKhoan"
            value={formikLogin.values.taiKhoan}
            onChange={formikLogin.handleChange}
            onBlur={formikLogin.handleBlur}
          />

          <input
            type="password"
            placeholder="Mật khẩu"
            name="matKhau"
            value={formikLogin.values.matKhau}
            onChange={formikLogin.handleChange}
            onBlur={formikLogin.handleBlur}
          />

          <a href="#">Quên mật khẩu?</a>
          <button type="submit">Đăng nhập</button>
        </form>
      </div>

      {/* Toggle Container */}
      <div className={styles.toggleContainer}>
        <div className={styles.toggle}>
          {/* Toggle Left Panel */}
          <div className={`${styles.togglePanel} ${styles.toggleLeft}`}>
            <h1>Chào mừng bạn đã trở lại!</h1>
            <p>Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
            <button
              type="button"
              className={styles.hidden}
              onClick={() => setIsActive(false)}
            >
              Đăng nhập
            </button>
          </div>

          {/* Toggle Right Panel */}
          <div className={`${styles.togglePanel} ${styles.toggleRight}`}>
            <h1>Xin chào!</h1>
            <p>
              Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!
            </p>
            <button
              type="button"
              className={styles.hidden}
              onClick={() => setIsActive(true)}
            >
              Đăng ký
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
