import CardFixture from "../../cards/fixtures/fixture";
import H2 from "../../headings/h2";
import SwiperPerViewAuto from "../../slider/swiperPerViewAuto";
import styles from "./fixturesAndStandings.module.scss";
import Tab from "../../tabs/tab";
import H3 from "../../headings/h3";
import Buttons from "../../buttons/buttons";
import Link from "next/link";
import ButtonAddFixturesToCalendar from "../../buttons/buttonAddFixturesToCalendar";

const TAB_DATA = [
    {
        label: "Mens",
    },
    {
        label: "Womens",
    },
    {
        label: "U21s",
    },
    {
        label: "U18s",
    },
];

const TAB_TEXT_DATA = [
    {
        label: "Premier League 2025-26",
    },
    {
        label: "Champions League 2025-26",
    },
];

const FIXTURES_DATA = [
    {
        id: "lastMatch",
        type: "last",
        competition: "premier league",
        game: "away",
        schedule: "MON 10 November, 01:30",
        location: "Etihad Stadium",
        opponent: "MAN CITY",
        opponentLogo:
            "https://github.com/divclasssg/images/blob/main/bls/lfc/logo_clubs_large/man%20city.png?raw=true",
        opponentScore: 3,
        liverpoolScore: 0,
    },
    {
        id: "nextMatch",
        type: "next",
        competition: "premier league",
        game: "home",
        schedule: "SUN 23 November, 00:00",
        location: "Anfield",
        opponent: "Nottm Forest",
        opponentLogo:
            "https://github.com/divclasssg/images/blob/main/bls/lfc/logo_clubs_large/nottm%20forest.png?raw=true",
        opponentScore: "",
        liverpoolScore: "",
    },
    {
        id: "upcomingMatch1",
        type: "upcoming",
        competition: "premier league",
        game: "away",
        schedule: "SUN 30 November, 23:05",
        location: "London Stadium",
        opponent: "West Ham",
        opponentLogo:
            "https://github.com/divclasssg/images/blob/main/bls/lfc/logo_clubs_large/west%20ham.png?raw=true",
        opponentScore: "",
        liverpoolScore: "",
    },
    {
        id: "upcomingMatch2",
        type: "upcoming",
        competition: "premier league",
        game: "home",
        schedule: "THU 4 December, 05:15",
        location: "Anfield",
        opponent: "Sunderland",
        opponentLogo:
            "https://github.com/divclasssg/images/blob/main/bls/lfc/logo_clubs_large/sunderland.png?raw=true",
        opponentScore: "",
        liverpoolScore: "",
    },
];

export default function SectionFixturesAndStandings() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headline}>
                    <H2
                        title="fixtures & standings"
                        button={false}
                        buttonLabel=""
                        tab={true}
                    />
                    <Tab style="basic" size="large" item={TAB_DATA} />
                </div>
                <div className={styles.subhead}>
                    <H3 text="FIXTURES" />
                    <div className={styles.links}>
                        <ButtonAddFixturesToCalendar />
                        <Buttons
                            type="text"
                            size="medium"
                            label="all fixtures"
                            bgColor="bgWhite"
                            textColor="textBlack"
                            arrowColor="black"
                        />
                    </div>
                </div>
                <div className={styles.fixtures}>
                    <CardFixture data={FIXTURES_DATA} />
                </div>
                <div className={styles.standings}>
                    <div className={styles.subhead}>
                        <H3 text="STANDINGS" />
                        <Tab style="text" size="large" item={TAB_TEXT_DATA} />
                    </div>
                    <SwiperPerViewAuto section="standings" />
                </div>
            </div>
        </section>
    );
}
