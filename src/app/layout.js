import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

// Initialize the Inter font for consistent typography.
const inter = Inter({ subsets: ["latin"] });

/**
 * Defines the metadata for the application.
 * This is used by Next.js to set the page title, description, and favicons.
 */
export const metadata = {
  title: "NAMYAM",
  description: "Your ultimate online marketplace for authentic Puja Samagri Kits and spiritual products.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
};

/**
 * Defines the viewport configuration for the application.
 */
export const viewport = {
  // Forces a light color scheme for the entire application.
  colorScheme: 'light',
};

/**
 * The root layout component that wraps all pages in the application.
 * It establishes the main HTML structure, includes the header and footer,
 * and provides a consistent layout.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered (the page content).
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gradient-to-b from-[#fffaf0] to-[#fdf5e6] text-gray-800 flex flex-col min-h-screen`}
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