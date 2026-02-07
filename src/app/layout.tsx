import "./globals.css";
import Link from "next/link";
import { Outfit } from "next/font/google";
import LockScreen from "@/components/LockScreen";
import FooterSection from "@/components/footer/FooterSection";
import Navbar from "@/components/ui/Navbar";
import ContactSection from "@/components/contact/ContactSection";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Dr. Maya Reynolds | Clinical Psychologist Santa Monica",
  description: "Compassionate therapy for anxiety, trauma, and burnout. Dr. Maya Reynolds offers individual and couples counseling in Santa Monica, CA. Schedule a free consultation.",
  keywords: ["Psychologist", "Santa Monica", "Anxiety Therapy", "Trauma", "Burnout", "Mental Health", "Counseling"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans min-h-screen flex flex-col`}>
        <LockScreen />
        <Navbar />

        {/* Page content */}
        <main className="flex-grow">{children}</main>
        <ContactSection />
        <FooterSection />
      </body>
    </html>
  );
}
