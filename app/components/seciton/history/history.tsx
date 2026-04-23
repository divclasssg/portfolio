import SwiperPerViewAuto from "../../slider/swiperPerViewAuto";
import styles from "./history.module.scss";
import H2 from "../../headings/h2";
import Image from "next/image";
import Buttons from "../../buttons/buttons";

export default function SectionHistory() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headline}>
                    <H2
                        title="history"
                        button={false}
                        buttonLabel=""
                        tab={false}
                    />
                </div>
                <div className={styles.memorial}>
                    <Image
                        src="https://raw.githubusercontent.com/divclasssg/images/a5de049fcd7279f8baa639c45581ff138bac95bb/bls/lfc/history/memorial-1989-desktop%201.svg"
                        alt="15th April 1989 Never Forgotten"
                        width={620}
                        height={298}
                    />
                    <Image
                        src="https://raw.githubusercontent.com/divclasssg/images/a5de049fcd7279f8baa639c45581ff138bac95bb/bls/lfc/history/memorial-1985-desktop%201.svg"
                        alt="29th May 1985 In Memora e Amicizia"
                        width={619}
                        height={297}
                    />
                </div>
                <SwiperPerViewAuto section="trophies" />
                <div className={styles.records}>
                    <p className={styles.paragraph}>
                        Biggest wins, most goals, highest attendances and much
                        more - delve into Liverpool FC's records and
                        statistics...
                    </p>
                    <Buttons
                        type="text"
                        size="medium"
                        label="view here"
                        bgColor="bgWhite"
                        textColor="textBlack"
                        arrowColor="black"
                    />
                </div>
            </div>
        </section>
    );
}
