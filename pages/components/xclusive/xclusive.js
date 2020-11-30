import React from "react";
import data from "../../api/xclusive/xclusive.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { EffectFlip, Autoplay } from "swiper";
import styles from "./xclusive.module.scss";
import Link from "next/link";

SwiperCore.use([EffectFlip, Autoplay]);

function Xclusive() {
  console.log(data, "my data");
  return (
    <div className={styles.main}>
      <div className={styles.main__title}>
        <h1> Xclusive proyect by:</h1>
        <span> Model Network Developers!</span>
      </div>
      <div className={styles.main__slider}>
        {" "}
        <Swiper
          effect="flip"
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((data) => (
            <SwiperSlide>
              <div className={styles.main__slider_photo}>
                <img src={data.img} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.main__tools}>
        <h1>Tools:</h1>
        <ul>
          <li>
            <Link href="/react.org">
              <a>React js</a>
            </Link>
          </li>
          <li>
            <Link href="/react.org">
              <a>Next js</a>
            </Link>
          </li>
          <li>
            <Link href="/react.org">
              <a>Swiper js</a>
            </Link>
          </li>
          <li>
            <Link href="/react.org">
              <a>React popup </a>
            </Link>
          </li>
          <li>
            <Link href="/react.org">
              <a>SWR</a>
            </Link>
          </li>
          <li>
            <Link href="/react.org">
              <a>Formik</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Xclusive;
