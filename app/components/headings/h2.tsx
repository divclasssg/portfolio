import Buttons from "../buttons/buttons";
import styles from "./h2.module.scss";

export default function H2({
    title,
    button,
    buttonLabel,
    tab,
}: {
    title: string;
    button?: boolean;
    buttonLabel?: string;
    tab?: boolean;
}) {
    return (
        <div className={`${styles.container} ${tab ? styles.tab : ""}`}>
            <h2 className={styles.headline}>{title}</h2>
            {button && (
                <div className={styles.link}>
                    <Buttons
                        type="text"
                        size="medium"
                        label={buttonLabel || ""}
                        bgColor="bgWhite"
                        textColor="textBlack"
                        arrowColor="black"
                    />
                </div>
            )}
        </div>
    );
}
