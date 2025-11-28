import CardStoreMainBanner from "../../cards/store/storeMainBanner";
import CardStoreItems from "../../cards/store/storeItems";
import styles from "./store.module.scss";

const STORE_ITEMS_DATA = [
    {
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/store/1920/Home%20Kit.jpg?raw=true",
        title: "25/26 Home Kit",
    },
    {
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/store/1920/adidas%20Collections.jpg?raw=true",
        title: "adidas Collections",
    },
    {
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/store/1920/Training%20Kit.jpg?raw=true",
        title: "25/26 Training Kit",
    },
    {
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/store/1920/Away%20Kit.jpg?raw=true",
        title: "25/26 Away Kit",
    },
    {
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/store/1920/Third%20Kit.jpg?raw=true",
        title: "25/26 Third Kit",
    },
    {
        image: "https://github.com/divclasssg/images/blob/main/bls/lfc/store/1920/Goalkeeper.jpg?raw=true",
        title: "25/26 Goalkeeper",
    },
];

export default function SectionStore() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <CardStoreMainBanner />
                <div className={styles.items}>
                    {STORE_ITEMS_DATA.map((item, index) => (
                        <CardStoreItems key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}
