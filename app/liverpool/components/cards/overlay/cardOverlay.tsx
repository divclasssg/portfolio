import Image from "next/image";
import styles from "./cardOverlay.module.scss";

export default function CardOverlay({
    section,
    item,
}: {
    section: string;
    item: any;
}) {
    return section === "featured" ? (
        <div className={styles.container}>
            <div className={styles.image}>
                <Image src={item.image} alt="" width={1260} height={780} />
            </div>
            <div className={styles.content}>
                <h3 className={styles.category}>{item.category}</h3>
                <h2 className={styles.title}>{item.title}</h2>
                <time dateTime="" className={styles.date}>
                    {item.date}
                </time>
            </div>
        </div>
    ) : null;
}
