"use client";

import Image from "next/image";
import styles from "./globalfooter.module.scss";
import { useState } from "react";

export default function GlobalfooterPartners({ item }: { item: any }) {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    return (
        <li className={styles.item}>
            <a
                href="#"
                className={styles.link}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <Image
                    src={isHovered ? item.hover : item.image}
                    alt={item.partner}
                    width={item.width}
                    height={item.height}
                />
            </a>
        </li>
    );
}
