import Badge from "../../badges/badge";
import Buttons from "../../buttons/buttons";
import styles from "./fixture.module.scss";

export default function CardFixture({ data }: { data: any }) {
    console.log(data);
    return data.map((item: any) => {
        return (
            <div
                key={item.id}
                className={`${styles.container} ${styles[item.type]} ${
                    styles[item.competition]
                } ${styles[item.game]}`}
            >
                <div className={styles.info}>
                    <div className={styles.detail}>
                        <div className={styles.infoDetail}>
                            <Badge type={item.type} />
                            <h3 className={styles.competition}>
                                {item.competition}
                            </h3>
                            <h4 className={styles.schedule}>{item.schedule}</h4>
                            <h4 className={styles.location}>{item.location}</h4>
                        </div>
                        <div
                            className={`${styles.logoCompetition} ${
                                styles[item.competition.replace(" ", "-")]
                            }`}
                        ></div>
                    </div>
                    <div className={`${styles.matchup} ${styles[item.game]}`}>
                        <div className={styles.clubLogos}>
                            <span className={styles.liverpool}></span>
                            <span className={styles.vs}>v</span>
                            <span
                                className={styles.opponent}
                                style={{
                                    backgroundImage: `url(${item.opponentLogo})`,
                                }}
                            ></span>
                        </div>
                        <div
                            className={`${styles.result} ${styles[item.type]}`}
                        >
                            <div className={styles.liverpool}>
                                <span className={styles.clubname}>
                                    Liverpool
                                </span>
                                <span className={styles.score}>
                                    {item.liverpoolScore}
                                </span>
                            </div>
                            <div className={styles.opponent}>
                                <span className={styles.clubname}>
                                    {item.opponent}
                                </span>
                                <span className={styles.score}>
                                    {item.opponentScore}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.link} ${styles[item.type]}`}>
                    {item.type === "last" ? (
                        <Buttons
                            type="text"
                            size="small"
                            label="Match Report"
                            textColor="textBlack"
                            bgColor="bgWhite"
                            arrowColor="black"
                        />
                    ) : item.type === "next" ? (
                        <>
                            <Buttons
                                type="text"
                                size="small"
                                label="match centre"
                                textColor="textWhite"
                                bgColor="bgWhite"
                                arrowColor="white"
                            />
                            <Buttons
                                type="text"
                                size="small"
                                label="tickets availability"
                                textColor="textYellow"
                                bgColor="bgWhite"
                                arrowColor="yellow"
                            />
                        </>
                    ) : item.type === "upcoming" ? (
                        <>
                            <Buttons
                                type="text"
                                size="small"
                                label="match centre"
                                textColor="textBlack"
                                bgColor="bgWhite"
                                arrowColor="black"
                            />
                            <Buttons
                                type="text"
                                size="small"
                                label="tickets availability"
                                textColor="textBlack"
                                bgColor="bgWhite"
                                arrowColor="black"
                            />
                        </>
                    ) : null}
                </div>
            </div>
        );
    });
}
