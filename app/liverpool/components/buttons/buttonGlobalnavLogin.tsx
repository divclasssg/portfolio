import Link from "next/link";
import Styles from "./button.module.scss";

export default function ButtonLogin() {
    return (
        <Link href="#" className={Styles.login}>
            Login
        </Link>
    )
}