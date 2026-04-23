import styles from "./h3.module.scss";

export default function H3({ text }: { text: string }) {
    return <h3 className={styles.h3}>{text}</h3>;
}
