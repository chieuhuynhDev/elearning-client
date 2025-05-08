import React from "react";
import styles from "./blog.module.scss";
import images from "./image-blog";

export default function Blog() {
  return (
    <section className={styles.blog}>
      <div className={styles.titleClasses}>
        <h3>Blog </h3>
        <p>Thông tin công nghệ số!!!</p>
      </div>
      <div className={styles.blogContainer}>
        <h6>
          <a href="">
            <i className="fas fa-bullhorn"></i>
            PHÙ HỢP VỚI BẠN
          </a>
        </h6>

        <div className={`${styles.grid} grid-cols-3`}>
          <div className={styles.blogLeft}>
            <div className={styles.cardBlog}>
              <div className={styles.cardBlogContent}>
                <div className={styles.imgCardBlog}>
                  <img src={images.motivationImage} alt="Motivation" />
                </div>
                <h6>Thời gian và động lực</h6>
                <div className={styles.timeBlogCourse}>
                  <div className={styles.reviewBlog}>
                    <span>
                      <i className="far fa-thumbs-up"></i>
                      300
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      500
                    </span>
                    <span>
                      <i className="far fa-eye"></i>
                      200
                    </span>
                  </div>

                  <p>
                    Đăng bởi
                    <span>Jhony Đặng</span>
                  </p>
                </div>
                <p className={styles.colorCardTitle}>
                  Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là
                  "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch
                  thường nhật",...
                </p>

                <button className={styles.clickMore}>
                  <a href="">Xem thêm</a>
                </button>
              </div>
            </div>
            <div className={styles.cardBlog}>
              <div className={styles.cardBlogContent}>
                <div className={styles.imgCardBlog}>
                  <img src={images.htmlImage} alt="" />
                </div>
                <h6>Cấu trúc cơ bản trong HTML</h6>
                <div className={styles.timeBlogCourse}>
                  <div className={styles.reviewBlog}>
                    <span>
                      <i className="far fa-thumbs-up"></i>
                      300
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      500
                    </span>
                    <span>
                      <i className="far fa-eye"></i>
                      200
                    </span>
                  </div>

                  <p>
                    Đăng bởi
                    <span>Jhony Đặng</span>
                  </p>
                </div>
                <p className={styles.colorCardTitle}>
                  Custom theme Material UI với TypeScript đơn giản, hiệu quả...
                </p>

                <button className={styles.clickMore}>
                  <a href="">Xem thêm</a>
                </button>
              </div>
            </div>
            <div className={styles.cardBlog}>
              <div className={styles.cardBlogContent}>
                <div className={styles.imgCardBlog}>
                  <img src={images.reactjsImage} alt="" />
                </div>
                <h6>Cách tạo một component nhanh chóng chỉ bằng 3 ký tự</h6>
                <div className={styles.timeBlogCourse}>
                  <div className={styles.reviewBlog}>
                    <span>
                      <i className="far fa-thumbs-up"></i>
                      300
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      500
                    </span>
                    <span>
                      <i className="far fa-eye"></i>
                      200
                    </span>
                  </div>

                  <p>
                    Đăng bởi
                    <span>Jhony Đặng</span>
                  </p>
                </div>
                <p className={styles.colorCardTitle}>
                  Tạo một component nhiều lúc cũng khá mất nhiều thời gian nên
                  mình xin giới thiệu extention này cho mọi người nhé...
                </p>

                <button className={styles.clickMore}>
                  <a href="">Xem thêm</a>
                </button>
              </div>
            </div>
            <div className={styles.cardBlog}>
              <div className={styles.cardBlogContent}>
                <div className={styles.imgCardBlog}>
                  <img src={images.asyncImage} alt="" />
                </div>
                <h6>Xử lý bất đồng bộ trong Javascript (phần 2)</h6>
                <div className={styles.timeBlogCourse}>
                  <div className={styles.reviewBlog}>
                    <span>
                      <i className="far fa-thumbs-up"></i>
                      300
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      500
                    </span>
                    <span>
                      <i className="far fa-eye"></i>
                      200
                    </span>
                  </div>

                  <p>
                    Đăng bởi
                    <span>Jhony Đặng</span>
                  </p>
                </div>
                <p className={styles.colorCardTitle}>
                  Async/await là cơ chế giúp bạn thực thi các thao tác bất đồng
                  bộ một cách tuần tự hơn , giúp đoạn code nhìn qua tưởng như
                  đồng...
                </p>

                <button className={styles.clickMore}>
                  <a href="">Xem thêm</a>
                </button>
              </div>
            </div>
          </div>

          <div className="blogCenter">
            <div className={styles.cardBlog}>
              <div className={styles.cardBlogContent}>
                <div className={styles.imgCardBlog}>
                  <img src={images.taiwildImage} alt="" />
                </div>
                <h6>Tailwind css và cách cài đặt cơ bản</h6>
                <div className={styles.timeBlogCourse}>
                  <div className={styles.reviewBlog}>
                    <span>
                      <i className="far fa-thumbs-up"></i>
                      300
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      500
                    </span>
                    <span>
                      <i className="far fa-eye"></i>
                      200
                    </span>
                  </div>

                  <p>
                    Đăng bởi
                    <span>Jhony Đặng</span>
                  </p>
                </div>
                <p className={styles.colorCardTitle}>
                  Có lẽ cũng rất lâu rồi mà tôi chưa đụng đến thứ được gọi là
                  "timetable". Hay dân dã hơn thì người ta hay gọi là "Lịch
                  thường nhật",...
                </p>

                <button className={styles.clickMore}>
                  <a href="">Xem thêm</a>
                </button>
              </div>
            </div>
            <div className={styles.cardBlog}>
              <div className={styles.cardBlogContent}>
                <div className={styles.imgCardBlog}>
                  <img src={images.materialImage} alt="" />
                </div>
                <h6>Material UI custom theme với TypeScript</h6>
                <div className={styles.timeBlogCourse}>
                  <div className={styles.reviewBlog}>
                    <span>
                      <i className="far fa-thumbs-up"></i>
                      300
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      500
                    </span>
                    <span>
                      <i className="far fa-eye"></i>
                      200
                    </span>
                  </div>

                  <p>
                    Đăng bởi
                    <span>Jhony Đặng</span>
                  </p>
                </div>
                <p className={styles.colorCardTitle}>
                  Trắc hẳn ai cũng biết một trang web thì không thể nào thiếu đi
                  HTML và HTML làm nên cấu trúc của một trang web...
                </p>

                <button className={styles.clickMore}>
                  <a href="">Xem thêm</a>
                </button>
              </div>
            </div>
            <div className={styles.cardBlog}>
              <div className={styles.cardBlogContent}>
                <div className={styles.imgCardBlog}>
                  <img src={images.materialImage} alt="" />
                </div>
                <h6>Material UI custom theme với TypeScript</h6>
                <div className={styles.timeBlogCourse}>
                  <div className={styles.reviewBlog}>
                    <span>
                      <i className="far fa-thumbs-up"></i>
                      300
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      500
                    </span>
                    <span>
                      <i className="far fa-eye"></i>
                      200
                    </span>
                  </div>

                  <p>
                    Đăng bởi
                    <span>Jhony Đặng</span>
                  </p>
                </div>
                <p className={styles.colorCardTitle}>
                  Như các bạn đã biết chúng ta sẽ sử dụng target="_blank" cho
                  thẻ a để khi người dùng click vô sẽ mở liên kết trên một tab
                  mới...
                </p>

                <button className={styles.clickMore}>
                  <a href="">Xem thêm</a>
                </button>
              </div>
            </div>
            <div className={styles.cardBlog}>
              <div className={styles.cardBlogContent}>
                <div className={styles.imgCardBlog}>
                  <img src={images.typescriptImage} alt="" />
                </div>
                <h6>TyperScrip là gì, Vì sao nên dùng TyperScript</h6>
                <div className={styles.timeBlogCourse}>
                  <div className={styles.reviewBlog}>
                    <span>
                      <i className="far fa-thumbs-up"></i>
                      300
                    </span>
                    <span>
                      <i className="far fa-comment"></i>
                      500
                    </span>
                    <span>
                      <i className="far fa-eye"></i>
                      200
                    </span>
                  </div>

                  <p>
                    Đăng bởi
                    <span>Jhony Đặng</span>
                  </p>
                </div>
                <p className={styles.colorCardTitle}>
                  Link khóa học cho anh em nào tò mò ( Đừng lo vì tất cả đều
                  miễn......
                </p>

                <button className={styles.clickMore}>
                  <a href="">Xem thêm</a>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.blogRight}>
            <div className={styles.blogBox}>
              <h6 className={styles.popularity}>Các chủ đề được đề xuất</h6>
              <ul>
                <li>
                  <a href="">Front end / Mobile apps</a>
                </li>
                <li>
                  <a href="">UI / UX / Design</a>
                </li>
                <li>
                  <a href="">BACK-END</a>
                </li>
                <li>
                  <a href="">Thư viện</a>
                </li>
                <li>
                  <a href="">Chia sẻ người trong nghề</a>
                </li>
                <li>
                  <a href="">Châm ngôn IT</a>
                </li>
                <li>
                  <a href="">Chủ đề khác</a>
                </li>
              </ul>
            </div>
            <div className={styles.blogBox}>
              <h6 className={styles.popularity}>Bài đăng được đề xuất</h6>
              <div className={styles.postBlog}>
                <img src={images.reactRouterImage} alt="" />
                <h6>Routing trong reactjs</h6>
                <p className={styles.colorCardTitle}>
                  Chúng ta sẽ cùng nhau tìm hiểu cách routing trong reactjs...
                </p>
                <div className={styles.imgPost}>
                  <img
                    src="	https://demo2.cybersoft.edu.vn/static/media/instrutor13.0159beae.jpg"
                    alt=""
                  />
                  <span className={styles.colorCardTitle}>Nguyên Văn</span>
                </div>
              </div>
              <div className={styles.postBlog}>
                <img src={images.oopImage} alt="" />
                <h6>Lập trình hướng đối tượng oop</h6>
                <p className={styles.colorCardTitle}>
                  Chúng ta sẽ cùng nhau tìm hiểu cách oop trong reactjs...
                </p>
                <div className={styles.imgPost}>
                  <img
                    src="	https://demo2.cybersoft.edu.vn/static/media/instrutor12.90a80820.jpg"
                    alt=""
                  />
                  <span className={styles.colorCardTitle}>Nguyên Văn Vũ</span>
                </div>
              </div>
              <div className={styles.postBlog}>
                <img src={images.asyncImage} alt="" />
                <h6>Xử Lý Bất Đồng Bộ Trong Javascript</h6>
                <p className={styles.colorCardTitle}>
                  Chắc chắn khi lập trình, bạn sẽ có các công việc cần thời gian
                  delay (gọi API, lấy dữ liệu từ Database, đọc/ghi file,...). Và
                  đây...
                </p>
                <div className={styles.imgPost}>
                  <img
                    src="https://demo2.cybersoft.edu.vn/static/media/instrutor11.0387fe65.jpg"
                    alt=""
                  />
                  <span className={styles.colorCardTitle}>Nguyên Minh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
