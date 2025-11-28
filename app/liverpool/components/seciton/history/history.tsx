import SwiperPerViewAuto from "../../slider/swiperPerViewAuto";
import styles from "./history.module.scss";
import H2 from "../../headings/h2";

export default function SectionHistory() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headline}>
                    <H2
                        title="history"
                        button={false}
                        buttonLabel=""
                        tab={false}
                    />
                </div>
                <div className=""></div>
                <SwiperPerViewAuto section="trophies" />
            </div>
        </section>
    );
}
