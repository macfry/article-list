import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children, params: { locale } }: Readonly<{
    children: React.ReactNode;
    params: {
        locale: string;
    };
}>) => {
    return (
        <html lang={locale}>
            <body className={inter.className}>
                <main className="flex min-h-screen p-24">
                    <div className="z-10 w-full max-w-5xl flex-col items-center justify-between font-mono text-sm lg:flex">
                        <Navbar />
                        {children}
                    </div>
                </main>
            </body>
        </html>
    );
};

export default RootLayout;
