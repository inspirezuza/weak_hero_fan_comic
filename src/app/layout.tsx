import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Providers } from "./providers";
import WHnavbar from "./ui/WHnavbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Weak Hero Fan Comic",
  description: "Weak Hero Fan Comic",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans ${inter.variable}`}>
        <Providers>
          <WHnavbar />
          {children}{" "}
        </Providers>
      </body>
    </html>
  );
}
