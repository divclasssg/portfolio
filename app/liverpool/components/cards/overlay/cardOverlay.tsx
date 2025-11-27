import Image from "next/image";
import styles from "./cardOverlay.module.scss";
import Link from "next/link";

export default function CardOverlay({
    size,
    item,
}: {
    size: "large" | "medium" | "small";
    item: any;
}) {
    const sizeClass =
        size === "large"
            ? styles.large
            : size === "medium"
            ? styles.medium
            : styles.small;

    if (size === "large") {
        return (
            <div className={`${styles.container} ${sizeClass}`}>
                <Link href="#" className={styles.link}></Link>
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
        );
    }

    if (size === "medium") {
        return (
            <div className={`${styles.container} ${sizeClass}`}>
                <Link href="#" className={styles.link}></Link>
                <div className={styles.image}>
                    <Image src={item.image} alt="" width={940} height={582} />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.category}>{item.category}</h3>
                    <h2 className={styles.title}>{item.title}</h2>
                    <time dateTime="" className={styles.date}>
                        {item.date}
                    </time>
                </div>
            </div>
        );
    }

    if (size === "small") {
        return (
            <div className={`${styles.container} ${sizeClass}`}>
                <Link href="#" className={styles.link}></Link>
                <div className={styles.image}>
                    <Image src={item.image} alt="" width={513} height={582} />
                </div>
                <div className={styles.content}>
                    <h3 className={styles.category}>{item.category}</h3>
                    <h2 className={styles.title}>{item.title}</h2>
                    <time dateTime="" className={styles.date}>
                        {item.date}
                    </time>
                </div>
            </div>
        );
    }
}
