import React from "react";
import { Card } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import thaySy from "./asset/listDangVienHangDau/thaySy.jpg";
import thay1 from "./asset/listDangVienHangDau/thay1.jpg";
import thay2 from "./asset/listDangVienHangDau/thay2.jpg";
import thay3 from "./asset/listDangVienHangDau/thay3.jpg";
import thay4 from "./asset/listDangVienHangDau/thay4.jpg";
import thay5 from "./asset/listDangVienHangDau/thay5.jpg";

const experts = [
  {
    img: thaySy,
    name: "Trần Quang Sĩ",
    field: "Chuyên gia đào tạo Dev",
    rating: 5,
    reviews: "999+ đánh giá",
  },
  {
    img: thay1,
    name: "Big DadMoon",
    field: "Chuyên gia lĩnh vực lập trình",
    rating: 4.9,
    reviews: "100 đánh giá",
  },
  {
    img: thay2,
    name: "Hoàng Nam",
    field: "Chuyên gia lĩnh vực PHP",
    rating: 4.9,
    reviews: "100 đánh giá",
  },
  {
    img: thay3,
    name: "IcarDi MenBor",
    field: "Chuyên gia ngôn ngữ Vue Js",
    rating: 4.9,
    reviews: "100 đánh giá",
  },
  {
    img: thay4,
    name: "Bladin Slaham",
    field: "Chuyên gia lĩnh vực Full Skill",
    rating: 4.9,
    reviews: "100 đánh giá",
  },
  {
    img: thay5,
    name: "VueLo Gadi",
    field: "Chuyên gia lĩnh vực Phân tích",
    rating: 4.9,
    reviews: "100 đánh giá",
  },
];

const MyCarousel = () => {
  const sliderSettings = {
    autoplay: true,
    slidesToShow: 5, // Desktop default
    slidesToScroll: 1,
    dots: false,
    swipeToSlide: true,
    draggable: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-5">
      <h6 className="no-underline inline-block ml-7 mb-3">
        <p
          className="font-bold"
          style={{
            color: "#000000",
          }}
        >
          Giảng Viên Hàng Đầu
        </p>
      </h6>
      <div className="carousel-container" style={{ overflow: "hidden" }}>
        <Slider {...sliderSettings}>
          {experts.map((expert, index) => (
            <div key={index} className="flex justify-center">
              <Card
                style={{
                  width: "250px",
                  height: "260px",
                  textAlign: "center",
                  boxSizing: "border-box",
                  transition: "box-shadow 0.3s ease-in-out",
                  overflow: "visible",
                  margin: "0 10px",
                }}
                hoverable
              >
                <img
                  className="rounded-full mx-auto"
                  src={expert.img}
                  style={{ width: "80px", height: "80px" }}
                  alt={expert.name}
                />
                <h6 className="font-bold mt-2">{expert.name}</h6>
                <p>{expert.field}</p>
                <p className="my-0">
                  {Array(Math.floor(expert.rating))
                    .fill()
                    .map((_, i) => (
                      <i key={i} className="fas fa-star text-[#f6ba35]"></i>
                    ))}{" "}
                  {expert.rating}
                </p>
                <p className="text-[#8c8c8c]" style={{ fontSize: "13px" }}>
                  {expert.reviews}
                </p>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MyCarousel;
