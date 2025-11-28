"use client";

import Buttons from "../../buttons/buttons";
import styles from "./store.module.scss";
import { useState } from "react";

export default function CardStoreMainBanner() {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <div
            className={`${styles.container} ${isHovered ? styles.hovered : ""}`}
        >
            <div className={styles.image}></div>
            <div
                className={styles.link}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Buttons
                    type="border"
                    size="medium"
                    label="VISIT THE LFC STORE"
                    bgColor="bgWhite"
                    textColor="textWhite"
                    arrowColor="white"
                />
            </div>
        </div>
    );
}
