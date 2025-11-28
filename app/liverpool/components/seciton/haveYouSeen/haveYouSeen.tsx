import styles from "./haveYouSeen.module.scss";
import SwiperPerViewAuto from "../../slider/swiperPerViewAuto";
import H2 from "../../headings/h2";

export default function SectionHaveYouSeen() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headline}>
                    <H2
                        title="have you seen?"
                        button={true}
                        buttonLabel="all news"
                        tab={false}
                    />
                </div>
                <SwiperPerViewAuto section="lastest" />
            </div>
        </section>
    );
}
