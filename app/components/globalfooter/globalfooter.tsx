import Image from "next/image";
import styles from "./globalfooter.module.scss";
import GlobalfooterPartners from "./partners";
import Link from "next/link";

const MAIN_PARTNER_DATA = [
    {
        id: "mp-1",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/main_partners/standard.svg",
        partner: "standard chartered",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/main_partner_red/svg-ftr-sc_e989e1282ba918366e11d29d8d8ff657.svg",
        width: 270,
        height: 97.5,
    },
    {
        id: "mp-2",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/main_partners/adidas.svg",
        partner: "adidas",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/main_partner_red/svg-ftr-adidas_73662530bac379afea0dca2a1ce94e71%20(1).svg",
        width: 145.5,
        height: 91.5,
    },
    {
        id: "mp-3",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/main_partners/axa.svg",
        partner: "axa",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/main_partner_red/svg-ftr-axa_8bd5efb5714440886533a84d2eb6ed20%201.svg",
        width: 178.5,
        height: 76.5,
    },
    {
        id: "mp-4",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/main_partners/expedia.svg",
        partner: "expedia",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/main_partner_red/LFC_PartnerLogo_Expedia_New_1dcced86e660753d63d7bd55da73564e.svg",
        width: 245.49,
        height: 49.98,
    },
];

const SUB_PARTNER_DATA = [
    {
        id: "sp-1",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/logo-carlsberg.svg",
        partner: "carlsberg",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/logo-carlsberg.svg",
        width: 119.81,
        height: 43.88,
    },
    {
        id: "sp-2",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/EAS_PRIMARY_LOGO_WHT_PNG%20clear.svg",
        partner: "EA",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/EAS_PRIMARY_LOGO_WHT_PNG%20clear.svg",
        width: 107.26,
        height: 53.24,
    },
    {
        id: "sp-3",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/logo-EC_cb2a46144dbcf0418a51f04c2fe9a819.svg",
        partner: "EC",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/logo-EC_cb2a46144dbcf0418a51f04c2fe9a819.svg",
        width: 176.63,
        height: 52.88,
    },
    {
        id: "sp-4",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/Extreme-Networks-WH.svg",
        partner: "Extreme Networks",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/Extreme-Networks-WH.svg",
        width: 175.5,
        height: 54,
    },
    {
        id: "sp-5",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/logo_Pixel_2024Q1_Print_Logo_Lockup_CMYK_grey_900_vertical.svg",
        partner: "Google Pixel",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/logo_Pixel_2024Q1_Print_Logo_Lockup_CMYK_grey_900_vertical.svg",
        width: 112.88,
        height: 66.38,
    },
    {
        id: "sp-6",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/haier-logo-new_92e87af08be04d167b31cee71dd36ba3.svg",
        partner: "Haier",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/haier-logo-new_92e87af08be04d167b31cee71dd36ba3.svg",
        width: 102.77,
        height: 31.65,
    },
    {
        id: "sp-7",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/husqvarna-white.svg",
        partner: "Husqvarna",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/husqvarna-white.svg",
        width: 76.73,
        height: 59.25,
    },
    {
        id: "sp-8",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/JAL%20logo%20all%20white.svg",
        partner: "Japn Airlines",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/JAL%20logo%20all%20white.svg",
        width: 116.67,
        height: 61.5,
    },
    {
        id: "sp-9",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/kodansha_logo_horizontal_lockup_fixed.svg",
        partner: "Kodansha",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/kodansha_logo_horizontal_lockup_fixed.svg",
        width: 187.5,
        height: 48.43,
    },
    {
        id: "sp-10",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/lucozade-white.svg",
        partner: "Lucozade",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/lucozade-white.svg",
        width: 83.06,
        height: 69.75,
    },
    {
        id: "sp-11",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/Orion_Logo_Registered_White%201.svg",
        partner: "Orion Innovation",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/Orion_Logo_Registered_White%201.svg",
        width: 160.73,
        height: 35.88,
    },
    {
        id: "sp-12",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/Peloton.svg",
        partner: "Peloton",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/Peloton.svg",
        width: 172.9,
        height: 55.78,
    },
    {
        id: "sp-13",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/11_micro_no_box_no_type_white_pos.svg",
        partner: "11 micro",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/11_micro_no_box_no_type_white_pos.svg",
        width: 43.84,
        height: 57.15,
    },
    {
        id: "sp-14",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/TrimbleR-Logo-White-RGB_281c5300ffe333f2e6e29348ac2b91ed.svg",
        partner: "Trimble",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/TrimbleR-Logo-White-RGB_281c5300ffe333f2e6e29348ac2b91ed.svg",
        width: 153,
        height: 34.42,
    },
    {
        id: "sp-15",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/ups_flat_shield_white.svg",
        partner: "UPS",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/ups_flat_shield_white.svg",
        width: 76.5,
        height: 86.25,
    },
    {
        id: "sp-16",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/logo-maldives-july25_a7a502595c6ef92790ccc499eccd86d1.svg",
        partner: "maldives",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/logo-maldives-july25_a7a502595c6ef92790ccc499eccd86d1.svg",
        width: 114.75,
        height: 48.38,
    },
    {
        id: "sp-17",
        image: "https://raw.githubusercontent.com/divclasssg/images/5b798b0f6d3127f5f93073919a647e18aae736ce/bls/lfc/icons/partners/sub_partners/wasabi-logo-stacked-white.svg",
        partner: "wasabi",
        hover: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/partners/sub_partners_red/wasabi-logo-stacked-white.svg",
        width: 114.64,
        height: 74.04,
    },
];

