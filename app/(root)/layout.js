import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Logo from "../components/Logo";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "This is the home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} max-w-[80%] mx-auto`}>
        <header className="flex justify-between items-center py-4">
          <Logo />
          <Navbar />
        </header>
        {children}
        <footer>Ini footer</footer>
      </body>
    </html>
  );
}
