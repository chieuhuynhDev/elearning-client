import { Col, Row } from "antd";
import React from "react";
import phiHanhGia from "./asset/HinhAnhChenBackground/giaHanhPhi.png";

export default function InfoCoure() {
  return (
    <div className="infoCoure px-4">
      <Row className="justify-around" gutter={[16, 16]}>
        {/* Cột 1 */}
        <Col
          xs={24}
          sm={24}
          lg={8}
          className="flex relative group overflow-hidden"
        >
          <div
            className="infoItem p-4 text-start text-white flex flex-col h-full space-y-4 relative"
            style={{
              backgroundColor: "#41b294",
              backgroundImage: `url(${phiHanhGia})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "50%",
              backgroundPosition: "bottom right",
            }}
          >
            {/* Vệt sáng */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            <h3 className="text-[20px] lg:text-[28px] font-bold">KHÓA HỌC</h3>
            <p className="text-[14px] lg:text-[16px]">
              <span className="font-bold">Học qua dự án thực tế</span>, học đi
              đôi với hành, không lý thuyết lan man, phân tích cội nguồn của vấn
              đề, xây dựng từ các ví dụ nhỏ đến thực thi một dự án lớn ngoài
              thực tế để học viên học xong làm được ngay.
            </p>
            <ul className="pl-0 space-y-2">
              <li>
                <i className="fas fa-check pr-2"></i>Hơn 1000 bài tập và dự án
                thực tế
              </li>
              <li>
                <i className="fas fa-check pr-2"></i>Công nghệ cập nhật mới nhất
              </li>
              <li>
                <i className="fas fa-check pr-2"></i>Hình ảnh, ví dụ, bài giảng
                sinh động trực quan
              </li>
              <li>
                <i className="fas fa-check pr-2"></i>Tư duy phân tích, giải
                quyết vấn đề trong dự án
              </li>
              <li>
                <i className="fas fa-check pr-2"></i>Học tập kinh nghiệm, qui
                trình làm dự án
              </li>
              <li>
                <i className="fas fa-check pr-2"></i>Cơ hội thực tập tại các
                công ty lớn như FPT, Microsoft
              </li>
            </ul>
          </div>
        </Col>

        {/* Cột 2 */}
        <Col xs={24} sm={24} lg={8}>
          <Row
            gutter={[16, 16]}
            className="flex flex-col gap-y-4 h-full"
            style={{ height: "100%" }}
          >
            <Col
              span={24}
              className="flex-1 relative group overflow-hidden"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div
                className="infoItem p-4 text-start text-white h-full relative"
                style={{ backgroundColor: "#f6ba35" }}
              >
                {/* Vệt sáng */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <h3 className="text-[20px] lg:text-[28px] font-bold">
                  LỘ TRÌNH PHÙ HỢP
                </h3>
                <ul className="pl-0 space-y-2">
                  <li>
                    <i className="fas fa-check pr-2"></i>Lộ trình bài bản từ
                    zero tới chuyên nghiệp
                  </li>
                  <li>
                    <i className="fas fa-check pr-2"></i>Học, luyện tập code, kỹ
                    thuật phân tích
                  </li>
                  <li>
                    <i className="fas fa-check pr-2"></i>Huấn luyện để phát
                    triển năng lực và niềm đam mê lập trình
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              span={24}
              className="flex-1 relative group overflow-hidden"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div
                className="infoItem p-4 text-start text-white h-full relative"
                style={{ backgroundColor: "#f6ba35" }}
              >
                {/* Vệt sáng */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <h3 className="text-[20px] lg:text-[28px] font-bold">
                  GIẢNG VIÊN
                </h3>
                <ul className="pl-0 space-y-2">
                  <li>
                    <i className="fas fa-check pr-2"></i>Tương tác cùng mentor
                    và giảng viên qua phần thảo luận
                  </li>
                  <li>
                    <i className="fas fa-check pr-2"></i>Review code và đưa ra
                    các nhận xét góp ý
                  </li>
                  <li>
                    <i className="fas fa-check pr-2"></i>Chấm điểm tương tác
                    thảo luận giữa các học viên
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>

        {/* Cột 3 */}
        <Col xs={24} sm={24} lg={8}>
          <Row
            gutter={[16, 16]}
            className="flex flex-col gap-y-4 h-full"
            style={{ height: "100%" }}
          >
            <Col
              span={24}
              className="flex-1 relative group overflow-hidden"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div
                className="infoItem p-4 text-start text-white h-full relative"
                style={{ backgroundColor: "#5c8295" }}
              >
                {/* Vệt sáng */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <h3 className="text-[20px] lg:text-[28px] font-bold">
                  HỆ THỐNG HỌC TẬP
                </h3>
                <ul className="pl-0 space-y-2">
                  <li>
                    <i className="fas fa-check pr-2"></i>Tự động chấm điểm trắc
                    nghiệm và đưa câu hỏi tùy theo mức độ học viên
                  </li>
                  <li>
                    <i className="fas fa-check pr-2"></i>Thống kê lượt xem
                    video, làm bài, điểm số theo chu kỳ
                  </li>
                  <li>
                    <i className="fas fa-check pr-2"></i>Thống kê, so sánh khả
                    năng học của các học viên cùng level để đưa ra mục tiêu học
                    tập
                  </li>
                </ul>
              </div>
            </Col>
            <Col
              span={24}
              className="flex-1 relative group overflow-hidden"
              style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
              }}
            >
              <div
                className="infoItem p-4 text-start text-white h-full relative"
                style={{ backgroundColor: "#63c0a8" }}
              >
                {/* Vệt sáng */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                <h3 className="text-[20px] lg:text-[28px] font-bold">
                  CHỨNG NHẬN
                </h3>
                <ul className="pl-0 space-y-2">
                  <li>
                    <i className="fas fa-check pr-2"></i>Chấm bài và có thể vấn
                    đáp trực tuyến để review
                  </li>
                  <li>
                    <i className="fas fa-check pr-2"></i>Hệ thống của chúng tôi
                    cũng tạo ra cho bạn một CV trực tuyến độc đáo
                  </li>
                  <li>
                    <i className="fas fa-check pr-2"></i>Kết nối CV của bạn đến
                    với các đối tác của V learning
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
