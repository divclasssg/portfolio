import ButtonText from '../../buttons/buttonText';
import Styles from './hero.module.scss';

export default function SectionHero() {
    return (
        <section className={Styles.section}>
            <div className={Styles.videoContainer}>
                <video src="https://github.com/divclasssg/images/raw/refs/heads/main/bls/lfc/video/main_video.mp4" muted autoPlay loop></video>
            </div>
            <div className={Styles.fixtures}>
                <div className={Styles.lastMatch}>
                    <h2 className={Styles.badge}>Last Match</h2>
                    <h3 className={Styles.competition}>Premier League</h3>
                    <h4 className={Styles.info}>MON 10 November, 01:30 - Etihad Stadium</h4>
                    <div className={Styles.result}>
                        <h5 className={Styles.opponent}>
                            <span className={Styles.club}>Man City</span>
                            <span className={Styles.score}>3</span>
                        </h5>
                        <h5 className={Styles.liverpool}>
                            <span className={Styles.club}>Liverpool</span>
                            <span className={Styles.score}>0</span>
                        </h5>
                    </div>
                    <ButtonText size="medium" label="match report" color="white" />
                </div>
                <div className={Styles.nextMatch}>
                    <h2 className={Styles.badge}>Next Match</h2>
                    <h3 className={Styles.competition}>Premier League</h3>
                    <h4 className={Styles.info}>SUN 23 November, 00:00 - Anfield</h4>
                    <div className={Styles.result}>
                        <h5 className={Styles.liverpool}>Liverpool</h5>
                        <h5 className={Styles.opponent}>Nottm Forest</h5>                        
                    </div>
                </div>
            </div>
        </section>
    )
}