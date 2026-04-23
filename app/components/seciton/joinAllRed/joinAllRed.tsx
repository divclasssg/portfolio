import styles from "./joinAllRed.module.scss";
import Buttons from "../../buttons/buttons";

export default function SectionJoinAllRed() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h2 className={styles.headline}>
                    Join ALL RED Essentials,
                    <br /> your FREE,
                    <br /> Official LFC Account
                </h2>
                <p className={styles.paragraph}>
                    Unlock new, exciting and exclusive benefits including
                    videos, match commentary, emagazine and more, all in one
                    place.
                </p>
                <Buttons
                    type="fill"
                    size="large"
                    label="join all red now here"
                    bgColor="bgRed"
                    textColor="textWhite"
                    arrowColor="white"
                />
            </div>
        </section>
    );
}
