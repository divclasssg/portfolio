import Styles from './hero.module.scss';

export default function SectionHero() {
    return (
        <section className={Styles.section}>
            <div className={Styles.videoContainer}>
                <video src="https://github.com/divclasssg/images/raw/refs/heads/main/bls/lfc/video/main_video.mp4" muted autoPlay loop></video>
            </div>
            <div className={Styles.fixtures}>
                <div className={Styles.lastMatch}></div>
                <div className={Styles.nextMatch}></div>
            </div>
        </section>
    )
}