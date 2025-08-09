import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NAMYAM",
  description: "Your ultimate online marketplace for authentic Puja Samagri Kits and spiritual products.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" }, // optional legacy
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-b from-[#fffaf0] to-[#fdf5e6] dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-200 flex flex-col min-h-screen`}
      >
        <Header />
        <main className="flex-grow flex items-center justify-center py-12 px-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
