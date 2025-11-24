import Globalnav from "./components/globalnav/globalnav";

export default function LiverpoolLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Globalnav />
            {children}
        </>
    );
}