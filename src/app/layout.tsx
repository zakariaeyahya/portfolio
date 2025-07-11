import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Space_Grotesk({ subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Yahya Zakariae - Data Science & AI Specialist",
  description: "Portfolio of Yahya Zakariae, a Data Science and AI student specializing in modern data technologies, machine learning, and innovative data-driven solutions.",
  keywords: "Yahya Zakariae, Data Science, Artificial Intelligence, Machine Learning, Data Engineering, Portfolio",
  authors: [{ name: "Yahya Zakariae" }],
  openGraph: {
    title: "Yahya Zakariae - Data Science & AI Specialist",
    description: "Portfolio of Yahya Zakariae, a passionate Data Science and AI student specializing in modern data technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}