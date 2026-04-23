import CardFixture from "./components/cards/fixtures/fixture";
import CardPlayers from "./components/cards/players/players";
import SectionFixturesAndStandings from "./components/seciton/fixturesAndStandings/fixturesAndStandings";
import SectionHero from "./components/seciton/hero/hero";
import SectionHistory from "./components/seciton/history/history";
import SectionLFCWomen from "./components/seciton/lfcwomen/lfcwomen";
import SectionPlayers from "./components/seciton/players/players";
import SwiperCentered from "./components/slider/swiperCentered";
import SwiperPerViewAuto from "./components/slider/swiperPerViewAuto";
import SectionStore from "./components/seciton/store/store";
import SectionFeatured from "./components/seciton/featured/featured";
import SectionHaveYouSeen from "./components/seciton/haveYouSeen/haveYouSeen";
import SectionAdv1 from "./components/seciton/adv/adv1";
import SectionAdv2 from "./components/seciton/adv/adv2";
import SectionJoinAllRed from "./components/seciton/joinAllRed/joinAllRed";
import SectionClubAndCommunity from "./components/seciton/clubAndCommunity/clubAndCommunity";

export default function LiverpoolPage() {
    return (
        <>
            <SectionHero />
            <main className="main">
                <SectionFeatured />
                <SectionFixturesAndStandings />
                <SectionAdv1 />
                <SectionLFCWomen />
                <SectionHaveYouSeen />
                <SectionAdv2 />
                <SectionPlayers />
                <SectionHistory />
                <SectionStore />
                <SectionJoinAllRed />
                <SectionClubAndCommunity />
            </main>
        </>
    );
}
