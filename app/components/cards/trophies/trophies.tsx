import styles from "./trophies.module.scss";

export default function CardTrophies({ item }: { item: any }) {
    return (
        <div className={styles.container}>
            <div
                className={styles.trophy}
                style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className={styles.info}>
                <div className={styles.number}>{item.number}</div>
                <div className={styles.title}>{item.title}</div>
            </div>
            <div className={styles.years}>
                <ul className={styles.list}>
                    {item.years.map((item: string, index: number) => (
                        <li key={index} className={styles.item}>
                            <span>★</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
