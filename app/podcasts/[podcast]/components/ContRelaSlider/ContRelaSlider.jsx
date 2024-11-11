"use client";

import Styles from './ContRelaSlider.module.css'

import Card from "@/components/card/Card";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";

import { Pagination, Navigation } from "swiper";

export default function ContRelaSlider({ contenido }) {
  return (
    <>
      <div className={Styles.contRela}>
        <h2 className={Styles.label}>Contenido Relacionado</h2>
        <div className={Styles.SliderCont}>
          <Swiper
            slidesPerView={4}
            spaceBetween={24}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              540: {
                slidesPerView: 3,
                spaceBetween: -10,
              },
              580: {
                slidesPerView: 3,
                spaceBetween: -30,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: -10,
              },
              760: {
                slidesPerView: 3,
                spaceBetween: -20,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: -60,
              },
              900: {
                slidesPerView: 4,
                spaceBetween: -10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: -120,
              },
              1144: {
                slidesPerView: 4.91,
                spaceBetween: -90,
              },
              1440: {
                slidesPerView: 4.91,
                spaceBetween: -90,
              },
              1900: {
                slidesPerView: 6,
                spaceBetween: -20,
              },

              2000: {
                slidesPerView: 7,
                spaceBetween: -20,
              },

              2500: {
                slidesPerView: 7,
                spaceBetween: -100,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {contenido?.map((pod) => (
              <SwiperSlide>
                <Card
                  imageURL={pod.imageUrl}
                  uri={`/podcasts/${pod.uri}`}
                  title={pod.title}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
