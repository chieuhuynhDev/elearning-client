import React from "react";
import styles from "./course-all.module.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { Card, Col, Popover, Row } from "antd";
import avtELM from "../../list-courses-by-cat/asset/avaElonmuck.png";
import avtPPV from "../../list-courses-by-cat/asset/avaPPV.png";
import { useSelector } from "react-redux";
import Pagination from "../../../../components/Pagination/Pagination";

export default function CourseAll() {
  const navigate = useNavigate();

  const { coursesPagination } = useSelector((state) => state.courseSlice);

  const renderCourseCategoryList = () => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {coursesPagination.map((item) => {
          const popoVercourseByCatetory = (
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
                    ></i>{" "}
                    8 giờ
                  </span>
                  <span>
                    <i
                      className="far fa-calendar-alt mr-1"
                      style={{ color: "#f06f68" }}
                    ></i>{" "}
                    4 Tuần
                  </span>
                  <span>
                    <i
                      className="fas fa-signal mr-1"
                      style={{ color: "#65c9ff" }}
                    ></i>{" "}
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
              <Popover content={popoVercourseByCatetory}>
                <Card
                  className="relative"
                  onClick={() => {
                    navigate(`/chitiet/${item.maKhoaHoc}`);
                  }}
                  hoverable
                  style={{ width: 300, height: 400, padding: "10px" }}
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
                  <div className="flex items-center mb-4 space-x-2">
                    <img
                      src={avtELM}
                      style={{ width: "35px" }}
                      alt=""
                      className="border-t-2 border-b-2 border-[#f6ba35] p-1 rounded-full"
                    />
                    <span className="font-bold" style={{ color: "#8C8C8C" }}>
                      Elon Musk
                    </span>
                  </div>
                  <div className="mt-1 -mx-4 border-t-2 border-gray-300 pt-2">
                    <Row className="pb-0">
                      <Col
                        span={8}
                        className="flex justify-center items-center"
                      >
                        <div className="text-start">
                          <p
                            className="line-through mb-0 text-gray-500 text-sm"
                            style={{ fontSize: "12px", marginBottom: "0" }}
                          >
                            800.000 <sup>đ</sup>
                          </p>
                          <p
                            className="font-bold text-[#41b294]"
                            style={{ fontSize: "16px", marginBottom: "0" }}
                          >
                            400.000 <sup>đ</sup>
                          </p>
                        </div>
                      </Col>
                      <Col
                        span={8}
                        offset={8}
                        className="flex justify-center items-center"
                      >
                        <div className="flex justify-center items-center text-center">
                          <i
                            className="fas fa-star mr-1"
                            style={{ color: "#f6ba35" }}
                          ></i>
                          <span
                            className="font-bold"
                            style={{ color: "#f6ba35", fontSize: "16px" }}
                          >
                            4.9
                          </span>
                          <span style={{ color: "#8C8C8C", fontSize: "12px" }}>
                            (7840)
                          </span>
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
    );
  };

  return (
    <section>
      <div className={styles.titleClasses}>
        <h3>Khóa học</h3>
        <p>Bắt đầu hành trình nào!!!</p>
      </div>
      <div className={styles.classesContainer}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className={styles.classesBoxItem}>
            <div className={styles.classesBox1}>
              <h6>Chương trình học</h6>
              <i className="fas fa-laptop"></i>
              <p>300</p>
            </div>
          </div>
          <div className={styles.classesBoxItem}>
            <div className={styles.classesBox2}>
              <h6>Nhà sáng tạo</h6>
              <i className="fas fa-camera"></i>
              <p>10000</p>
            </div>
          </div>
          <div className={styles.classesBoxItem}>
            <div className={styles.classesBox3}>
              <h6>Nhà thiết kế</h6>
              <i className="fas fa-briefcase"></i>
              <p>400</p>
            </div>
          </div>
          <div className={styles.classesBoxItem}>
            <div className={styles.classesBox4}>
              <h6>Bài giảng</h6>
              <i className="fas fa-book"></i>
              <p>3000</p>
            </div>
          </div>
          <div className={styles.classesBoxItem}>
            <div className={styles.classesBox5}>
              <h6>Video</h6>
              <i className="fas fa-play-circle"></i>
              <p>40000</p>
            </div>
          </div>
          <div className={styles.classesBoxItem}>
            <div className={styles.classesBox6}>
              <h6>Lĩnh vực</h6>
              <i className="fas fa-dice-d20"></i>
              <p>200</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.listCoursePagination}>
        <h6 className="mb-10 text-lg">
          <i className="fas fa-bookmark  pr-4 text-pink-500 font-600 text-lg"></i>
          Danh sách khóa học
        </h6>
        <div className="row">{renderCourseCategoryList()}</div>
      </div>
      <Pagination />
    </section>
  );
}
