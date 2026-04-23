import Buttons from "../../buttons/buttons";
import H2 from "../../headings/h2";
import SwiperCentered from "../../slider/swiperCentered";
import styles from "./featured.module.scss";

export default function SectionFeatured() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headline}>
                    <H2
                        title="Featured"
                        button={true}
                        buttonLabel="All Featured"
                        tab={false}
                    />
                </div>
                <SwiperCentered section="featured" />
            </div>
        </section>
    );
}
