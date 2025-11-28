"use client";

import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.scss";

import CardOverlay from "../cards/overlay/cardOverlay";
import CardPlayers from "../cards/players/players";
import { useState } from "react";
import SliderButtonArrow from "../icons/sliderButtonArrow";

const FEATURED_DATA = [
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

const PLAYERS_DATA = [
    {
        id: "g1",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/card_players_images/1920-becker-player-image.png?raw=true",
        backnumber: 1,
        backnumberImage:
            "https://github.com/divclasssg/images/blob/main/bls/lfc/card_players_number_1920/card-player-number-01.png?raw=true",
        firstname: "Alisson",
        lastname: "Becker",
        position: "goalkeeper",
        stats: [
            {
                name: "Appearances",
                stat: 9,
            },
            {
                name: "Minutes Played",
                stat: 776,
            },
            {
                name: "Clean Sheets",
                stat: 2,
            },
            {
                name: "Saves Made",
                stat: 16,
            },
        ],
    },
    {
        id: "g2",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/card_players_images/1920-Giorgi%20Mamardashvili-player-image.png?raw=true",
        backnumber: 25,
        backnumberImage:
            "https://github.com/divclasssg/images/blob/main/bls/lfc/card_players_number_1920/card-player-number-25.png?raw=true",
        firstname: "Giorgi",
        lastname: "Mamardashvili",
        position: "goalkeeper",
        stats: [
            {
                name: "Appearances",
                stat: 9,
            },
            {
                name: "Minutes Played",
                stat: 754,
            },
            {
                name: "Clean Sheets",
                stat: 4,
            },
            {
                name: "Saves Made",
                stat: 21,
            },
        ],
    },
    {
        id: "g3",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/card_players_images/1920-Freddie%20Woodman-player-image.png?raw=true",
        backnumber: 28,
        backnumberImage:
            "https://github.com/divclasssg/images/blob/main/bls/lfc/card_players_number_1920/card-player-number-28.png?raw=true",
        firstname: "Freddie",
        lastname: "Woodman",
        position: "goalkeeper",
        stats: [
            {
                name: "Appearances",
                stat: 1,
            },
            {
                name: "Minutes Played",
                stat: 90,
            },
            {
                name: "Clean Sheets",
                stat: 0,
            },
            {
                name: "Saves Made",
                stat: 6,
            },
        ],
    },
    {
        id: "g4",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/card_players_images/1920-Armin%20Pecsi-player-image.png?raw=true",
        backnumber: 41,
        backnumberImage:
            "https://github.com/divclasssg/images/blob/main/bls/lfc/card_players_number_1920/card-player-number-41.png?raw=true",
        firstname: "Armin",
        lastname: "Pecsi",
        position: "goalkeeper",
        stats: [
            {
                name: "Appearances",
                stat: 0,
            },
            {
                name: "Minutes Played",
                stat: 0,
            },
            {
                name: "Clean Sheets",
                stat: 0,
            },
            {
                name: "Saves Made",
                stat: 0,
            },
        ],
    },
];

export default function SwiperCentered({ section }: { section: string }) {
    const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
    const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(
        null
    );

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    return (
        <div className={`swiper-centered ${section}`}>
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
                    ? FEATURED_DATA.map((item, index) => (
                          <SwiperSlide key={index} className="large">
                              <CardOverlay size="large" item={item} />
                          </SwiperSlide>
                      ))
                    : null}

                {section === "players"
                    ? PLAYERS_DATA.map((item) => (
                          <SwiperSlide key={item.id} className="large">
                              <CardPlayers size="large" item={item} />
                          </SwiperSlide>
                      ))
                    : null}
            </Swiper>
            <div className="indicator-container">
                <div className="controller">
                    <div ref={setPaginationEl}>
                        {section === "featured"
                            ? FEATURED_DATA.map((_, index) => (
                                  <span key={index}>{index + 1}</span>
                              ))
                            : null}
                        {section === "players"
                            ? PLAYERS_DATA.map((_, index) => (
                                  <span key={index}>{index + 1}</span>
                              ))
                            : null}
                    </div>
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
