import Image from "next/image";
import Buttons from "../../buttons/buttons";
import styles from "./players.module.scss";

export default function CardPlayers({
    size,
    item,
}: {
    size: "small" | "medium" | "large";
    item: any;
}) {
    return (
        <div
            className={`${styles.container} ${styles[size]} ${
                styles[item.lastname]
            }`}
        >
            <div className={styles.imageContainer}>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className={styles.content}>
                    <h3
                        className={styles.backnumber}
                        style={{
                            backgroundImage: `url(${item.backnumberImage})`,
                        }}
                    >
                        <span className="visuallyhidden">
                            No.{item.backnumber}
                        </span>
                    </h3>
                    <h4 className={styles.firstname}>{item.firstname}</h4>
                </div>
            </div>
            <div className={styles.info}>
                <div className={styles.logo}></div>
                <div className={styles.name}>
                    <h4
                        className={`${styles.lastname} ${
                            styles[item.lastname]
                        }`}
                    >
                        {item.lastname}
                    </h4>
                    <h5 className={styles.position}>{item.position}</h5>
                </div>
                <div className={styles.stats}>
                    <h6 className={styles.title}>Season 2025-26</h6>
                    <ul className={styles.list}>
                        {item.stats.map(
                            (
                                stat: { name: string; stat: number },
                                index: number
                            ) => (
                                <li key={index} className={styles.item}>
                                    <span className={styles.subtitle}>
                                        {stat.name}
                                    </span>
                                    <strong className={styles.stat}>
                                        {stat.stat}
                                    </strong>
                                </li>
                            )
                        )}
                    </ul>
                </div>
                <div className={styles.links}>
                    <Buttons
                        type="fill"
                        size="large"
                        label="Buy 'Alisson - 1' shirt here"
                        textColor="textBlack"
                        bgColor="bgYellow"
                        arrowColor="black"
                    />
                    <Buttons
                        type="border"
                        size="large"
                        label="View Profile"
                        textColor="textWhite"
                        bgColor="bgWhite"
                        arrowColor="white"
                    />
                </div>
            </div>
        </div>
    );
}
