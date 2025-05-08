import React from "react";
import styles from "./DetailPage.module.scss";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { callApiKhoaHoc } from "../../../../service/callApiKhoaHoc";

import Swal from "sweetalert2";
import { Card, Col, Popover, Row } from "antd";
import avtELM from "../../list-courses-by-cat/asset/avaElonmuck.png";
import avtPPV from "../../list-courses-by-cat/asset/avaPPV.png";

export default function CourseDetail() {
  const navigate = useNavigate();
  const { maKhoaHoc } = useParams();
  const [listKhoaHoc, setListKhoaHoc] = useState([]);
  const [courseDetail, setCourseDetail] = useState([]);

  useEffect(() => {
    callApiKhoaHoc
      .layDanhSachKhoaHoc()
      .then((result) => {
        setListKhoaHoc(result.data);
      })
      .catch((err) => {});
  }, []);

  const khoaHocThamKhao = listKhoaHoc.slice(10, 14);
  // hàm btn đăng ký khóa học
  const btnRegisterCourse = () => {
    const userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"));
    if (userLogin) {
      const infoRegisrer = {
        taiKhoan: userLogin.taiKhoan,
        maKhoaHoc: maKhoaHoc,
      };

      registerCourse(infoRegisrer);
    } else {
      navigate("/login");
    }
  };

  // hàm gọi API để đăng ký khóa học
  const registerCourse = async (infoRegisrer) => {
    try {
      // Gửi yêu cầu đăng ký khóa học
      const response = await callApiKhoaHoc.registerCourseAPI(infoRegisrer);
      Swal.fire({
        title: "Đăng kí thành công",
        text: `Khóa học: ${
          response.data?.courseName || "Đã đăng ký thành công"
        }`,
        icon: "success",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (errors) {
      // Xử lý lỗi khi gọi API

      Swal.fire({
        title: errors.response?.data,
        icon: "warning",
        text: "Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại",
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  useEffect(() => {
    callApiKhoaHoc
      .layChiTietKhoaHoc(maKhoaHoc)
      .then((result) => {
        setCourseDetail(result.data);
      })
      .catch((err) => {});
  }, [maKhoaHoc]);

  return (
    <section className=" mx-auto ">
      {/* Row 1: Thông tin khóa học */}
      <div className={styles.titleDetailCourse}>
        <h3>Thông tin khóa học</h3>
        <p>Tiến lên và không chần chừ !!!</p>
      </div>

      <div className="p-12">
        {/* Row 2: Chia thành 2 cột */}
        <div className="grid grid-cols-12 gap-2">
          {/* Cột trái: Chi tiết khóa học */}
          <div className="col-span-12 sm:col-span-8 bg-white p-6 rounded-lg shadow-lg">
            <div className="col-span-2 text-left">
              <h4 className="font-500">{courseDetail?.tenKhoaHoc}</h4>
              <div className="grid grid-cols-3 py-30 my-4">
                {/* 1 */}
                <div>
                  <div className={styles.detailCourseInfo}>
                    <div>
                      <img
                        src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
                        alt=""
                      />
                    </div>
                    <div className="px-2 ">
                      <p>Giảng viên</p>
                      <p className="font-600">Zion Huỳnh Chiểu & Tiến Nhân</p>
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div>
                  <div className={styles.detailCourseInfo}>
                    <div>
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                    <div className="px-2">
                      <p>Lĩnh vực</p>
                      <p className="font-600">Lập Trình Backend</p>
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div>
                  <div className={styles.detailCourseInfo}>
                    <div className={styles.reviewDetail}>
                      <span className="font-600">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                        4.9
                      </span>
                      <p>1000 đánh giá</p>
                    </div>
                  </div>
                </div>
              </div>
              <p className={styles.textDiscripts}>
                React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử
                dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện
                đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu,
                từ cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản
                cốt lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các
                khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn
                ví dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến
                ​​thức quan trọng bị hầu hết các nguồn khác bỏ qua - sau cùng,
                có một lý do tại sao khóa học này lại rất lớn! Và trong trường
                hợp bạn thậm chí không biết tại sao bạn lại muốn học React và
                bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo
                lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà
                phát triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI
                SAO điều đó lại quan trọng!
              </p>
              <div className={styles.boxCourseLearn}>
                <h6>Những gì bạn sẽ học</h6>
                <div className="grid grid-cols-2 gap-10">
                  <div>
                    <ul>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân
                          thiện với người dùng và phản ứng nhanh
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Đăng ký công việc được trả lương cao hoặc làm
                          freelancer trong một trong những lĩnh vực được yêu cầu
                          nhiều nhất mà bạn có thể tìm thấy trong web dev ngay
                          bây giờ
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Cung cấp trải nghiệm người dùng tuyệt vời bằng cách
                          tận dụng sức mạnh của JavaScript một cách dễ dàng
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Tìm hiểu tất cả về React Hooks và React Components
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <ul>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân
                          thiện với người dùng và phản ứng nhanh
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Đăng ký công việc được trả lương cao hoặc làm
                          freelancer trong một trong những lĩnh vực được yêu cầu
                          nhiều nhất mà bạn có thể tìm thấy trong web dev ngay
                          bây giờ
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Cung cấp trải nghiệm người dùng tuyệt vời bằng cách
                          tận dụng sức mạnh của JavaScript một cách dễ dàng
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <a href="/">
                          Tìm hiểu tất cả về React Hooks và React Components
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.courseContent}>
                <h6>nội dung khóa học</h6>
                <div className={styles.courseItemDetail}>
                  <div className={styles.courseDetailContent}>
                    <div className={styles.sectionCourse}>
                      <span>Mục 1: Giới thiệu</span>
                      <button className={styles.btnPreview}>Xem trước</button>
                    </div>
                    <p>Bài học</p>
                    <div className={styles.lessonContainer}>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Các khái niệm về
                          React Component
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Thiết lập môi
                          trường cho Windows
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Tạo ứng dụng
                          React - React-Scripts
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Ghi chú nhanh về
                          dấu ngoặc kép cho string interpolation
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.courseItemDetail}>
                  <div className={styles.courseDetailContent}>
                    <div className={styles.sectionCourse}>
                      <span>Mục 2: Kiến thức căn bản</span>
                      <button className={styles.btnPreview}>Xem trước</button>
                    </div>
                    <p>Bài học</p>
                    <div className={styles.lessonContainer}>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Trang chủ và
                          thành phần thư mục
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Hướng dẫn khóa
                          học + Liên kết Github
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Trang chủ thương
                          mai điện tử + thiết lập SASS
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Tệp CSS và SCSS
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>React 17: Cập
                          nhật các gói + Phiên bản React mới nhất
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.courseItemDetail}>
                  <div className={styles.courseDetailContent}>
                    <div className={styles.sectionCourse}>
                      <span>Mục 3: Kiến thức chuyên sâu</span>
                      <button className={styles.btnPreview}>Xem trước</button>
                    </div>
                    <p>Bài học</p>
                    <div className={styles.lessonContainer}>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>connect() and
                          mapStateToProps
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Trạng thái thư
                          mục vào Redux
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                      <div className={styles.lessonContent}>
                        <span>
                          <i className="fas fa-play-circle"></i>Thành phần Tổng
                          quan về Bộ sưu tập
                        </span>
                        <span>
                          <i className="fas fa-clock"></i> 14:35
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cột phải: Form đăng ký khóa học */}

          <div className="col-span-12 sm:col-span-4 ">
            <div className={styles.sideBarCourseDetail}>
              <img src={courseDetail.hinhAnh} alt="" />
              <div className={styles.coursePrice}>
                <p>
                  <i className="fas fa-bolt"></i>490.000<sup>đ</sup>
                </p>
              </div>

              <button
                type="button"
                className={styles.btnPreview}
                onClick={btnRegisterCourse}
              >
                Đăng ký
              </button>

              <div className={styles.sideBarDetailContent}>
                <ul>
                  <li>
                    <p>
                      Ghi danh: <span>10 học viên</span>
                    </p>
                    <i className="fas fa-user-graduate"></i>
                  </li>
                  <li>
                    <p>
                      Thời gian: <span>18 giờ</span>
                    </p>
                    <i className="far fa-clock far fa-calendar-alt"></i>
                  </li>
                  <li>
                    <p>
                      Bài học: <span>10</span>
                    </p>
                    <i className="fas fa-book"></i>
                  </li>
                  <li>
                    <p>
                      Video: <span>14</span>
                    </p>
                    <i className="fas fa-photo-video"></i>
                  </li>
                  <li>
                    <p>
                      Trình độ: <span>Người mới bắt đầu</span>
                    </p>
                    <i className="fas fa-database"></i>
                  </li>
                </ul>
                <form action="" className={styles.formCoupon}>
                  <input type="text" placeholder="Nhập mã" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* khoaHocThamKhao */}
      <h6 className="no-underline inline-block ml-5 mt-3">
        <p
          className="font-bold"
          style={{
            color: "#000000",
          }}
        >
          Khóa học tham khảo
        </p>
      </h6>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-center">
        {khoaHocThamKhao.map((item) => {
          const popoVerKhoaHocThamKhao = (
            <div>
              <Card style={{ width: 300 }}>
                <div className="flex items-center">
                  <img src={avtPPV} width={"40px"} alt="" />
                  <span className="ml-2 font-bold" style={{ color: "#8C8C8C" }}>
                    Elun Musk Ricard
                  </span>
                </div>
                <div className="my-3">
                  <p className="font-bold">
                    BOOTCAMP - LẬP TRÌNH FULL STACK TỪ ZERO ĐẾN CÓ VIỆC
                  </p>
                </div>
                <div className="mb-3" style={{ color: "#8C8C8C" }}>
                  <p>
                    Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua
                    chương trình đào tạo Bootcamp Lập trình Front End chuyên
                    nghiệp. Khóa học 100% thực hành cường độ cao theo dự án thực
                    tế và kết nối doanh nghiệp hỗ trợ tìm việc ngay sau khi
                    học...
                  </p>
                </div>
                <div
                  className="flex justify-between items-center mb-3 space-x-2"
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
                    Tất Cả
                  </span>
                </div>
                <div className="mt-3">
                  <NavLink
                    className="no-underline block w-full h-full bg-[#41b294] text-white text-center py-3"
                    to={`/chitiet/${item.maKhoaHoc}`}
                  >
                    Xem Chi Tiết
                  </NavLink>
                </div>
              </Card>
            </div>
          );
          return (
            <div className="flex justify-center" key={item.maKhoaHoc}>
              <Popover content={popoVerKhoaHocThamKhao}>
                <Card
                  className="relative"
                  onClick={() => {
                    navigate(`/chitiet/${item.maKhoaHoc}`);
                  }}
                  hoverable
                  style={{
                    width: 300,
                    height: 400,
                    padding: "10px",
                  }}
                  cover={
                    <div className="h-[175px] overflow-hidden">
                      <img
                        alt="example"
                        src={item.hinhAnh}
                        className="w-full h-full object-fill"
                      />
                    </div>
                  }
                >
                  <p
                    className="inline-block text-center font-semibold px-2 absolute top-40 left-0"
                    style={{
                      backgroundColor: "#41b294",
                      color: "#fff",
                      fontSize: "16px",
                    }}
                  >
                    {item.tenKhoaHoc}
                  </p>
                  <p className="font-bold mb-2" style={{ fontSize: "16px" }}>
                    Lập Trình hiện đang là xu hướng trên toàn thế giới...
                  </p>
                  <div
                    className="flex justify-between items-center mb-4 space-x-2"
                    style={{
                      fontSize: "16px",
                      color: "#8c8c8c",
                    }}
                  >
                    <span>
                      <i
                        className="far fa-clock mr-1"
                        style={{
                          color: "#f5c002",
                        }}
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
                      Tất Cả
                    </span>
                  </div>
                  <div className="mt-1 -mx-4 border-t-2 border-gray-300 pt-2">
                    <Row className="pb-0 justify-between items-center">
                      <Col span={8} className="flex justify-start items-center">
                        <div className="flex items-center space-x-2">
                          <img
                            src={avtELM}
                            style={{ width: "35px" }}
                            alt=""
                            className="border-t-2 border-b-2 border-[#f6ba35] p-1 rounded-full"
                          />
                          <span
                            className="font-bold"
                            style={{
                              color: "#8C8C8C",
                              whiteSpace: "nowrap",
                            }}
                          >
                            Elon Musk
                          </span>
                        </div>
                      </Col>
                      <Col span={8} className="flex justify-end items-center">
                        <div className="text-center">
                          <p
                            className="line-through mb-0 text-gray-500 text-sm"
                            style={{ fontSize: "12px", marginBottom: "0" }}
                          >
                            800.000 <sup>đ</sup>
                          </p>
                          <p
                            className="font-bold text-[#41b294]"
                            style={{
                              fontSize: "16px",
                              marginBottom: "0",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            400.000 <sup>đ</sup>
                            <i
                              className="fas fa-tag"
                              style={{ color: "red", marginLeft: "5px" }}
                            ></i>
                          </p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card>
              </Popover>
            </div>
          );
        })}
      </div>
    </section>
  );
}
