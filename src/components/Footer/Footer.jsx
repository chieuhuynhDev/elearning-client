import { RightOutlined } from "@ant-design/icons";
import { Button, Col, message, Row } from "antd";
import React from "react";

export default function Footer() {
  return (
    <div className="py-3 px-4 bg-[#f0f8ff]">
      <div className="FooterTop py-3 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Footer 1 */}
          <div className="Footer1 space-y-6">
            <div>
              <a
                href="#"
                className="block no-underline font-bold hover:scale-110 transition-transform duration-500"
                style={{
                  fontSize: "20px",
                  color: "black",
                  textShadow: "3px -3px 4px #54d2c0",
                  position: "relative",
                }}
              >
                <span
                  className="mr-1 font-bold"
                  style={{
                    fontSize: "50px",
                    color: "#41b294",
                    textShadow: "4px -3px 4px #54d2c0",
                  }}
                >
                  V
                </span>
                learning
                <i
                  className="fa fa-keyboard absolute"
                  style={{
                    fontSize: "25px",
                    left: "85px",
                    top: "17px",
                  }}
                ></i>
              </a>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center hover:text-[#41b294] hover:-translate-y-1 transition-transform duration-500">
                <i className="fa fa-phone w-10 h-10 bg-[#41b294] text-white rounded-full flex justify-center items-center text-sm mr-3"></i>
                <span className="font-bold text-lg">1800-123-4567</span>
              </li>
              <li className="flex items-center hover:text-[#41b294] hover:-translate-y-1 transition-transform duration-500">
                <i className="fa fa-envelope-open-text w-10 h-10 bg-[#41b294] text-white rounded-full flex justify-center items-center text-sm mr-3"></i>
                <span className="font-bold text-lg">
                  NhanftChieuHocDev@gmail.com
                </span>
              </li>
              <li className="flex items-center hover:text-[#41b294] hover:-translate-y-1 transition-transform duration-500">
                <i className="fa fa-map-marker-alt w-10 h-10 bg-[#41b294] text-white rounded-full flex justify-center items-center text-sm mr-3"></i>
                <span className="font-bold text-lg">
                  Sài Gòn - Chợ Lớn - Thủ Đức
                </span>
              </li>
            </ul>
          </div>

          {/* Footer 2 */}
          <div className="Footer2 grid grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-xl mb-4">Liên kết</h3>
              <ul className="list-none p-0 m-0 space-y-2">
                <li className="pl-0 hover:text-[#41b294] hover:-translate-y-1 transition-transform duration-500">
                  <RightOutlined className="mr-2 text-sm" /> Trang chủ
                </li>
                <li className="pl-0 hover:text-[#41b294] hover:-translate-y-1 transition-transform duration-500">
                  <RightOutlined className="mr-2 text-sm" /> Dịch vụ
                </li>
                <li className="pl-0 hover:text-[#41b294] hover:-translate-y-1 transition-transform duration-500">
                  <RightOutlined className="mr-2 text-sm" /> Nhóm
                </li>
                <li className="pl-0 hover:text-[#41b294] hover:-translate-y-1 transition-transform duration-500">
                  <RightOutlined className="mr-2 text-sm" /> Blog
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-xl mb-4">Khóa học</h3>
              <ul className="list-none p-0 m-0 space-y-2">
                <li className="hover:text-[#41b294] hover:-translate-y-1 transition-transform duration-500">
                  <RightOutlined className="mr-2 text-sm" /> Front End
                </li>
                <li className="hover:text-[#41b294] hover:-translate-y-1 transition-transform duration-500">
                  <RightOutlined className="mr-2 text-sm" /> Back End
                </li>
                <li className="hover:text-[#41b294] hover:-translate-y-1 transition-transform duration-500">
                  <RightOutlined className="mr-2 text-sm" /> Full Stack
                </li>
                <li className="hover:text-[#41b294] hover:-translate-y-1 transition-transform duration-500">
                  <RightOutlined className="mr-2 text-sm" /> Node Js
                </li>
              </ul>
            </div>
          </div>

          {/* Footer 3 */}
          <div className="Footer3">
            <h2 className="font-bold text-xl mb-4">Đăng ký tư vấn</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Họ và tên"
                className="w-full p-2 border-2 border-[#41b294] transition-transform duration-500 focus:-translate-x-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41b294] transition-all"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border-2 border-[#41b294] transition-transform duration-500 focus:-translate-x-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41b294] transition-all"
              />
              <input
                type="tel"
                placeholder="Số điện thoại"
                className="w-full p-2 border-2 border-[#41b294] transition-transform duration-500 focus:-translate-x-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#41b294] transition-all"
              />
              <button
                type="button"
                className="w-52 bg-[#f6ba35] text-white font-bold py-2 rounded-md hover:bg-[#d09f2e] transition-all"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="FooterBot px-4 py-2 border-t border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="text-center md:text-left text-sm text-gray-600">
            Copyright © 2021. All rights reserved.
          </div>
          <div className=" justify-center md:justify-end space-x-4">
            <div className="flex justify-center space-x-3">
              <i className="fab fa-instagram w-10 h-10 bg-[#41b294] text-white flex justify-center items-center rounded-full"></i>
              <i className="fab fa-facebook-f w-10 h-10 bg-[#41b294] text-white flex justify-center items-center rounded-full"></i>
              <i className="fab fa-twitter w-10 h-10 bg-[#41b294] text-white flex justify-center items-center rounded-full"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
