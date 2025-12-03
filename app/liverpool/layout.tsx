import Globalfooter from "./components/globalfooter/globalfooter";
import Globalnav from "./components/globalnav/globalnav";
import "./styles/styles.scss";

export default function LiverpoolLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Globalnav />
            {children}
            <Globalfooter />
        </>
    );
}
