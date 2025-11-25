import styles from "./sliderIndicator.module.scss";

export default function SliderIndicator() {
    return (
        <div className={styles.container}>
            <div className={`${styles.item} ${styles.active}`}>
                <div className={styles.indicator}></div>
            </div>
            <div className={styles.item}>
                <div className={styles.indicator}></div>
            </div>
            <div className={styles.item}>
                <div className={styles.indicator}></div>
            </div>
        </div>
    );
}
