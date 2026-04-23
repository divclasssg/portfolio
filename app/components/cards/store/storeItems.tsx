"use client";

import Image from "next/image";
import Buttons from "../../buttons/buttons";
import styles from "./store.module.scss";
import { useState } from "react";

export default function CardStoreItems({ item }: { item: any }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={styles.items}>
            <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={`${styles.image} ${isHovered ? styles.hovered : ""}`}
            />
            <div className={styles.info}>
                <h3 className={styles.title}>{item.title}</h3>
                <div
                    className={styles.link}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Buttons
                        type="fill"
                        size="small"
                        label="Shop Now"
                        bgColor="bgRed"
                        textColor="textWhite"
                        arrowColor="white"
                    />
                </div>
            </div>
        </div>
    );
}
