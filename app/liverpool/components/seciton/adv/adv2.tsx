import Image from "next/image";
import styles from "./adv.module.scss";

export default function SectionAdv2() {
    return (
        <section className={styles.adv2}>
            <Image
                src="https://raw.githubusercontent.com/divclasssg/images/a1e65e1f73cef55fb6599c8fcf6b95e32e92dc42/bls/lfc/adv/adv-2-1920.svg"
                alt="adv2"
                width={1260}
                height={242}
            />
        </section>
    );
}
