import Link from "next/link";
import styles from './button.module.scss';
import ArrowRight from "../icons/arrowRight";

export default function ButtonText({ size, label, color }: { size: string, label: string, color: string }) {
    return (
        <Link href="#" className={`${styles.text} ${size === "xlarge" ? styles.xlarge : size === "large" ? styles.large : size === "medium" ? styles.medium : size === "small" ? styles.small : styles.xlarge}`}>
            <span>{label}</span>
            <ArrowRight size={size} color={color} />
        </Link>
    )
}