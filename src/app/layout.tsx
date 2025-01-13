import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Portfolio | Web Frontend Engineer",
  description:
    "A modern portfolio showcasing web frontend engineering skills and projects",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      suppressHydrationWarning
      className={`${inter.variable} ${notoSansJP.variable}`}
    >
      <body className="font-sans bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-100 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col bg-white dark:bg-gray-900">
            <Navigation />
            <div className="flex-grow">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
