import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "This is the home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-500 font-semibold`}
      >
        <main className="container min-h-screen mx-auto flex justify-center">
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  );
}
