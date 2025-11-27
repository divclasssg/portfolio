"use client";

import { useState } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.scss";

import SliderButtonArrow from "../icons/sliderButtonArrow";
import CardOverlay from "../cards/overlay/cardOverlay";
import CardStandings from "../cards/standings/standings";

interface LatestDataItem {
    id: string;
    category: string;
    title: string;
    image: string;
    date: string;
    size: "medium" | "small" | "large";
}

const LASTEST_DATA: LatestDataItem[] = [
    {
        id: "main",
        category: "Play now",
        title: "Liverpool v Nottingham Forest quiz: Can you get 8/8?",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/featured_example_images/have-seen-image-01.jpg?raw=true",
        date: "19 hours ago",
        size: "medium",
    },
    {
        id: "sub1",
        category: "News",
        title: "Liverpool U21s beat Preston in friendly at the Academy",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/featured_example_images/have-seen-image-02.jpg?raw=true",
        date: "12 hours ago",
        size: "small",
    },
    {
        id: "sub2",
        category: "News",
        title: "'A great achievement' - Virgil van Dijk sets new Netherlands captaincy record",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/featured_example_images/have-seen-image-03.jpg?raw=true",
        date: "2 days ago",
        size: "small",
    },
    {
        id: "sub3",
        category: "Concerts",
        title: "Foo Fighters at Anfield: Hospitality packages remain on sale",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/featured_example_images/have-seen-image-04.jpg?raw=true",
        date: "15th November 2025",
        size: "small",
    },
];

const STANDINGS_DATA = [
    {
        id: 1,
        standing: 1,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=4dsgumo7d4zupm2ugsvm4zm4d",
        clubname: "Arsenal",
        points: 29,
        form: [1, 1, 1, 2, 1],
    },
    {
        id: 2,
        standing: 2,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=9q0arba2kbnywth8bkxlhgmdr",
        clubname: "Chelsea",
        points: 23,
        form: [1, 3, 1, 1, 1],
    },
    {
        id: 3,
        standing: 3,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=a3nyxabgsqlnqfkeg41m6tnpp",
        clubname: "Man City",
        points: 22,
        form: [1, 3, 1, 1, 3],
    },
    {
        id: 4,
        standing: 4,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=b496gs285it6bheuikox6z9mj",
        clubname: "Aston Villa",
        points: 21,
        form: [1, 1, 2, 1, 1],
    },
    {
        id: 5,
        standing: 5,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=1c8m2ko0wxq1asfkuykurdr0y",
        clubname: "Crystal Palace",
        points: 20,
        form: [2, 3, 1, 2, 1],
    },
    {
        id: 6,
        standing: 6,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=e5p0ehyguld7egzhiedpdnc3w",
        clubname: "Brighton",
        points: 19,
        form: [1, 3, 1, 2, 1],
    },
    {
        id: 7,
        standing: 7,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=1r3545b2dzan8yqa80gtmcjch",
        clubname: "Sunderland",
        points: 19,
        form: [1, 1, 2, 2, 3],
    },
    {
        id: 8,
        standing: 8,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=1pse9ta7a45pi2w2grjim70ge",
        clubname: "Bournemouth",
        points: 19,
        form: [2, 1, 3, 3, 2],
    },
    {
        id: 9,
        standing: 9,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=22doj4sgsocqpxw45h607udje",
        clubname: "Spurs",
        points: 18,
        form: [3, 1, 3, 2, 3],
    },
    {
        id: 10,
        standing: 10,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=6eqit8ye8aomdsrrq0hk3v7gh",
        clubname: "Man Utd",
        points: 18,
        form: [1, 1, 2, 2, 3],
    },
    {
        id: 11,
        standing: 11,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=ehd2iemqmschhj2ec0vayztzz",
        clubname: "Everton",
        points: 18,
        form: [3, 3, 2, 1, 1],
    },
    {
        id: 12,
        standing: 12,
        logoImage: "",
        clubname: "Liverpool",
        points: 18,
        form: [3, 3, 1, 3, 3],
    },
    {
        id: 13,
        standing: 13,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=7yx5dqhhphyvfisohikodajhv",
        clubname: "Brentford",
        points: 16,
        form: [1, 1, 3, 1, 3],
    },
    {
        id: 14,
        standing: 14,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=7vn2i2kd35zuetw6b38gw9jsz",
        clubname: "Newcastle",
        points: 15,
        form: [3, 1, 3, 3, 1],
    },
    {
        id: 15,
        standing: 15,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=hzqh7z0mdl3v7gwete66syxp",
        clubname: "Fulham",
        points: 14,
        form: [3, 3, 1, 3, 1],
    },
    {
        id: 16,
        standing: 16,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=1qtaiy11gswx327s0vkibf70n",
        clubname: "Nottm Forest",
        points: 12,
        form: [3, 3, 2, 1, 1],
    },
    {
        id: 17,
        standing: 17,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=4txjdaqveermfryvbfrr4taf7",
        clubname: "West Ham",
        points: 11,
        form: [3, 3, 1, 1, 2],
    },
    {
        id: 18,
        standing: 18,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=48gk2hpqtsl6p9sx9kjhaydq4",
        clubname: "Leeds",
        points: 11,
        form: [3, 1, 3, 3, 3],
    },
    {
        id: 19,
        standing: 19,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=64bxxwu2mv2qqlv0monbkj1om",
        clubname: "Burnley",
        points: 10,
        form: [1, 1, 3, 3, 3],
    },
    {
        id: 20,
        standing: 20,
        logoImage:
            "https://omo.akamai.opta.net/image.php?secure=true&h=omo.akamai.opta.net&sport=football&entity=team&description=badges&dimensions=65&id=b9si1jn1lfxfund69e9ogcu2n",
        clubname: "Wolves",
        points: 2,
        form: [3, 3, 3, 3, 3],
    },
];

export default function SwiperPerViewAuto({ section }: { section: string }) {
    const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
    const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(
        null
    );

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <div className={`swiper-per-view-auto ${section}`}>
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={section === "standings" ? 8 : 20}
                // centeredSlides={true}
                initialSlide={section === "standings" ? 11 : 0}
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
                {section === "lastest"
                    ? LASTEST_DATA.map((item, index) => (
                          <SwiperSlide key={index} className={item.size}>
                              <CardOverlay size={item.size} item={item} />
                          </SwiperSlide>
                      ))
                    : null}

                {section === "standings"
                    ? STANDINGS_DATA.map((item) => (
                          <SwiperSlide key={item.id}>
                              <CardStandings item={item} />
                          </SwiperSlide>
                      ))
                    : null}
            </Swiper>
            <div className={`indicator-container ${section}`}>
                <div className="controller">
                    {section !== "standings" ? (
                        <div ref={setPaginationEl}>
                            {section === "lastest"
                                ? LASTEST_DATA.map((item, index) => {
                                      return (
                                          <span key={item.id}>{index + 1}</span>
                                      );
                                  })
                                : null}
                        </div>
                    ) : null}

                    <div className="navigation">
                        <button ref={setPrevEl}>
                            <SliderButtonArrow
                                size="large"
                                active={!isBeginning}
                                direction="left"
                            />
                        </button>
                        <button ref={setNextEl}>
                            <SliderButtonArrow
                                size="large"
                                active={!isEnd}
                                direction="right"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
