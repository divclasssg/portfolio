"use client";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './swiperCentered.scss';

import CardOverlay from "../cards/overlay/cardOverlay";
import { useState } from "react";
import SliderButtonArrow from "../icons/sliderButtonArrow";

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
    const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
    const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <div className="swiper-centered">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={20}
                centeredSlides={true}
                modules={[Pagination, Navigation]}
                pagination={{
                    el: paginationEl,
                    clickable: true,
                }}
                navigation={{
                    prevEl,
                    nextEl,
                }}
                onInit={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
                }}
                onSlideChange={(swiper) => {
                    setIsBeginning(swiper.isBeginning);
                    setIsEnd(swiper.isEnd);
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
            <div className="indicator-container">
                <div className="controller">
                    <div ref={setPaginationEl}>
                        {section === "featured" ? FEATURED.map((_, index) => (
                            <span key={index}>{index + 1}</span>
                        )) : null}
                    </div>
                    <div className="navigation">
                        <button ref={setPrevEl}>
                            <SliderButtonArrow size="large" active={!isBeginning} direction="left" />
                        </button>
                        <button ref={setNextEl}>
                            <SliderButtonArrow size="large" active={!isEnd} direction="right" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
