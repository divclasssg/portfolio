import ArrowRight from "./components/icons/arrowRight";
import SliderButtonArrow from "./components/icons/sliderButtonArrow";
import SliderIndicator from "./components/icons/sliderIndicator";
import SectionHero from "./components/seciton/hero/hero";
import SwiperCentered from "./components/slider/swiperCentered";

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
            </main>
        </>
    );
}
