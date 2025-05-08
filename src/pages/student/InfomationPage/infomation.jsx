import React from "react";
import "animate.css/animate.min.css"; // Import thư viện animate.css
import styles from "./infomation.module.scss";

export default function Infomation() {
  return (
    <section className={styles.About}>
      <div className={styles.sliderAbout}>
        <div className={styles.sliderContentAbout}>
          <p className={styles.titleContentAbout}>V learning học là vui</p>
          <h6>Cùng nhau khám phá những điều mới mẻ</h6>
          <p>Học đi đôi với hành</p>
        </div>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutContentLeft}>
          <h6>V Learning?</h6>
          <h5>Nơi hội tụ kiến thức</h5>
          <p>
            Đây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để hỗ
            trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được xây
            dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của một
            lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ toàn
            diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một lớp học
            trực tuyến thú vị và hấp dẫn.
          </p>
        </div>

        <div className={styles.aboutContentRight}>
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/hero-flex.553afb64.png"
            alt=""
            className="animate__animated animate__fadeInRight"
          />
        </div>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutLeft}>
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/education-hero.62147e5c.png"
            alt=""
            className="animate__animated animate__fadeInLeft"
          />
        </div>

        <div className={styles.aboutRight}>
          <h6>Chương trình học V learning</h6>
          <h5>Hệ thống học hàng đầu</h5>
          <p>
            Giảng viên đều là các chuyên viên thiết kế đồ họa và giảng viên của
            các trường đại học danh tiếng trong thành phố: Đại học CNTT, KHTN,
            Bách Khoa,… Trang thiết bị phục vụ học tập đầy đủ, phòng học máy
            lạnh, màn hình LCD, máy cấu hình mạnh, mỗi học viên thực hành trên
            một máy riêng. 100% các buổi học đều là thực hành trên máy tính.
          </p>
        </div>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutContentLeft}>
          <h6>Tầm nhìn V learning</h6>
          <h5>Đào tạo lập trình chuyên sâu</h5>
          <p>
            Trở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu
            khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu cho sự
            phát triển công nghiệp phần mềm trong thời đại công nghệ số hiện
            nay, góp phần giúp sự phát triển của xã hội.
          </p>
        </div>

        <div className={styles.aboutContentRight}>
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/olstudy.96378086.png"
            alt=""
            className="animate__animated animate__fadeInRight"
          />
        </div>
      </div>
      <div className={styles.aboutContent}>
        <div className={styles.aboutLeft}>
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/students.fc2d9ab7.png"
            alt=""
            className="animate__animated animate__fadeInLeft"
          />
        </div>

        <div className={styles.aboutRight}>
          <h6>Sứ mệnh V learning</h6>
          <h5>Phương pháp đào tạo hiện đại</h5>
          <p>
            Sử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền tảng
            công nghệ giáo dục, kết hợp phương pháp truyền thống, phương pháp
            trực tuyến, lớp học đảo ngược và học tập dựa trên dự án thực tế. Qua
            đó, V learning giúp người học phát triển cả tư duy, phân tích,
            chuyên sâu nghề nghiệp, học tập suốt đời.
          </p>
        </div>
      </div>
    </section>
  );
}
