import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "Before you Study Computer Science | Your Engineering Foundation",
    template: "%s | Before CS",
  },
  description:
    "The practical roadmap I wish I had before spending years learning the wrong things. Join 12,000+ aspiring engineers.",
  keywords: [
    "computer science",
    "programming",
    "CS50",
    "42 school",
    "beginner",
    "roadmap",
    "software engineering",
  ],
  authors: [{ name: "Before CS" }],
  creator: "Before CS",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Before you Study Computer Science",
    description:
      "The practical roadmap I wish I had before spending years learning the wrong things.",
    siteName: "Before CS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Before you Study Computer Science",
    description:
      "The practical roadmap I wish I had before spending years learning the wrong things.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
