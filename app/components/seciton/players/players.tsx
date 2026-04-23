import SwiperCentered from "../../slider/swiperCentered";
import styles from "./players.module.scss";
import H2 from "../../headings/h2";

export default function SectionPlayers() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headline}>
                    <H2
                        title="players"
                        button={true}
                        buttonLabel="all players"
                        tab={true}
                    />
                </div>
                <SwiperCentered section="players" />
            </div>
        </section>
    );
}
