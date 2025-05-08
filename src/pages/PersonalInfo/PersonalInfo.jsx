import React, { useEffect, useState } from "react";
import styles from "../student/courses/course-detail/DetailPage.module.scss";
import {
  Button,
  Col,
  Form,
  Input,
  message,
  Modal,
  Row,
  Divider,
  notification,
} from "antd";
import avtHocVien from "../student/homepage/asset/listDangVienHangDau/avtHocVien.jpg";
import { callApiNguoiDung } from "../../service/callApiNguoiDung";
import { StarFilled } from "@ant-design/icons";
import thaySy from "../student/homepage/asset/listDangVienHangDau/thaySy.jpg";
import { useNavigate } from "react-router-dom";
import { callApiKhoaHoc } from "../../service/callApiKhoaHoc.js";

export default function PersonalInfo() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("personalInfo");
  const [accountInfo, setAccountInfo] = useState([]); // State cho API thongTinTaiKhoan
  const [updatedInfo, setUpdatedInfo] = useState([]); // State cho API capNhatThongTinNguoiDung
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  // useEffect(() => {
  //   const userLogin = localStorage.getItem("USER_LOGIN");

  //   if (userLogin) {
  //     const storedUser = JSON.parse(userLogin);
  //     // console.log("🚀 ~ useEffect ~ storedUser:", storedUser);
  //     if (storedUser.soDT) {
  //       storedUser.soDt = storedUser.soDT;
  //       delete storedUser.soDT;
  //     }
  //     setAccountInfo(storedUser);
  //   } else {
  //     callApiNguoiDung
  //       .thongTinTaiKhoan()
  //       .then((result) => {
  //         // console.log("data cần", result.data);
  //         setAccountInfo(result.data);
  //         localStorage.setItem("USER_LOGIN", JSON.stringify(result.data));
  //       })
  //       .catch((err) => {
  //         console.error("Lỗi khi lấy thông tin tài khoản:", err);
  //       });
  //   }
  // }, []);
  useEffect(() => {
    callApiNguoiDung
      .thongTinTaiKhoan()
      .then((result) => {
        // Kiểm tra và xử lý trường soDT
        const userData = result.data;
        if (userData.soDT) {
          userData.soDt = userData.soDT; // Đổi tên trường từ soDT thành soDt
          delete userData.soDT; // Xóa trường soDT cũ
        }

        // Cập nhật thông tin tài khoản vào state
        setAccountInfo(userData);
      })
      .catch((err) => {
        console.error("Lỗi khi lấy thông tin tài khoản:", err);
      });
  }, []);

  const handleUpdateInfo = (values) => {
    const updatedData = {
      ...values,
      maNhom: accountInfo.maNhom,
      maLoaiNguoiDung: accountInfo.maLoaiNguoiDung,
      taiKhoan: accountInfo.taiKhoan,
    };

    // Nếu mật khẩu không được nhập thì loại bỏ nó
    if (!values.matKhau) {
      message.warning(
        "Mật khẩu hiện tại không được nhập, sẽ sử dụng mật khẩu cũ."
      );
      delete updatedData.matKhau;
    }

    callApiNguoiDung
      .capNhatThongTinNguoiDung(updatedData)
      .then((result) => {
        message.success("Cập nhật thông tin thành công!");
        setUpdatedInfo(result.data); // Cập nhật state updatedInfo
        form.resetFields();
        setIsModalOpen(false);
      })
      .catch((err) => {
        message.error("Cập nhật thông tin thất bại!");
        console.error("Lỗi cập nhật:", err);
      });
  };

  const personalInfoContent = () => {
    const displayInfo = { ...accountInfo, ...updatedInfo }; // Gộp thông tin từ hai state
    return (
      <div className="p-4">
        <Row>
          <Col span={12}>
            <div>
              <p>
                <strong>Họ và tên:</strong> {displayInfo.hoTen}
              </p>
              <p>
                <strong>Email:</strong> {displayInfo.email}
              </p>
              <p>
                <strong>Số điện thoại:</strong> {displayInfo.soDt}
              </p>
            </div>
          </Col>
          <Col span={12}>
            <div>
              <p>
                <strong>Tài Khoản:</strong> {displayInfo.taiKhoan}
              </p>
              <p>
                <strong>Nhóm:</strong> {displayInfo.maNhom}
              </p>
              <p>
                <strong>Đối Tượng:</strong>{" "}
                {displayInfo.maLoaiNguoiDung === "HV"
                  ? "Học Viên"
                  : displayInfo.maLoaiNguoiDung === "GV"
                  ? "Giáo Viên"
                  : null}
              </p>
            </div>
            <div>
              <Button
                style={{ backgroundColor: "#f6ba35", color: "#fff" }}
                onClick={() => {
                  setIsModalOpen(true);
                  form.setFieldsValue({
                    hoTen: displayInfo.hoTen,
                    email: displayInfo.email,
                    matKhau: "",
                    soDT: displayInfo.soDt,
                  });
                }}
              >
                CẬP NHẬT
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  };

  // Hàm Hủy Ghi Danh
  const handleCancelCourse = async (course) => {
    try {
      // Gọi API với tham số maKhoaHoc
      const result = await callApiKhoaHoc.huyGhiDanh(
        course.maKhoaHoc,
        accountInfo.taiKhoan
      );

      if (result.status === 200) {
        notification.success({
          message: "Hủy khóa học thành công!",
          description: `Bạn đã hủy đăng ký khóa học ${course.tenKhoaHoc} thành công.`,
        });

        // Lọc bỏ khóa học vừa hủy khỏi chiTietKhoaHocGhiDanh
        setAccountInfo((prevInfo) => ({
          ...prevInfo,
          chiTietKhoaHocGhiDanh: prevInfo.chiTietKhoaHocGhiDanh.filter(
            (item) => item.maKhoaHoc !== course.maKhoaHoc
          ),
        }));
      }
    } catch (error) {
      console.error("Lỗi khi hủy khóa học:", error.response || error);

      notification.error({
        message: "Lỗi",
        description:
          error.response?.data?.message ||
          "Không thể hủy khóa học. Vui lòng thử lại.",
      });
    }
  };

  const coursesContent = (
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">KHÓA HỌC CỦA TÔI</h3>
      {accountInfo?.chiTietKhoaHocGhiDanh &&
      accountInfo.chiTietKhoaHocGhiDanh.length > 0 ? (
        accountInfo.chiTietKhoaHocGhiDanh.map((course) => (
          <div key={course.maKhoaHoc} className="course-item mb-4">
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <img
                  src={course.hinhAnh}
                  alt={course.tenKhoaHoc}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Col>
              <Col span={18} className="flex flex-col">
                <h3 className="text-lg font-semibold">{course.tenKhoaHoc}</h3>
                <p style={{ color: "#8c8c8c" }}>
                  {course.moTa.length > 100
                    ? `${course.moTa.substring(0, 100)}...`
                    : course.moTa}
                </p>
                <div
                  className="flex items-center mb-1 space-x-2"
                  style={{ fontSize: "16px", color: "#8c8c8c" }}
                >
                  <span>
                    <i
                      className="far fa-clock mr-1"
                      style={{ color: "#f5c002" }}
                    ></i>
                    8 giờ
                  </span>
                  <span>
                    <i
                      className="far fa-calendar-alt mr-1"
                      style={{ color: "#f06f68" }}
                    ></i>
                    4 Tuần
                  </span>
                  <span>
                    <i
                      className="fas fa-signal mr-1"
                      style={{ color: "#65c9ff" }}
                    ></i>
                    All Level
                  </span>
                </div>
                <div>
                  <StarFilled style={{ color: "gold" }} />
                  <StarFilled style={{ color: "gold" }} />
                  <StarFilled style={{ color: "gold" }} />
                  <StarFilled style={{ color: "gold" }} />
                  <StarFilled style={{ color: "gold" }} />
                </div>
                <div className="flex items-center my-3">
                  <img
                    className="rounded-full mr-2"
                    src={thaySy}
                    style={{
                      width: "40px",
                      height: "40px",
                      lineHeight: "40px",
                    }}
                    alt="Giảng viên"
                  />
                  <h6>Trần Quang Sĩ</h6>
                </div>
                <Button
                  className="self-end hover:scale-90 transition-all duration-500"
                  style={{ backgroundColor: "#ffc107" }}
                  type="primary"
                  onClick={() => handleCancelCourse(course)} // Truyền thông tin khóa học vào
                >
                  HỦY KHÓA HỌC
                </Button>
              </Col>
            </Row>
            <Divider />
          </div>
        ))
      ) : (
        <p>Không có khóa học nào.</p>
      )}
    </div>
  );
  console.log("🚀 ~ PersonalInfo ~ accountInfo:", accountInfo);

  return (
    <div>
      <section>
        <div>
          <div className={styles.titleDetailCourse}>
            <h3>Thông Tin Cá Nhân</h3>
            <p>Thông tin học viên</p>
          </div>
          <div className="mx-5 py-8">
            <div className="grid grid-cols-12 gap-2 h-full">
              <div className="col-span-3 p-4 rounded-lg shadow-lg flex flex-col justify-between">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={avtHocVien}
                    alt="Avatar"
                    className="w-36 h-36 rounded-full mb-4 border-2"
                    style={{ objectFit: "cover" }}
                  />
                  <h2 className="text-lg font-semibold">{accountInfo.hoTen}</h2>
                  <p className="text-sm text-gray-500">Developer</p>
                  <Button type="primary" className="mt-4">
                    Hồ sơ cá nhân
                  </Button>
                </div>
              </div>

              <div className="col-span-9 bg-white p-4 rounded-lg shadow-lg flex flex-col">
                <div className="flex justify-start mb-4">
                  <Button
                    type={activeTab === "personalInfo" ? "primary" : "default"}
                    className="mr-2"
                    onClick={() => setActiveTab("personalInfo")}
                  >
                    Thông tin cá nhân
                  </Button>
                  <Button
                    type={activeTab === "courses" ? "primary" : "default"}
                    onClick={() => setActiveTab("courses")}
                  >
                    Khóa học
                  </Button>
                </div>
                <div className="flex-1">
                  {activeTab === "personalInfo" && personalInfoContent()}
                  {activeTab === "courses" && coursesContent}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal
        title="Cập nhật thông tin cá nhân"
        visible={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        onOk={() => form.submit()}
        okText="Cập nhật"
        cancelText="Hủy"
      >
        <Form form={form} layout="vertical" onFinish={handleUpdateInfo}>
          <Form.Item
            label="Họ và tên"
            name="hoTen"
            rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="soDT"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
