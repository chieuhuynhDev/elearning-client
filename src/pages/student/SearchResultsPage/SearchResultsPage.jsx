import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "../courses/course-detail/DetailPage.module.scss";
import { Button, Checkbox, Col, Divider, Row } from "antd";
import { StarFilled } from "@ant-design/icons";
import thaySy from ".././homepage/asset/listDangVienHangDau/thaySy.jpg";
// import styless from "./SearchResultsPage.module.scss";

const SearchResultsPage = () => {
  const location = useLocation();
  const { results } = location.state || { results: [] };
  const navigate = useNavigate();

  return (
    <section>
      <div className={styles.titleDetailCourse}>
        <h3>Tìm kiếm</h3>
        <p>Kết quả tìm kiếm khóa học!</p>
      </div>
      <div className="px-4 mt-3">
        <Row gutter={[16, 16]}>
          <Col span={5}>
            <div
              style={{
                padding: "20px",
                border: "1px solid #d9d9d9",
                borderRadius: "8px",
              }}
            >
              <h3>Lọc</h3>

              <div>
                <h4>Khóa học</h4>
                <Checkbox.Group className="flex flex-col">
                  <Checkbox value="course1">Tất Cả</Checkbox>
                  <Checkbox value="course2">Front End</Checkbox>
                  <Checkbox value="course3">Back End</Checkbox>
                  <Checkbox value="course4">HTML / CSS</Checkbox>
                </Checkbox.Group>
              </div>

              <Divider />

              <div>
                <h4>Cấp độ</h4>
                <Checkbox.Group className="flex flex-col">
                  <Checkbox value="level1">Tất Cả</Checkbox>
                  <Checkbox value="level2">Mới Bắt Đầu</Checkbox>
                  <Checkbox value="level3">Trung Cấp</Checkbox>
                  <Checkbox value="level4">Cao Cấp</Checkbox>
                </Checkbox.Group>
              </div>

              <Divider />

              <div>
                <h4>Đánh giá</h4>
                <Checkbox.Group className="flex flex-col">
                  <Checkbox value="rating1">
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                  </Checkbox>
                  <Checkbox value="rating2">
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                  </Checkbox>
                  <Checkbox value="rating3" style={{ color: "gold" }}>
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                  </Checkbox>
                  <Checkbox value="rating4">
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                  </Checkbox>
                  <Checkbox value="rating5">
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                    <StarFilled style={{ color: "gold", fontSize: "20px" }} />
                  </Checkbox>
                </Checkbox.Group>
              </div>
            </div>
          </Col>

          <Col span={19}>
            <h3>Hiển thị {results.length} kết quả</h3>
            <div
              style={{
                padding: "20px",
                border: "1px solid #d9d9d9",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  padding: "20px",
                  border: "1px solid #d9d9d9",
                  borderRadius: "8px",
                }}
              >
                {/* Hiển thị số lượng kết quả tìm được */}

                {results.length > 0 ? (
                  results.map((course) => (
                    <div key={course.maKhoaHoc} className="course-item">
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
                          <h3>{course.tenKhoaHoc}</h3>
                          <p style={{ color: "#8c8c8c" }}>
                            {course.moTa.length > 100
                              ? `${course.moTa.substring(0, 50)}...`
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
                            />
                            <h6>Trần Quang Sĩ</h6>
                          </div>
                          <Button
                            className="self-end hover:scale-90 transition-all duration-500"
                            style={{ backgroundColor: "#ffc107" }}
                            type="primary"
                            onClick={() => {
                              navigate("/chitiet/:maKhoaHoc");
                            }}
                          >
                            XEM CHI TIẾT
                          </Button>
                        </Col>
                      </Row>
                      <Divider />
                    </div>
                  ))
                ) : (
                  <p>Không có khóa học nào phù hợp với tìm kiếm của bạn.</p>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default SearchResultsPage;
