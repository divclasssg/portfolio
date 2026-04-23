import Link from "next/link";
import styles from "./button.module.scss";
import ArrowRight from "../icons/arrowRight";

export default function Buttons({
    type,
    size,
    label,
    textColor,
    bgColor,
    arrowColor,
}: {
    type: "fill" | "text" | "border";
    size: "small" | "medium" | "large" | "xlarge";
    label: string;
    bgColor: "bgBlack" | "bgRed" | "bgYellow" | "bgWhite";
    textColor: "textBlack" | "textRed" | "textYellow" | "textWhite";
    arrowColor: "black" | "red" | "yellow" | "white";
}) {
    const typeClass =
        {
            text: styles.text,
            fill: styles.fill,
            border: styles.border,
        }[type] || styles.text;

    const sizeClass =
        {
            small: styles.small,
            medium: styles.medium,
            large: styles.large,
            xlarge: styles.xlarge,
        }[size] || styles.xlarge;

    const bgColorClass =
        {
            bgBlack: styles.bgBlack,
            bgRed: styles.bgRed,
            bgYellow: styles.bgYellow,
            bgWhite: styles.bgWhite,
        }[bgColor] || "";

    const textColorClass =
        {
            textBlack: styles.textBlack,
            textRed: styles.textRed,
            textYellow: styles.textYellow,
            textWhite: styles.textWhite,
        }[textColor] || "";

    return (
        <Link
            href="#"
            className={`${styles.button} ${typeClass} ${sizeClass} ${bgColorClass} ${textColorClass}`}
        >
            <span>{label}</span>
            <ArrowRight type={type} size={size} color={arrowColor} />
        </Link>
    );
}