const SNS_DATA = [
    {
        id: "sns-1",
        image: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/social_medias/facebook.svg",
        sns: "Facebook",
    },
    {
        id: "sns-2",
        image: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/social_medias/linkedin.svg",
        sns: "LinkedIn",
    },
    {
        id: "sns-3",
        image: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/social_medias/tiktok.svg",
        sns: "TikTok",
    },
    {
        id: "sns-4",
        image: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/social_medias/instagram.svg",
        sns: "Instagram",
    },
    {
        id: "sns-5",
        image: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/social_medias/x.svg",
        sns: "X",
    },
    {
        id: "sns-6",
        image: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/social_medias/youtube.svg",
        sns: "YouTube",
    },
    {
        id: "sns-7",
        image: "https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/social_medias/unknown.svg",
        sns: "Unknown",
    },
];

export default function Globalfooter() {
    return (
        <footer className={styles.container}>
            <h2 className="visuallyhidden">Liverpool FC Global Footer</h2>
            <div className={styles.content}>
                <div className={styles.partners}>
                    <h3 className="visuallyhidden">
                        Liverpool FC Main Partners
                    </h3>
                    <div className={styles.mainPartners}>
                        <ul className={styles.list}>
                            {MAIN_PARTNER_DATA.map((item) => (
                                <GlobalfooterPartners
                                    key={item.id}
                                    item={item}
                                />
                            ))}
                        </ul>
                    </div>
                    <h4 className="visuallyhidden">
                        Liverpool FC Sub Partners
                    </h4>
                    <div className={styles.subPartners}>
                        <ul className={styles.list}>
                            {SUB_PARTNER_DATA.map((item) => (
                                <GlobalfooterPartners
                                    key={item.id}
                                    item={item}
                                />
                            ))}
                        </ul>
                    </div>
                </div>
                <h3 className="visuallyhidden">Social Medias</h3>
                <div className={styles.sns}>
                    <ul className={styles.list}>
                        {SNS_DATA.map((item) => (
                            <li key={item.id} className={styles.item}>
                                <Link href="#" className={styles.link}>
                                    <Image
                                        src={item.image}
                                        alt={item.sns}
                                        width={36}
                                        height={36}
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.appDownload}>
                    <h3 className={styles.title}>
                        Download the official LFC app
                    </h3>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                <Image
                                    src="https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/app_stores/app%20store.svg"
                                    alt="Download on the App Store"
                                    width={119.66}
                                    height={40}
                                />
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                <Image
                                    src="https://raw.githubusercontent.com/divclasssg/images/53dab594afb5810bcc04f638516bd50bfb5a2b90/bls/lfc/icons/app_stores/google%20play.svg"
                                    alt="GET IT ON Google Play"
                                    width={155}
                                    height={60}
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.legal}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                Privacy policy
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                Terms and conditions
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                Anti-Slavery
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                Cookies
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                Help
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                Contact Us
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                Accessibility
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link href="#" className={styles.link}>
                                Cookie Settings
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>
                    &copy; Copyright 2024 The Liverpool Football Club and
                    Athletic Grounds Limited. All rights reserved. Match
                    Statistics supplied by Opta Sports Data Limited. Reproduced
                    under licence from Football DataCo Limited. All rights
                    reserved.
                </p>
            </div>
        </footer>
    );
}
