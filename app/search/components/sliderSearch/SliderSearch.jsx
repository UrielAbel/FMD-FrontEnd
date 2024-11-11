"use client";

import Styles from "./SliderSearch.module.css";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";

import { Pagination, Navigation } from "swiper";
import SearchPostCard from "../searchPostCard/SearchPostCard";

const SliderSearch = ({ contenido, label }) => {
  return (
    <div className={Styles.blockResult}>
      <h2 className={Styles.labelResult}>{label}</h2>
      <div className={Styles.SliderCont}>
        <Swiper
          slidesPerView={3}
          spaceBetween={16}
          modules={[Pagination, Navigation]}
          navigation
          breakpoints={{
            50: { slidesPerView: 1 },
            550: { slidesPerView: 2 },
            1100: { slidesPerView: 3 },
            1500: { slidesPerView: 4 },
          }}
        >
          {contenido.map((p, i) => (
            <SwiperSlide>
              <SearchPostCard key={i} post={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderSearch;
