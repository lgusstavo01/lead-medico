import styles from "./Carousel.module.css";

import { IoStarSharp } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";

import "./style.css";

import "swiper/css/bundle";

import { EffectCube, Pagination, Autoplay } from "swiper/modules";

export function Carousel() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h2>Conheça um pouco dos nossos trabalhos!</h2>
      </div>
      <div>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              500: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="./slide3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./slide3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./slide3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./slide3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./slide3.png" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="./slide3.png" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
