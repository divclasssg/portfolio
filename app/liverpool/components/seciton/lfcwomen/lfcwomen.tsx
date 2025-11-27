import CardStandard from "../../cards/standard/cardStandard";
import styles from "./lfcwomen.module.scss";

const LFC_WOMEN_DATA = [
    {
        id: "lfcw-1",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/card_standard_images/lfc-women-image-01.jpg?raw=true",
        category: "Video",
        title: "Liverpool 1-1 Chelsea: Watch WSL highlights",
        date: "18th November 2025",
    },
    {
        id: "lfcw-2",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/card_standard_images/lfc-women-image-02.jpg?raw=true",
        category: "News",
        title: "'We've stuck together' - Woodham and Olsson react to Chelsea draw",
        date: "17th November 2025",
    },
    {
        id: "lfcw-3",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/card_standard_images/lfc-women-image-03.jpg?raw=true",
        category: "Reaction",
        title: "Gareth Taylor on Chelsea draw: 'We stuck to the task and worked so hard'",
        date: "17th November 2025",
    },
];

export default function SectionLFCWomen() { 
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.list}>
                    { 
                        LFC_WOMEN_DATA.map((item) => (
                            <CardStandard key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}