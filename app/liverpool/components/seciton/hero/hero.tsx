import Buttons from "../../buttons/buttons";
import Styles from "./hero.module.scss";

export default function SectionHero() {
    return (
        <section className={Styles.section}>
            <div className={Styles.videoContainer}>
                <video
                    src="https://github.com/divclasssg/images/raw/refs/heads/main/bls/lfc/video/main_video.mp4"
                    muted
                    autoPlay
                    loop
                ></video>
            </div>
            <div className={Styles.fixtures}>
                <div className={Styles.joinAllRed}>
                    <p className={Styles.paragraph}>
                        Join ALL RED Essentials,
                        <br /> Your FREE,
                        <br /> Official LFC Account
                    </p>
                    <Buttons
                        type="text"
                        size="medium"
                        label="Join ALL RED Now"
                        bgColor="bgYellow"
                        textColor="textWhite"
                        arrowColor="white"
                    />
                </div>
                <div className={Styles.nextMatch}>
                    <h2 className={Styles.badge}>Next Match</h2>
                    <h3 className={Styles.competition}>Premier League</h3>
                    <h4 className={Styles.info}>
                        SUN 23 November, 00:00 - Anfield
                    </h4>
                    <div className={Styles.result}>
                        <h5 className={Styles.liverpool}>Liverpool</h5>
                        <h5 className={Styles.opponent}>Nottm Forest</h5>
                    </div>
                    <Buttons
                        type="fill"
                        size="large"
                        label="TICKETS AVAILABILITY"
                        bgColor="bgRed"
                        textColor="textWhite"
                        arrowColor="white"
                    />
                </div>
            </div>
        </section>
    );
}
