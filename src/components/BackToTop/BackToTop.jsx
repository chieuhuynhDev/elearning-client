import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Xử lý hiển thị nút khi cuộn
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Cuộn lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt
    });
  };

  useEffect(() => {
    // Lắng nghe sự kiện cuộn
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      // Gỡ bỏ sự kiện khi component unmount
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-[#41b294] text-white px-3 py-2 rounded-lg shadow-lg cursor-pointer hover:bg-[#26735f] transition-all duration-500 flex justify-center items-center"
          style={{
            zIndex: 1000,
          }}
        >
          <span className="text-lg font-bold">↑</span>
        </div>
      )}
    </>
  );
};

export default BackToTop;
