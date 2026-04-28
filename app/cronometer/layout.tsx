import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./styles/styles.scss";

const manrope = Manrope({
    variable: "--font-manrope",
    subsets: ["latin"],
    weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
    title: "Cronometer · Photo Log · UT",
};

export default function CronometerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div className={manrope.variable}>{children}</div>;
}
