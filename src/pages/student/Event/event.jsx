import React, { useEffect, useRef, useState } from "react";
import event from "../../../asset/images/event.jpg";
import styles from "./event.mudule.scss";
import avatar from "./images-event";

export default function Event() {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Jan 29, 2025 00:00:00").getTime(); // Thời gian đích

    interval.current = setInterval(() => {
      const now = new Date().getTime(); // Lấy thời gian hiện tại
      const distance = countdownDate - now; // Khoảng cách từ hiện tại đến thời gian đích

      if (distance < 0) {
        clearInterval(interval.current); // Dừng interval nếu đã hết thời gian
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimerDays(days.toString().padStart(2, "0"));
        setTimerHours(hours.toString().padStart(2, "0"));
        setTimerMinutes(minutes.toString().padStart(2, "0"));
        setTimerSeconds(seconds.toString().padStart(2, "0"));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current); // Cleanup interval khi component unmount
    };
  }, []);
  const profiles = [
    {
      name: "NGUYỄN NHẬT",
      title: "CEO TECHVIET PRODUCTION",
      image: avatar.avt1,
      bgColor: "bg-blue-500",
    },
    {
      name: "NGUYỄN NHẬT NAM",
      title: "CEO TECHVIET PRODUCTION",
      image: avatar.avt2,
      bgColor: "bg-gray-200",
    },
    {
      name: "NGUYỄN NAM",
      title: "CEO TECHVIET PRODUCTION",
      image: avatar.avt3,
      bgColor: "bg-green-500",
    },
    {
      name: "JHONNY ĐẶNG",
      title: "CEO TECHVIET PRODUCTION",
      image: avatar.avt4,
      bgColor: "bg-blue-300",
    },
    {
      name: "NGÔ HENRY",
      title: "CEO TECHVIET PRODUCTION",
      image: avatar.avt5,
      bgColor: "bg-blue-200",
    },
    {
      name: "VƯƠNG PHAM VN",
      title: "CEO TECHVIET PRODUCTION",
      image: avatar.avt6,
      bgColor: "bg-blue-100",
    },
    {
      name: "ROBER IMACU",
      title: "CEO TECHVIET PRODUCTION",
      image: avatar.avt7,
      bgColor: "bg-purple-300",
    },
    {
      name: "KHOA PUG",
      title: "CEO TECHVIET PRODUCTION",
      image: avatar.avt8,
      bgColor: "bg-blue-200",
    },
  ];

  const sponsors = [
    {
      name: "FACEBOOK",
      image: avatar.meta,
      alt: "Meta logo with a background of planets and people looking at them",
    },
    {
      name: "MICROSOFT",
      image: avatar.micro,
      alt: "Microsoft logo with a black background and geometric shapes",
    },
    {
      name: "GOOGLE",
      image: avatar.google,
      alt: "Google logo with colorful letters",
    },
    {
      name: "AMAZON",
      image: avatar.amazon,
      alt: "Amazon logo with a yellow background",
    },
  ];

  return (
    <div>
      <header
        className={`${styles.header} bg-cover bg-center`}
        style={{ backgroundImage: `url(${event})` }}
      >
        <div className="bg-black bg-opacity-50 w-full h-full flex items-center">
          <div className="container mx-auto text-center text-white px-4">
            <div className="flex justify-center space-x-4 text-4xl font-bold">
              <div className="text-yellow-500 text-4xl md:text-3xl sm:text-2xl">
                {timerDays}
              </div>
              <div className="text-orange-500 text-4xl md:text-3xl sm:text-2xl">
                {timerHours}
              </div>
              <div className="text-pink-500 text-4xl md:text-3xl sm:text-2xl">
                {timerMinutes}
              </div>
              <div className="text-purple-500 text-4xl md:text-3xl sm:text-2xl">
                {timerSeconds}
              </div>
            </div>
            <div className="flex justify-center space-x-4 text-lg mt-2">
              <div className="text-base md:text-sm sm:text-xs">NGÀY</div>
              <div className="text-base md:text-sm sm:text-xs">GIỜ</div>
              <div className="text-base md:text-sm sm:text-xs">PHÚT</div>
              <div className="text-base md:text-sm sm:text-xs">GIÂY</div>
            </div>
            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold mt-4">
              SỰ KIỆN CÔNG NGHỆ LỚN NHẤT 2025
            </h1>
            <p className="text-lg md:text-base sm:text-sm mt-2">
              29 THÁNG 1, 2025, VIỆT NAM
            </p>
          </div>
        </div>
      </header>
      <section className="bg-white py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              src={avatar.cntt}
              alt="Illustration of a person working with technology"
              className="mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
            <h2 className="text-2xl font-bold text-pink-700">
              SỰ KIỆN CÔNG NGHỆ DÀNH CHO STARTUP
            </h2>
            <p className="text-lg mt-4">Nơi gặp gỡ của những tư tưởng lớn</p>
            <p className="mt-4">
              Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt Nam
              tập trung vào cả bốn mảng tiêu biểu của công nghệ tiên phong, bao
              gồm Artificial Intelligence (trí tuệ nhân tạo), Internet of Things
              (Internet vạn vật), Blockchain (Chuỗi khối) và Augmented
              reality/Virtual Reality (Thực tế tăng cường/Thực tế ảo)
            </p>
            <div className="mt-6">
              <button className="bg-green-500 text-white px-6 py-2 rounded-full mr-4">
                THAM GIA
              </button>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-full">
                TÌM HIỂU THÊM
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto py-8">
        <h1 className="text-center text-yellow-400 text-2xl font-bold mb-8">
          CÁC NHÀ ĐỒNG SÁNG TẠO
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className={`p-4 ${profile.bgColor} rounded-lg relative`}
            >
              <img
                src={profile.image}
                alt={`Avatar of ${profile.name}`}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4 text-white">
                <h2 className="text-lg font-bold">{profile.name}</h2>
                <p className="text-sm">{profile.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h1 className="text-yellow-500 text-xl font-bold mb-4">
          NHÀ TÀI TRỢ CHƯƠNG TRÌNH
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={sponsor.image}
                alt={sponsor.alt}
                className="rounded-lg w-80 h-40 object-cover"
              />
              <p className="text-black mt-2">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
