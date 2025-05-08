import React, { useEffect, useState } from "react";
import { Layout, Menu, Dropdown, Space, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoryCourses } from "../../redux/courseSlice";
import { useMediaQuery } from "react-responsive";

export default function NavBar() {
  const { Header } = Layout;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  // Kiểm tra màn hình mobile (dưới 576px)
  const isMobile = useMediaQuery({ query: "(max-width: 610px)" });

  // Kiểm tra màn hình tablet (từ 576px đến 768px)
  const isTablet = useMediaQuery({
    query: "(min-width: 610px) and (max-width: 1262px)",
  });
  // Kiểm tra kích thước màn hình
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1265px)" });

  useEffect(() => {
    dispatch(fetchCategoryCourses());
  }, []);

  const { categories } = useSelector((state) => state.courseSlice);

  const categoryMenu = (
    <Menu className="bg-[#41b294] bg-opacity-30 space-y-3">
      {categories.map((item) => (
        <Menu.Item key={item.maDanhMuc || item.tenDanhMuc}>
          <NavLink
            to={`/danhmuckhoahoc/${item.maDanhMuc}`}
            className="font-bold text-black hover:text-white duration-300 transition-all no-underline uppercase"
          >
            {item.tenDanhMuc}
          </NavLink>
        </Menu.Item>
      ))}
    </Menu>
  );

  const eventMenu = (
    <Menu className="bg-[#41b294] bg-opacity-30 space-y-3">
      <Menu.Item key="1">
        <a
          className="font-bold text-black hover:text-white duration-300 transition-all no-underline"
          href="/*"
        >
          SỰ KIỆN SALE CUỐI NĂM
        </a>
      </Menu.Item>
      <Menu.Item key="2">
        <a
          className="font-bold text-black hover:text-white duration-300 transition-all no-underline"
          href="/*"
        >
          SỰ KIỆN GIÁNG SINH
        </a>
      </Menu.Item>
      <Menu.Item key="3">
        <a
          className="font-bold text-black hover:text-white duration-300 transition-all no-underline"
          href="/iloveyou"
        >
          SỰ KIỆN TÌNH YÊU
        </a>
      </Menu.Item>
    </Menu>
  );

  const menuContent = (
    <Menu
      theme="light"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
      className="min-w-[520px]"
      style={{
        border: "none",
        whiteSpace: "nowrap",
        lineHeight: "64px",
      }}
    >
      <Menu.Item
        key="1"
        className="text-black font-bold hover:text-[#41b294] no-before-after"
      >
        <Dropdown overlay={categoryMenu} trigger={["hover"]}>
          <Space>
            <MenuOutlined /> DANH MỤC
          </Space>
        </Dropdown>
      </Menu.Item>
      <Menu.Item
        key="2"
        className="text-black font-bold hover:text-[#41b294] no-before-after"
        onClick={() => {
          navigate("/khoahoc");
        }}
      >
        KHÓA HỌC
      </Menu.Item>
      <Menu.Item
        key="3"
        className="text-black font-bold hover:text-[#41b294] no-before-after"
        onClick={() => {
          navigate("/blog");
        }}
      >
        BLOG
      </Menu.Item>
      <Menu.Item
        key="4"
        className="text-black font-bold hover:text-[#41b294] no-before-after"
        onClick={() => {
          navigate("/sukien");
        }}
      >
        <Dropdown overlay={eventMenu} trigger={["hover"]}>
          <Space>SỰ KIỆN</Space>
        </Dropdown>
      </Menu.Item>
      <Menu.Item
        key="5"
        className="text-black font-bold hover:text-[#41b294] no-before-after"
        onClick={() => {
          navigate("/thongtin");
        }}
      >
        THÔNG TIN
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className="bg-transparent px-0 w-full">
        {isTabletOrMobile ? (
          // Nút menu cho mobile và tablet
          <>
            <Button
              type="primary"
              icon={<MenuOutlined />}
              onClick={() => setIsDrawerVisible(true)}
              style={{
                backgroundColor: "#f6ba35",
                border: "none",
                position: isMobile ? "fixed" : "absolute", // Mobile và Tablet đều cố định
                right: isMobile ? "5px" : "5px", // Giữ khoảng cách cho cả mobile và tablet
                top: isMobile ? "16px" : "15px", // Giữ khoảng cách cho cả mobile và tablet
                zIndex: 10,
              }}
            />
            <Drawer
              title="Menu"
              placement="left"
              onClose={() => setIsDrawerVisible(false)}
              visible={isDrawerVisible}
              width={300} // Đặt chiều rộng cụ thể cho Drawer
              bodyStyle={{
                padding: "0",
                display: "flex",
                flexDirection: "column",
              }} // Bố trí nội dung
              mask={false} // Không che phủ phần còn lại của giao diện
            >
              <Menu
                mode="vertical"
                style={{
                  border: "none",
                  padding: "16px", // Thêm padding để menu không dính sát cạnh
                }}
              >
                <Menu.SubMenu
                  key="1"
                  title="DANH MỤC"
                  className="text-black font-bold hover:text-[#41b294]"
                >
                  {categories.map((item) => (
                    <Menu.Item key={item.maDanhMuc || item.tenDanhMuc}>
                      <NavLink
                        to={`/danhmuckhoahoc/${item.maDanhMuc}`}
                        className="font-bold text-black hover:text-[#41b294] duration-300 transition-all no-underline uppercase"
                        onClick={() => {
                          setIsDrawerVisible(false);
                        }}
                      >
                        {item.tenDanhMuc}
                      </NavLink>
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>

                <Menu.Item
                  key="2"
                  className="text-black font-bold hover:text-[#41b294] no-before-after"
                  onClick={() => {
                    navigate("/khoahoc");
                    setIsDrawerVisible(false);
                  }}
                >
                  KHÓA HỌC
                </Menu.Item>
                <Menu.Item
                  key="3"
                  className="text-black font-bold hover:text-[#41b294] no-before-after"
                  onClick={() => {
                    navigate("/blog");
                    setIsDrawerVisible(false);
                  }}
                >
                  BLOG
                </Menu.Item>
                <Menu.SubMenu
                  key="2"
                  title="SỰ KIỆN"
                  className="text-black font-bold hover:text-[#41b294]"
                  onClick={() => {
                    navigate("/sukien");
                  }}
                >
                  <Menu.Item key="event1">
                    <NavLink
                      to="/*"
                      className="font-bold text-black hover:text-[#41b294] duration-300 transition-all no-underline"
                      onClick={() => {
                        setIsDrawerVisible(false);
                      }}
                    >
                      SỰ KIỆN SALE CUỐI NĂM
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="event2">
                    <NavLink
                      to="/*"
                      className="font-bold text-black hover:text-[#41b294] duration-300 transition-all no-underline"
                      onClick={() => {
                        setIsDrawerVisible(false);
                      }}
                    >
                      SỰ KIỆN GIÁNG SINH
                    </NavLink>
                  </Menu.Item>
                  <Menu.Item key="event3">
                    <NavLink
                      to="/iloveyou"
                      className="font-bold text-black hover:text-[#41b294] duration-300 transition-all no-underline"
                      onClick={() => {
                        setIsDrawerVisible(false);
                      }}
                    >
                      SỰ KIỆN TÌNH YÊU
                    </NavLink>
                  </Menu.Item>
                </Menu.SubMenu>
                <Menu.Item
                  key="4"
                  className="text-black font-bold hover:text-[#41b294] no-before-after"
                  onClick={() => {
                    navigate("/thongtin");
                    setIsDrawerVisible(false);
                  }}
                >
                  THÔNG TIN
                </Menu.Item>
              </Menu>
            </Drawer>
          </>
        ) : (
          // Menu đầy đủ cho desktop
          <div className="flex items-center justify-end">{menuContent}</div>
        )}
      </Header>
    </Layout>
  );
}
