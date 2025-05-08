import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryCourses } from "../../../redux/courseSlice";
import Swal from "sweetalert2";
import { callApiKhoaHoc } from "../../../service/callApiKhoaHoc";
import { fetchUserListsAll } from "../../../redux/userAdminSlice";
import { fetchCourseListAdmin } from "../../../redux/courseAdminSlice";

const UpdateCourse = ({ course, isOpen, closeModal }) => {
  const dispatch = useDispatch();
  const [thumb, setThumb] = useState(null);

  const { userListAll } = useSelector((state) => state.userAdminSlice);

  const { categories } = useSelector((state) => state.courseSlice);

  // update Course
  const updateCourse = async (values) => {
    if (values.hinhAnh.name) {
      try {
        let formData = new FormData();
        for (let key in values) {
          if (key !== "hinhAnh") {
            formData.append(key, values[key]);
          } else {
            formData.append("hinhAnh", values.hinhAnh, values.hinhAnh.name);
          }
        }
        const response = await callApiKhoaHoc.updateCourseHasImage(formData);
        // Kiểm tra kết quả trả về
        if (response.status === 200) {
          Swal.fire({
            title: "Thành công!",
            text: "Khóa học đã được cập nhật thành công.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
          dispatch(fetchCourseListAdmin());
          formik.resetForm(); // Reset form sau khi thêm thành công
          setThumb(null); // Xóa ảnh preview
          closeModal(); // Đóng modal
        }
      } catch (error) {
        Swal.fire({
          title: "Lỗi!",
          text:
            error.response?.data?.message ||
            "Có lỗi xảy ra khi cập nhật khóa học. Vui lòng thử lại.",
          icon: "error",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    } else {
      try {
        let result = await callApiKhoaHoc.updateCourse(values);
        if (result.request.status === 200) {
          formik.resetForm();
          Swal.fire({
            title: "Thành công!",
            text: "Khóa học đã được cập nhật thành công.",
            icon: "success",
            timer: 2000,
            showConfirmButton: false,
          });
          dispatch(fetchCourseListAdmin());
          formik.resetForm(); // Reset form sau khi thêm thành công
          setThumb(null); // Xóa ảnh preview
          closeModal(); // Đóng modal
        }
      } catch (error) {
        Swal.fire({
          title: "Lỗi!",
          text:
            error.errors.response?.data ||
            "Có lỗi xảy ra khi cập nhật khóa học. Vui lòng thử lại.",
          icon: "error",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: "",
      maNhom: "",
      ngayTao: "",
      maDanhMucKhoaHoc: "",
      taiKhoanNguoiTao: "",
    },
    validationSchema: Yup.object({
      maKhoaHoc: Yup.string().required("Mã khóa học không được để trống"),

      tenKhoaHoc: Yup.string().required("Tên khóa học không được để trống"),

      moTa: Yup.string().required("Mô tả không được để trống"),

      ngayTao: Yup.string()
        .required("Ngày tạo không được để trống")
        .matches(
          /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
          "Vui lòng nhập đúng định dạng DD/MM/YYYY"
        ),

      danhGia: Yup.number()
        .required("Đánh giá không được để trống")
        .max(5, "Đánh giá nhiều nhất là 5 sao")
        .min(0, "Đánh giá thấp nhất là 0 sao"),
      luotXem: Yup.number()
        .required("Đánh giá không được để trống")
        .min(0, "Lượt xem thấp nhất là 0"),
      maDanhMucKhoaHoc: Yup.string().required(
        "Danh mục khóa học không được để trống"
      ),
      taiKhoanNguoiTao: Yup.string().required("Tài khoản không được để trống"),
      maNhom: Yup.string().required("Mã nhóm không được để trống"),
    }),
    onSubmit: updateCourse,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      formik.setFieldValue("hinhAnh", file);
      const reader = new FileReader();
      reader.onload = (e) => setThumb(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // render người tạo
  const renderCreatorList = (userListAll) => {
    return userListAll.map((i) => {
      if (i.maLoaiNguoiDung === "GV") {
        return (
          <option key={i.taiKhoan} value={i.taiKhoan}>
            {i.taiKhoan}
          </option>
        );
      }
      return null;
    });
  };

  // hàm render danh mục khóa học
  const renderCourseList = (categories) => {
    if (!categories || categories.length === 0) {
      return <option value="">Không có danh mục</option>;
    }
    return categories.map((category) => (
      <option key={category.maDanhMuc} value={category.maDanhMuc}>
        {category.tenDanhMuc} {category.maDanhMuc}
      </option>
    ));
  };

  const renderMaNhom = () => {
    const maNhomList = Array.from(
      { length: 15 },
      (_, index) => `GP${(index + 1).toString().padStart(2, "0")}`
    );
    return maNhomList.map((maNhom) => (
      <option key={maNhom} value={maNhom}>
        {maNhom}
      </option>
    ));
  };

  useEffect(() => {
    dispatch(fetchCategoryCourses());
    dispatch(fetchUserListsAll());
  }, [dispatch]);

  useEffect(() => {
    console.log("course", course);

    if (course) {
      // Hiển thị hình ảnh xem trước
      if (course.hinhAnh) {
        setThumb(course.hinhAnh); // Gán hình ảnh từ course vào thumb để xem trước
      } else {
        setThumb(null); // Xóa hình ảnh nếu không có
      }
      // Điền dữ liệu vào form khi mở modal
      formik.setValues({
        maKhoaHoc: course.maKhoaHoc || "",
        biDanh: course.biDanh || "",
        tenKhoaHoc: course.tenKhoaHoc || "",
        moTa: course.moTa || "",
        luotXem: course.luotXem || 0,
        danhGia: course.danhGia || 0,
        hinhAnh: course.hinhAnh,
        maNhom: course.maNhom || "",
        ngayTao: course.ngayTao || "",
        maDanhMucKhoaHoc:
          course.danhMucKhoaHoc && course.danhMucKhoaHoc.maDanhMucKhoahoc,
        taiKhoanNguoiTao: course.nguoiTao?.taiKhoan || "",
      });
    } else {
      // Reset dữ liệu khi không có course
      formik.resetForm();
      setThumb(null);
    }
  }, [course]);

  useEffect(() => {
    if (!isOpen) {
      formik.resetForm();
      setThumb(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      onClick={closeModal} // Đảm bảo không có reset form khi đóng modal
      className="fixed inset-0 flex items-center justify-center  z-50 bg-gray-500 bg-opacity-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-auto"
      >
        <h2 className="text-2xl font-bold text-center mb-6">CẬP KHÓA HỌC</h2>
        <form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {/* Các trường input như cũ */}
          <InputField
            readOnly={true}
            iconClass="fa fa-user"
            placeholder="Mã khóa học"
            name="maKhoaHoc"
            formik={formik}
          />
          <InputField
            iconClass="fa fa-file-alt"
            placeholder="Tên khóa học"
            name="tenKhoaHoc"
            formik={formik}
          />
          <div className="form-group ">
            <div className="flex items-center border rounded">
              <span className="bg-gray-200 p-2 rounded-l">
                <i className="fa fa-list text-gray-600"></i>
              </span>
              <select
                name="maDanhMucKhoaHoc"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.maDanhMucKhoaHoc}
                className="w-full p-2 focus:outline-none"
              >
                <option value="">Chọn danh mục khóa học</option>
                {renderCourseList(categories)}
              </select>
            </div>
            {formik.touched.maDanhMucKhoaHoc &&
              formik.errors.maDanhMucKhoaHoc && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.maDanhMucKhoaHoc}
                </div>
              )}
          </div>
          <InputField
            iconClass="fa fa-calendar"
            placeholder="Ngày tạo"
            name="ngayTao"
            type="text"
            formik={formik}
          />
          <InputField
            iconClass="fa fa-star"
            placeholder="Đánh giá"
            name="danhGia"
            type="number"
            formik={formik}
          />
          <InputField
            iconClass="fa fa-eye"
            placeholder="Lượt xem"
            name="luotXem"
            type="number"
            formik={formik}
          />
          <div className="form-group ">
            <div className="flex items-center border rounded">
              <span className="bg-gray-200 p-2 rounded-l">
                <i className="fa fa-user-tie text-gray-600"></i>
              </span>
              <select
                name="taiKhoanNguoiTao"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.taiKhoanNguoiTao}
                className="w-full p-2 focus:outline-none"
              >
                <option value="">Chọn người tạo</option>
                {renderCreatorList(userListAll)}
              </select>
            </div>
            {formik.touched.taiKhoanNguoiTao &&
              formik.errors.taiKhoanNguoiTao && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.taiKhoanNguoiTao}
                </div>
              )}
          </div>

          {/* Mã nhóm */}
          <div className="form-group ">
            <div className="flex items-center border rounded">
              <span className="bg-gray-200 p-2 rounded-l">
                <i className="fa fa-users text-gray-600"></i>
              </span>
              <select
                name="maNhom"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.maNhom}
                className="w-full p-2 focus:outline-none"
              >
                <option value="">Chọn mã nhóm</option>
                {renderMaNhom()}
              </select>
            </div>
            {formik.touched.maNhom && formik.errors.maNhom && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.maNhom}
              </div>
            )}
          </div>

          {/* Chọn hình ảnh */}
          <div className="col-span-1 sm:col-span-2">
            <label className="block font-bold mb-2">Chọn hình ảnh</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full p-2 border rounded"
            />
          </div>

          {/* Mô tả khóa học và Hình ảnh */}
          <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-4 gap-4">
            {/* Mô tả khóa học */}
            <div className="sm:col-span-3">
              <label className="block font-bold mb-2">Mô tả khóa học</label>
              <textarea
                name="moTa"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.moTa}
                className="w-full border rounded p-2 resize-none"
                rows="4"
                placeholder="Nhập mô tả khóa học"
              ></textarea>
              {formik.touched.moTa && formik.errors.moTa && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.moTa}
                </div>
              )}
            </div>

            {/* Hình ảnh xem trước */}
            <div className="sm:col-span-1 flex items-start justify-center bg-gray-100 rounded overflow-hidden">
              {thumb ? (
                <img
                  src={thumb}
                  alt="Preview"
                  className="rounded-lg object-cover w-full h-auto"
                />
              ) : (
                <span className="text-gray-500 text-sm text-center">
                  Chưa có hình ảnh
                </span>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="col-span-1 sm:col-span-2 flex justify-end space-x-4">
            <button
              type="button"
              onClick={closeModal}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
            >
              Đóng
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const InputField = ({
  iconClass,
  placeholder,
  name,
  type = "text",
  formik,
}) => (
  <div className="form-group">
    <div className="flex items-center border rounded">
      <span className="bg-gray-200 p-2 rounded-l">
        <i className={`${iconClass} text-gray-600`}></i>
      </span>
      <input
        type={type}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
        className="w-full p-2 focus:outline-none"
        placeholder={placeholder}
      />
    </div>
    {formik.touched[name] && formik.errors[name] && (
      <div className="text-red-500 text-sm mt-1">{formik.errors[name]}</div>
    )}
  </div>
);

export default UpdateCourse;
