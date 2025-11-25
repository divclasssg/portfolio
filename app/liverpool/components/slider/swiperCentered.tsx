"use client";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Styles from "./swiperCentered.module.scss";

import CardOverlay from "../cards/overlay/cardOverlay";
import { useRef } from "react";

const FEATURED = [
    {
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/featured_example_images/featured%20example%20images%2001.jpg?raw=true",
        category: "Match report",
        title: "Beata Olsson scores as Liverpool battle to Chelsea draw in WSL",
        date: "18 hours ago",
    },
    {
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/featured_example_images/featured%20example%20images%2002.jpg?raw=true",
        category: "Round-up",
        title: "Internationals: Konate captains France, Szoboszlai and Kerkez suffer late defeat",
        date: "13 hours ago",
    },
    {
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/featured_example_images/featured%20example%20images%2003.jpg?raw=true",
        category: "News",
        title: "Mohamed Salah to be rested for Egypt friendly",
        date: "18 hours ago",
    },
    {
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/featured_example_images/featured%20example%20images%2004.jpg?raw=true",
        category: "News",
        title: "Mohamed Salah on final shortlist for CAF Player of the Year",
        date: "12 hours ago",
    },
    {
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/featured_example_images/featured%20example%20images%2005.jpg?raw=true",
        category: "Round-up",
        title: "Media Watch: Read the latest LFC transfer rumours",
        date: "15th November 2025",
    },
];

export default function SwiperCentered({ section }: { section: string }) {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);
    const paginationRef = useRef<HTMLDivElement>(null);

    return (
        <div className={Styles.container}>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                centeredSlides={true}
                modules={[Pagination, Navigation]}
                pagination={{
                    el: paginationRef.current,
                    clickable: true,
                }}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onBeforeInit={(swiper) => {
                    // @ts-ignore (타입스크립트 사용 시 swiper.params.navigation 타입 문제 회피용)
                    swiper.params.navigation.prevEl = prevRef.current;
                    // @ts-ignore
                    swiper.params.navigation.nextEl = nextRef.current;
                    // @ts-ignore
                    swiper.params.pagination.el = paginationRef.current;
                }}
            >
                {section === "featured"
                    ? FEATURED.map((item, index) => (
                          <SwiperSlide key={index}>
                              <CardOverlay section="featured" item={item} />
                          </SwiperSlide>
                      ))
                    : null}
            </Swiper>
            <div className={Styles.indicatorContainer}>
                <div className={Styles.controller}>
                    <div ref={paginationRef}></div>
                    <div>
                        <button ref={prevRef}>prev</button>
                        <button ref={nextRef}>next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
