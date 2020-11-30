import data from "../../api/pictures/pictures.json";
import styles from "./home.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { EffectCube, Autoplay } from "swiper";

SwiperCore.use([EffectCube, Autoplay]);

function HomeMain() {
  return (
    <div className={styles.main}>
      <div className={styles.main__slider}>
        {" "}
        <Swiper
          effect="cube"
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

      <div className={styles.main_content}>
        <h1>Ray small description</h1>
        <p>
          My full name is Freddy Ramon Paez Plata, I was born in Bogota Colombia
          but almost three years ago me and my wife move to Medellin, I'm
          enthusiastic React app developer in love with my profession and open
          to learn every day something new!
        </p>
        <h1>Experience</h1>
        <p>
          Agathos Technology SAS: Here they give the opportunity to start work
          as a web page and web app UI developer using HTML, PHP, css and
          Jquery.
          <sapn>Feb 2019 to Mar 2020</sapn>
        </p>
        <p>
          Model Network SAS: Here we are building a social media application for
          the model business in this company, we are using Next Js with
          typescript. <sapn> Mar 2020</sapn>
        </p>
      </div>
    </div>
  );
}

export default HomeMain;
