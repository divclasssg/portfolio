import Link from "next/link";
import Styles from "./button.module.scss";

export default function ButtonJoin() {
    return (
        <Link href="#" className={Styles.join}>
            <span className={Styles.icon}></span>
            <span className={Styles.text}>Join</span>
        </Link>
    );
}
