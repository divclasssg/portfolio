import Image from "next/image";
import styles from "./adv.module.scss";

export default function SectionAdv1() {
    return (
        <section className={styles.adv1}>
            <Image
                src="https://raw.githubusercontent.com/divclasssg/images/9a27d258ce213a97fdf3fbdbd5e4caabd53675c4/bls/lfc/adv/adv-1-1920.svg"
                alt="adv1"
                width={1260}
                height={244}
            />
        </section>
    );
}
