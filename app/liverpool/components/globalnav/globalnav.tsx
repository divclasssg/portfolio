import Image from 'next/image';
import styles from './globalnav.module.scss';
import Link from 'next/link';

export default function Globalnav() {
    return (
        <nav className={styles.container}>
            <div className={styles.content}>
                <div className={styles.list}>
                    <h1 className={styles.logo}>
                        <Link href="/liverpool">
                            <Image src="https://github.com/divclasssg/images/blob/main/bls/lfc/logo_clubs_large/liverpool.png?raw=true" alt="Liverpool FC" width={27} height={50} />
                        </Link>
                    </h1>
                    <ul className={styles.nav}>
                        <li className={styles.item}>
                            <Link href="/liverpool" className={styles.link}>
                                News
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                Fixtures & Teams
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                Tickets & Booking
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                Shop
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                Video
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                More
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.utilities}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link href="#" className={styles.join}>
                                Join
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.login}>
                                Login
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.languages}>
                                EN
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.partner}>
                                <Image src="https://raw.githubusercontent.com/divclasssg/images/9bbe2474f68fcaea6cffa697ff81590620477c89/bls/lfc/icons/main_partner/logo-standard-chartered-black.svg" alt="Standard Chartered" width={81} height={32} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}