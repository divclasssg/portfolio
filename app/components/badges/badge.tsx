import styles from "./badge.module.scss";

export default function Badge({
    type,
}: {
    type: "last" | "next" | "upcoming";
}) {
    return (
        <h2 className={`${styles.badge} ${styles[type]}`}>
            {type === "last"
                ? "Last Match"
                : type === "next"
                ? "Next Match"
                : "Upcoming Match"}
        </h2>
    );
}
