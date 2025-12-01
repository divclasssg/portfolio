import styles from "./tab.module.scss";

export default function Tab({
    style,
    size,
    item,
}: {
    style: string;
    size: string;
    item: any;
}) {
    return (
        <div className={`${styles.container} ${styles[style]} ${styles[size]}`}>
            {item.map((item: any, index: number) => (
                <button
                    key={index}
                    className={`${styles.button} ${
                        index === 0 ? styles.active : ""
                    }`}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
}
