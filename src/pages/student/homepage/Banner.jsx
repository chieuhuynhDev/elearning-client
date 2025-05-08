import { Col, Row } from "antd";
import Lottie from "lottie-react";
import React from "react";
import bannerAnimate from "./asset/BannerAnimate2.json";
import bannerPlane from "./asset/AnimationBanner.json";

export default function Banner() {
  return (
    <div className="px-3">
      <Row
        className="flex flex-wrap items-center"
        gutter={[16, 16]} // Tạo khoảng cách giữa các cột
      >
        {/* Cột Trái */}
        <Col
          xs={24} // Mobile: Full width
          sm={24} // Tablet: Full width
          md={12} // Desktop: 50% chiều rộng
        >
          <div className="bannerLeft flex flex-col md:flex-row justify-center items-center h-full relative overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Lottie
                animationData={bannerPlane}
                loop={true}
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="sloganBanner text-start z-10">
              <h1 className="font-bold text-[40px] md:text-[50px] lg:text-[60px] leading-tight">
                Chào mừng
              </h1>
              <h1 className="font-bold text-[40px] md:text-[50px] lg:text-[60px] leading-tight">
                đến với môi trường
              </h1>
              <h1 className="relative overflow-hidden inline-block font-bold text-[50px] md:text-[65px] lg:text-[75px] text-[#41b294]">
                <span className="block whitespace-nowrap overflow-hidden animate-slide-in-out">
                  V
                  <span className="inline-block text-[30px] md:text-[50px]">
                    learning
                  </span>
                </span>
              </h1>
              <div className="mt-4">
                <button className="btn btn-warning text-white hover:scale-90 duration-500 transition-all">
                  BẮT ĐẦU NÀO
                </button>
              </div>
            </div>
          </div>
        </Col>

        {/* Cột Phải */}
        <Col
          xs={24} // Mobile: Full width
          sm={24} // Tablet: Full width
          md={12} // Desktop: 50% chiều rộng
        >
          <div className="bannerRight">
            <Lottie
              animationData={bannerAnimate}
              style={{ width: "100%" }}
              loop={true}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
