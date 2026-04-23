import CardStandard from "../../cards/standard/cardStandard";
import H2 from "../../headings/h2";
import styles from "./clubAndCommunity.module.scss";

const CLUB_AND_COMMUNITY_DATA = [
    {
        id: "cac-1",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/card_standard_images/club-and-cumm-image-01.jpg?raw=true",
        category: "News",
        title: "LFC named best digital and social team at Social Football Summit Awards",
        date: "1 day ago",
    },
    {
        id: "cac-2",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/card_standard_images/club-and-cumm-image-02.jpg?raw=true",
        category: "News",
        title: "'LFC legends visit Alder Hey following Forever Reds' £50k donation",
        date: "17th November 2025",
    },
    {
        id: "cac-3",
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/card_standard_images/club-and-cumm-image-03.jpg?raw=true",
        category: "Feature",
        title: "We Love You Liverpool: Meet Official LFC Supporters Club… Mumbai",
        date: "18th November 2025",
    },
];

export default function SectionClubAndCommunity() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.headline}>
                    <H2
                        title="club & community"
                        button={true}
                        buttonLabel="View More"
                        tab={false}
                    />
                </div>
                <div className={styles.list}>
                    {CLUB_AND_COMMUNITY_DATA.map((item) => (
                        <CardStandard key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
