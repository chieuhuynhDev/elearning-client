import React, { useState } from "react";
import { Col, Row } from "antd";
import cauPhuc from "./asset/listDangVienHangDau/cauPhuc.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import animate1 from "./asset/AnimateComment1.json";
import animate2 from "./asset/AnimateComment2.json";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";

export default function Comment() {
  // Tạo state để kiểm tra khi phần tử vào view
  const [refLeft, inViewLeft] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const [refRight, inViewRight] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div className="pb-5 px-5">
      <Row
        className="relative flex flex-wrap justify-between gap-y-4 gap-x-1"
        gutter={[16, 16]} // Tạo khoảng cách responsive giữa các Col
      >
        {/* Cột Trái */}
        <Col
          ref={refLeft} // Liên kết với Intersection Observer
          xs={24} // Mobile: Full width
          sm={24} // Tablet: Full width
          md={11} // Desktop: Chiếm 1/2
          lg={11} // Desktop lớn: Chiếm 1/2
          className={`rounded-3xl py-5 px-3 relative overflow-hidden border-2 ${
            inViewLeft ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          {/* Animation layer */}
          <div className="absolute -inset-48 z-10">
            <Lottie
              animationData={animate1}
              loop={true}
              autoplay={inViewLeft} // Animation chỉ chạy khi vào view
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          {/* Image layer */}
          <div className="flex justify-center items-center relative z-20">
            <img
              className="rounded-tl-[10%] rounded-tr-[50%] rounded-bl-[50%] rounded-br-[50%]"
              src={cauPhuc}
              style={{
                width: "230px",
                height: "230px",
                objectFit: "fill",
              }}
              alt=""
            />
          </div>
        </Col>

        {/* Cột Phải */}
        <Col
          ref={refRight} // Liên kết với Intersection Observer
          xs={24} // Mobile: Full width
          sm={24} // Tablet: Full width
          md={11} // Desktop: Chiếm 1/2
          lg={11} // Desktop lớn: Chiếm 1/2
          className={`rounded-3xl py-5 px-3 relative overflow-hidden border-2 ${
            inViewRight ? "animate-slide-in-right" : "opacity-0"
          }`}
        >
          {/* Animation layer */}
          <div className="absolute -inset-48 z-10">
            <Lottie
              animationData={animate2}
              loop={true}
              autoplay={inViewRight} // Animation chỉ chạy khi vào view
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div className="relative z-20">
            <p style={{ fontSize: "17px" }}>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{ color: "#ed85ab", fontSize: "30px" }}
              />
              <span className="mx-4">
                Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập
                trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn
                được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên
                sáng lập và giảng viên dày kinh nghiệm. Thực sự rất hay và hấp
                dẫn
              </span>
              <FontAwesomeIcon
                icon={faQuoteLeft}
                style={{
                  transform: "rotate(180deg)",
                  color: "#ed85ab",
                  fontSize: "30px",
                }}
              />
            </p>

            <p
              className="font-bold mb-1"
              style={{ color: "#ed85ab", fontSize: "20px" }}
            >
              Cậu Phúc Dev
            </p>
            <p style={{ color: "#8c8c8c" }}>Học viên xuất sắc</p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
