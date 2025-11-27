import CardFixture from "./components/cards/fixtures/fixture";
import SectionFixturesAndStandings from "./components/seciton/fixturesAndStandings/fixturesAndStandings";
import SectionHero from "./components/seciton/hero/hero";
import SwiperCentered from "./components/slider/swiperCentered";
import SwiperPerViewAuto from "./components/slider/swiperPerViewAuto";

export default function LiverpoolPage() {
    return (
        <>
            <SectionHero />
            <main className="main">
                {/* <ArrowRight size="xlarge" color="black" />
                <SliderButtonArrow
                    size="medium"
                    active={false}
                    direction="left"
                />
                <SliderIndicator /> */}
                <SwiperCentered section="featured" />
                <SwiperPerViewAuto section="lastest" />
                <SectionFixturesAndStandings />
            </main>
        </>
    );
}
