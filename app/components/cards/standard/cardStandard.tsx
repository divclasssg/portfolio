import Link from "next/link";
import styles from "./cardStandard.module.scss";

export default function CardStandard({
    item,
}: {
    item: any;
}) {
    return (
        <div className={styles.container}>            
            <Link href="#" title={item.title} className={styles.link}></Link>
            <div className={styles.image}>
                <div className={styles.imageInner} style={{ backgroundImage: `url(${item.image})` }}></div>
            </div>
            <div className={styles.content}>                
                <h3 className={styles.category}>{item.category}</h3>
                <h4 className={styles.title}>{item.title}</h4>
                <time dateTime="" className={styles.date}>{item.date}</time>
            </div>
        </div>
    )
}