import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/shared/components/layout";
import { AuthProvider } from "@/modules/auth";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Life Sphere - Holistic Wellness Community",
    template: "%s | Life Sphere",
  },
  description:
    "Join Life Sphere, a supportive community focused on holistic wellness, personal growth, and meaningful connections. Start your journey to a balanced life today.",
  keywords: [
    "wellness",
    "community",
    "mental health",
    "personal growth",
    "mindfulness",
    "holistic health",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-900 antialiased">
        <AuthProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
