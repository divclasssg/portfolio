"use client";

import Link from "next/link";
import { useState } from "react";
import Buttons from "../../buttons/buttons";
import Styles from "./hero.module.scss";
import ArrowRight from "../../icons/arrowRight";

export default function SectionHero() {
    const [hoverIndex, setHoverIndex] = useState<number | null>(null);

    return (
        <section className={Styles.section}>
            <div className={Styles.videoContainer}>
                <video
                    src="https://github.com/divclasssg/images/raw/refs/heads/main/bls/lfc/video/main_video.mp4"
                    muted
                    autoPlay
                    loop
                ></video>
            </div>
            <div className={Styles.fixtures}>
                <div className={`${Styles.fixturesItems} ${Styles.joinAllRed}`}>
                    <div className={Styles.contents}>
                        <div className={Styles.details}>
                            <p className={Styles.paragraph}>
                                Join ALL RED Essentials,
                                <br /> Your FREE,
                                <br /> Official LFC Account
                            </p>
                        </div>
                        <Link 
                            href="#" 
                            className={Styles.link}
                            onMouseEnter={() => setHoverIndex(0)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <div className={Styles.textWrapper}>
                                <span className={Styles.defaultText}>ALL RED Essentials</span>
                                <span className={Styles.hoverText}>Join ALL RED Essentials</span>
                            </div>
                            <ArrowRight type="border" size="large" color={hoverIndex === 0 ? "white" : "white"} />
                        </Link>
                    </div>
                </div>
                <div className={`${Styles.fixturesItems} ${Styles.nextMatch}`}>
                    <div className={Styles.contents}>
                        <div className={`${Styles.details} ${Styles.nextMatch}`}>
                            <div className={Styles.badge}>Next Match</div>
                            <div className={Styles.competition}>Premier League</div>
                            <div className={Styles.info}>
                                SUN 23 November, 00:00 - Anfield
                            </div>
                            <div className={Styles.result}>
                                <h5 className={Styles.liverpool}>Liverpool</h5>
                                <h5 className={Styles.opponent}>Nottm Forest</h5>
                            </div>
                        </div>
                        <Link 
                            href="#" 
                            className={`${Styles.link} ${Styles.nextMatch}`}
                            onMouseEnter={() => setHoverIndex(1)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <div className={Styles.textWrapper}>
                                <span className={Styles.defaultText}>Next Match</span>
                                <span className={Styles.hoverText}>Tickets Availability</span>
                            </div>
                            <ArrowRight type="border" size="large" color={hoverIndex === 1 ? "white" : "white"} />
                        </Link>
                    </div>
                </div>
                <div className={`${Styles.fixturesItems} ${Styles.upcomingMatch}`}>
                    <div className={Styles.contents}>
                        <div className={Styles.details}>
                            <div className={Styles.badge}>Upcoming Match</div>
                            <div className={Styles.competition}>Premier League</div>
                            <div className={Styles.info}>
                                SUN 30 November, 23:05 - London Stadium
                            </div>
                            <div className={Styles.result}>
                                <h5 className={Styles.opponent}>West Ham</h5>
                                <h5 className={Styles.liverpool}>Liverpool</h5>
                            </div>
                        </div>
                        <Link 
                            href="#" 
                            className={Styles.link}
                            onMouseEnter={() => setHoverIndex(2)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <div className={Styles.textWrapper}>
                                <span className={Styles.defaultText}>Upcoming Match</span>
                                <span className={Styles.hoverText}>Tickets Availability</span>
                            </div>
                            <ArrowRight type="border" size="large" color={hoverIndex === 2 ? "white" : "white"} />
                        </Link>
                    </div>
                </div>
                <div className={`${Styles.fixturesItems} ${Styles.lfcStore}`}>
                    <div className={Styles.contents}>
                        <Link 
                            href="#" 
                            className={Styles.link}
                            onMouseEnter={() => setHoverIndex(3)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <div className={Styles.textWrapper}>
                                <span className={Styles.defaultText}>The LFC Store</span>
                                <span className={Styles.hoverText}>Visit The LFC Store</span>
                            </div>
                            <ArrowRight type="border" size="large" color={hoverIndex === 3 ? "white" : "white"} />
                        </Link>
                    </div>
                </div>
                {/* <div className={Styles.joinAllRed}>
                    <p className={Styles.paragraph}>
                        Join ALL RED Essentials,
                        <br /> Your FREE,
                        <br /> Official LFC Account
                    </p>
                    <Buttons
                        type="text"
                        size="medium"
                        label="Join ALL RED Now"
                        bgColor="bgYellow"
                        textColor="textWhite"
                        arrowColor="white"
                    />
                </div>
                <div className={Styles.nextMatch}>
                    <h2 className={Styles.badge}>Next Match</h2>
                    <h3 className={Styles.competition}>Premier League</h3>
                    <h4 className={Styles.info}>
                        SUN 23 November, 00:00 - Anfield
                    </h4>
                    <div className={Styles.result}>
                        <h5 className={Styles.liverpool}>Liverpool</h5>
                        <h5 className={Styles.opponent}>Nottm Forest</h5>
                    </div>
                    <Buttons
                        type="fill"
                        size="large"
                        label="TICKETS AVAILABILITY"
                        bgColor="bgRed"
                        textColor="textWhite"
                        arrowColor="white"
                    />
                </div> */}
            </div>
        </section>
    );
}
